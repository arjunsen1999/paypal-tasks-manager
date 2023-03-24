import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import TasksCard from "../Components/MyTasks/TasksCard";
import TasksHeading from "../Components/MyTasks/TasksHeading";
import MyTasksLoading from "../Loading-page/MyTasksLoading";

export default function MyTasks() {
  let [myTasksIsLoading, setMyTasksIsLoading] = useState(true);
  useState(() => {
    setMyTasksIsLoading(false);
  }, []);
  return (
    <>
      {myTasksIsLoading ? (
        <MyTasksLoading />
      ) : (
        <Box
          display={"grid"}
          gridTemplateColumns={{ sm: "1fr", md: "1fr", lg: "1fr 1fr 1fr" }}
          gap={"20px"}
        >
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
      )}
    </>
  );
}
