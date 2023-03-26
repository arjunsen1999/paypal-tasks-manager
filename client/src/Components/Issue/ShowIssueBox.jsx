import { Box } from '@chakra-ui/react'
import React from 'react'
import IssueCards from './IssueCards'

export default function ShowIssueBox({data}) {
  console.log(data)
  return (
    <>
        <Box maxH="600px" overflowY={"scroll"} p="10px"  id="myTasksBox">
          {
            data.map((ele) =>{
              return  <IssueCards key={ele._id} {...ele} />
            })
          }
           
        </Box>
    </>
  )
}
