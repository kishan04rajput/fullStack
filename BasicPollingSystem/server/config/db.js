import mysql from "mysql2/promise";

export const studentPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "0987654321",
  database: "students_db",
});

export const teacherPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "0987654321",
  database: "teachers_db",
});

export const institutePool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "0987654321",
  database: "institutes_db",
});

export const pollsPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "0987654321",
  database: "polls_db",
});
