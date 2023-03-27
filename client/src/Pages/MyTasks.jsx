import { Box, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TasksCard from "../Components/MyTasks/TasksCard";
import TasksHeading from "../Components/MyTasks/TasksHeading";
import MyTasksLoading from "../Loading-page/MyTasksLoading";
import { issue_reset } from "../redux/Issue/Issue.actionType";

export default function MyTasks() {
  const toast = useToast();
  let [myTasksIsLoading, setMyTasksIsLoading] = useState(true);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userLogin);
  const { isSuccess, isError, message } = useSelector((state) => state.issue);
  const [userIssue, setUserIssue] = useState({
    panding: [],
    progress: [],
    done: [],
  });
  const getIssue = async () => {
    try {
      let res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/issue/user/issue`, {
        headers: {
          token: user.token,
        },
      });
      let resData = await res.json();
      console.log(resData)
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
  useEffect(() => {
   
  dispatch({type : issue_reset});
    getIssue();

  }, [isSuccess, isError]);
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
