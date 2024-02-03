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
  });

  const query = "SELECT * FROM testdb";
  const result = await connection.query(query);
  connection.end();
  return NextResponse.json(result);
}

//create table search_classroom.testdb(id int ,name varchar(50));
//insert into testdb values(1,'test'),(2,'yamada'),(3,'watanabe');
