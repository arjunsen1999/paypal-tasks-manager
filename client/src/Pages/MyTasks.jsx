import { Box } from "@chakra-ui/react";
import React from "react";
import TasksCard from "../Components/MyTasks/TasksCard";
import TasksHeading from "../Components/MyTasks/TasksHeading";

export default function MyTasks() {
  return (
    <>
      <Box display={"grid"} gridTemplateColumns={{sm : "1fr", md : "1fr", lg : "1fr 1fr 1fr"}} gap={"20px"}>
        <Box h="550px">
          <TasksHeading heading="To Do" />
          <Box
            bg="white"
            h="90%"
            p="10px"
            overflowY={"scroll"}
            borderWidth={"1px"}
            id="myTasksBox"
          >
            <TasksCard />
            <TasksCard />
            <TasksCard />
            <TasksCard />
            <TasksCard />
            <TasksCard />
          </Box>
        </Box>
        <Box h="550px">
          <TasksHeading heading="IN PROGRESS" />
          <Box
            bg="white"
            h="90%"
            p="10px"
            overflowY={"scroll"}
            borderWidth={"1px"}
            id="myTasksBox"
          >
            <TasksCard />
          </Box>
        </Box>
        <Box h="550px">
          <TasksHeading heading="DONE" />
          <Box
            bg="white"
            h="90%"
            p="10px"
            overflowY={"scroll"}
            borderWidth={"1px"}
            id="myTasksBox"
          >
            <TasksCard />
          </Box>
        </Box>
      </Box>
    </>
  );
}
