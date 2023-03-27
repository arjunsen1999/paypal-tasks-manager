import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import TasksCard from "../Components/MyTasks/TasksCard";
import TasksHeading from "../Components/MyTasks/TasksHeading";
import MyTasksLoading from "../Loading-page/MyTasksLoading";

export default function MyTasks() {
  let [myTasksIsLoading, setMyTasksIsLoading] = useState(true);
  const { user } = useSelector((state) => state.userLogin);
  const { loader } = useSelector((state) => state.issue);
  const [userIssue, setUserIssue] = useState({
    panding: [],
    progress: [],
    done: [],
  });
  const getIssue = async () => {
    try {
      let res = await fetch(`http://localhost:8080/issue//user/issue`, {
        headers: {
          token: user.token,
        },
      });
      let resData = await res.json();
      setUserIssue((prev) => {
        return {
          ...prev,
          panding: resData.filter((ele) => {
            return ele.status == "panding";
          }),
          progress: resData.filter((ele) => {
            return ele.status == "progress";
          }),
          done: resData.filter((ele) => {
            return ele.status == "done";
          }),
        };
      });
      setMyTasksIsLoading(false);
    } catch (error) {
    }
  };
  useState(() => {
    getIssue();
  }, [loader]);
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
          <Box h="650px">
            <TasksHeading heading="To Do" />
            <Box
              bg="white"
              h="90%"
              p="10px"
              overflowY={"scroll"}
              borderWidth={"1px"}
              id="myTasksBox"
            >
              {userIssue.panding.map((ele) => {
               return <TasksCard key={ele._id} {...ele} />;
              })}
            </Box>
          </Box>
          <Box h="650px">
            <TasksHeading heading="IN PROGRESS" />
            <Box
              bg="white"
              h="90%"
              p="10px"
              overflowY={"scroll"}
              borderWidth={"1px"}
              id="myTasksBox"
            >
              {userIssue.progress.map((ele) => {
                return <TasksCard key={ele._id} {...ele} />;
              })}
            </Box>
          </Box>
          <Box h="650px">
            <TasksHeading heading="DONE" />
            <Box
              bg="white"
              h="90%"
              p="10px"
              overflowY={"scroll"}
              borderWidth={"1px"}
              id="myTasksBox"
            >
              {userIssue.done.map((ele) => {
                return <TasksCard key={ele._id} {...ele} />;
              })}
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}
