CREATE TABLE search_classroom.testdb(id int, name varchar(50));

INSERT INTO testdb VALUES(1,'test'),(2,'yamada'),(3,'watanabe');

CREATE TABLE search_classroom.classrooms(room_id int NOT NULL AUTO_INCREMENT, room_name varchar(50), room_charge_name varchar(60),PRIMARY KEY (room_id));

CREATE TABLE search_classroom.is_reservation(reservation_id int, reservation_name varchar(60), reservation_date date,reservation_first_time time,reservation_end_time time , is_finish boolean,room_id int);

-- 仮のデータを挿入
INSERT INTO search_classroom.classrooms (room_id, room_name, room_charge_name)
VALUES
  (1, '191教室', '担当者A'),
  (2, '192教室', '担当者B'),
  (3, '193教室', '担当者C'),
  (4, '194教室', '担当者D'),
  (5, '195教室', '担当者E'),
  (6, '201教室', '担当者F'),
  (7, '202教室', '担当者G'),
  (8, '203教室', '担当者H'),
  (9, '204教室', '担当者I'),
  (10, '205教室', '担当者J');

-- 仮のデータを挿入
INSERT INTO search_classroom.is_reservation (reservation_id, reservation_name, reservation_date, reservation_first_time, reservation_end_time, is_finish, room_id)
VALUES
  (1, '予約A', '2024-02-6', '08:00:00', '10:00:00', true, 2),
  (2, '予約B', '2024-02-7', '10:30:00', '12:30:00', false, 4),
  (3, '予約C', '2024-02-8', '13:00:00', '15:00:00', true, 6),
  (4, '予約D', '2024-02-9', '16:30:00', '18:30:00', false, 1),
  (5, '予約E', '2024-02-10', '19:00:00', '21:00:00', true, 9);
