"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import RoomList from "@/component/RoomList";
import { Box, Button, Container, Input, Text, Title } from "@mantine/core";
import {
  DateInput,
  DatePicker,
  DateTimePicker,
  TimeInput,
} from "@mantine/dates";
import { classrooms } from "../api/@types";

const ClassroomList = () => {
  const [classrooms, setClassrooms] = useState<classrooms[] | null>(null);
  const [is_res, setIs_res] = useState<number[] | null>(null);
  const [roomId, setRoomId] = useState<number | null>(null);
  const [reservationName, setReservationName] = useState("");
  const [reservationDate, setReservationDate] = useState("");
  const [reservationEndTime, setReservationEndTime] = useState("");
  const [reservationFirstTime, setReservationFirstTime] = useState("");
  const reservationFinish = false;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios("/api/classroom"); // ローカルホストへのリクエストは相対パスで指定可能
        const data = await response.data;
        console.log(data);
        setClassrooms(data[0]);
        setIs_res(data[1]);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchData();
  }, []);
  const sendData = () => {
    const date = axios.post("/api/reservation", {
      reservation_id: 6,
      reservation_name: reservationName,
      reservation_date: reservationDate,
      reservation_firstTime: reservationFirstTime,
      reservation_endTime: reservationEndTime,
      is_finish: reservationFinish,
      room_id: roomId,
    });
    alert("予約しました");
  };

  return (
    <Container fluid>
      <Title m="20px 0" ta="center">
        一覧ページ
      </Title>
      <RoomList
        classrooms={classrooms}
        roomId={roomId}
        is_res={is_res}
        setRoomId={setRoomId}
      />
      <Input
        onChange={(e) => {
          setReservationName(e.currentTarget.value);
        }}
      />

      <Input
        onChange={(e) => {
          setReservationDate(e.currentTarget.value);
        }}
      />
      <TimeInput
        label="Input label"
        description="Input description"
        placeholder="Input placeholder"
        withSeconds
        onChange={(e) => {
          setReservationFirstTime(e.currentTarget.value);
        }}
      />
      <TimeInput
        label="Input label"
        description="Input description"
        placeholder="Input placeholder"
        withSeconds
        onChange={(e) => {
          setReservationEndTime(e.currentTarget.value);
        }}
      />
      <Button onClick={sendData}>予約する</Button>
    </Container>
  );
};

export default ClassroomList;
