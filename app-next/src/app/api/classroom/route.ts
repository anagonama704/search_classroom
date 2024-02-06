import { NextResponse } from "next/server";
import * as mysql from "promise-mysql";

require("dotenv").config({ path: "../.env" });

export async function GET() {
  const connection = await mysql.createConnection({
    host: "db",
    port: 3306,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    multipleStatements: true,
  });

  const query_list = "SELECT * FROM classrooms;";
  const query_is_reservation =
    " SELECT classrooms.room_id  FROM classrooms RIGHT JOIN is_reservation ON classrooms.room_id = is_reservation.room_id;";
  const result = await connection.query(query_list + query_is_reservation);
  connection.end();
  return NextResponse.json(result);
}

//create table search_classroom.testdb(id int ,name varchar(50));
//insert into testdb values(1,'test'),(2,'yamada'),(3,'watanabe');
