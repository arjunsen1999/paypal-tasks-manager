import { Box } from "@chakra-ui/react";
import React from "react";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

export default function MyTasksLoading() {
  return (
    <>
      <Box
        display={"grid"}
        gridTemplateColumns={{ sm: "1fr", md: "1fr", lg: "1fr 1fr 1fr" }}
        gap={"20px"}
      >
        <Box>
          <Skeleton height="30px" w="150px" mb="20px" />
          <Skeleton height="500px" w="100%" />
        </Box>
        <Box>
          <Skeleton height="30px" w="150px" mb="20px" />
          <Skeleton height="500px" w="100%" />
        </Box>
        <Box>
          <Skeleton height="30px" w="150px" mb="20px" />
          <Skeleton height="500px" w="100%" />
        </Box>
      </Box>
    </>
  );
}
