import * as mysql from "promise-mysql";

import { NextResponse } from "next/server";

require("dotenv").config({ path: "../.env" });

// export async function POST(req, res) {
//   const connection = await mysql.createConnection({
//     host: "db",
//     port: 3306,
//     database: process.env.MYSQL_DATABASE,
//     user: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASSWORD,
//     multipleStatements: true,
//   });

//   const body = await req.json;
//   console.log(body);
//   // const query_insert =
//   //   "INSERT INTO is_reservation VALUES("+{}+", '予約A', '2024-02-6', '08:00:00', '10:00:00', true, 5);";
//   // const result = await connection.query(query_insert);
//   // connection.end();
//   return NextResponse.json(body);
// }

// //create table search_classroom.testdb(id int ,name varchar(50));
// //insert into testdb values(1,'test'),(2,'yamada'),(3,'watanabe');

export async function POST(req, res) {
  const data = await req.json();
  const connection = await mysql.createConnection({
    host: "db",
    port: 3306,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    multipleStatements: true,
  });

  const query_insert =
    "INSERT INTO is_reservation VALUES( '" +
    data.reservation_name +
    "', ' " +
    data.reservation_date +
    "', '" +
    data.reservation_firstTime +
    "', '" +
    data.reservation_endTime +
    "', " +
    data.is_finish +
    ", " +
    data.room_id +
    ");";
  const result = await connection.query(query_insert);
  connection.end();

  return NextResponse.json(result);
}
