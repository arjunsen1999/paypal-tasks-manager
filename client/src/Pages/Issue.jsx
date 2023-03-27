import { Box, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AddIssueBox from "../Components/Issue/AddIssueBox";
import IssueHeading from "../Components/Issue/IssueHeading";
import ShowIssueBox from "../Components/Issue/ShowIssueBox";
import { issue_reset } from "../redux/Issue/Issue.actionType";

export default function Issue() {
  const { id } = useParams("id");
  const dispatch = useDispatch();
  const toast = useToast();
  const { user } = useSelector((state) => state.userLogin);
  const { isLoading_button, isSuccess, isError, message } = useSelector((state) => state.issue);
  const [sprintIssue, setSprintIssue] = useState({
    bug : [],
    feature : [],
    story : [] 
  })
  const getIssueData = async () => {
    try {
      let res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/issue/sprint/issue/${id}`, {
        method : 'GET',
        headers : {
          token : user.token
        }
      });
      let resData = await res.json();
      setSprintIssue((prev) =>{
        return {
          ...prev,
          bug : resData.filter((ele) =>{
            return ele.type == "Bug";
          }),
          feature : resData.filter((ele) =>{
            return ele.type == "Feature";
          }),
          story : resData.filter((ele) =>{
            return ele.type == "Story";
          }),

        }
      });

    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
      // For Error
      if (isError) {
        toast({
          title: `Error`,
          position: "top",
          isClosable: true,
          status: "error",
          description: message,
        });
      }
      // For Success
      if (isSuccess) {
        toast({
          title: `Success`,
          position: "top",
          isClosable: true,
          status: "success",
          description: message,
        });
      }
      dispatch({type : issue_reset})
    getIssueData();
  }, [isSuccess, isError]);
  return (
    <>
      <Box
        display={"grid"}
        gridTemplateColumns={{ sm: "1fr", md: "1fr", lg: "1fr 1fr 1fr" }}
        gap={"20px"}
      >
        <Box minH="200px">
          <IssueHeading heading="Bug" />
          <AddIssueBox title="Bug" sprintId={id} />
          <ShowIssueBox data={sprintIssue.bug}/>
        </Box>
        <Box minH="200px">
          <IssueHeading heading="Feature" />
          <AddIssueBox title="Feature" sprintId={id}  />
          <ShowIssueBox data={sprintIssue.feature}/>
        </Box>
        <Box minH="200px">
          <IssueHeading heading="Story" />
          <AddIssueBox title="Story" sprintId={id}  />
          <ShowIssueBox data={sprintIssue.story}/>
        </Box>
      </Box>
    </>
  );
}
