import { Box } from '@chakra-ui/react'
import React from 'react'
import IssueCards from './IssueCards'

export default function ShowIssueBox() {
  return (
    <>
        <Box maxH="600px" overflowY={"scroll"} p="10px"  id="myTasksBox">
            <IssueCards />
            <IssueCards />
            <IssueCards />
        </Box>
    </>
  )
}
