"use client";
import { Box, Grid } from "@mantine/core";
import { classrooms } from "@/app/api/@types";
import { Dispatch, SetStateAction } from "react";

const RoomList = ({
  classrooms,
  is_res,
  roomId,
  setRoomId,
}: {
  classrooms: classrooms[] | null;
  is_res: number[] | null;
  roomId: number | null;
  setRoomId: Dispatch<SetStateAction<number | null>>;
}) => {
  return (
    <>
      <Grid gutter={1} m="50px 0">
        {classrooms &&
          classrooms.map((classroom) => (
            <Grid.Col
              m="0 0 -1px -1px"
              span={3}
              style={{
                height: "300px",
                border: "1px solid #000",
                boxSizing: "border-box",
              }}
              bg={
                roomId === classroom.room_id
                  ? "blue"
                  : is_res?.includes(classroom.room_id)
                  ? "red"
                  : "white"
              }
              key={classroom.room_id}
              id={classroom.room_id + ""}
              onClick={(e) => setRoomId(Number(e.currentTarget.id))}
            >
              <Box>{classroom.room_name}</Box>
            </Grid.Col>
          ))}
      </Grid>
    </>
  );
};
export default RoomList;
