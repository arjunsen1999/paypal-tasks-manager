import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

export default function IssueHeading(props) {
  return (
   <>
      <Box mb="20px">
        <Heading as="h3" fontSize={"20px"}>
          {props.heading}
        </Heading>
      </Box>
   </>
  )
}
