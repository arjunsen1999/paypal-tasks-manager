import { Box } from "@chakra-ui/react";
import React from "react";
import AddIssueBox from "../Components/Issue/AddIssueBox";
import IssueHeading from "../Components/Issue/IssueHeading";
import ShowIssueBox from "../Components/Issue/ShowIssueBox";

export default function Issue() {
  return (
    <>
      <Box
        display={"grid"}
        gridTemplateColumns={{ sm: "1fr", md: "1fr", lg: "1fr 1fr 1fr" }}
        gap={"20px"}
      >
        <Box minH="200px">
          <IssueHeading heading="Bug" />
          <AddIssueBox title="Bug" />
          <ShowIssueBox />
        </Box>
        <Box minH="200px">
          <IssueHeading heading="Feature" />
          <AddIssueBox title="Feature"/>
        </Box>
        <Box minH="200px">
          <IssueHeading heading="Story" />
          <AddIssueBox title="Story"/>
        </Box>
      </Box>
    </>
  );
}
