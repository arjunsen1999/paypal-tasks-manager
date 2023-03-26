import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AddIssueBox from "../Components/Issue/AddIssueBox";
import IssueHeading from "../Components/Issue/IssueHeading";
import ShowIssueBox from "../Components/Issue/ShowIssueBox";

export default function Issue() {
  const { id } = useParams("id");
  const { user } = useSelector((state) => state.userLogin);
  const [sprintIssue, setSprintIssue] = useState({
    bug : [],
    feature : [],
    story : [] 
  })
  const getIssueData = async () => {
    try {
      let res = await fetch(`http://localhost:8080/issue/sprint/issue/${id}`, {
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
    getIssueData();
  }, []);
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
