import { Box } from "@chakra-ui/react";
import React from "react";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

export default function SprintLoading() {
  return (
    <>
      <Box>
        <Skeleton height="45px" w="170px" mb="30px" borderRadius={"10px"} />
        <Skeleton height="150px" mb="20px" />
        <Skeleton height="150px" mb="20px" />
        <Skeleton height="150px" mb="20px" />
      </Box>
    </>
  );
}
