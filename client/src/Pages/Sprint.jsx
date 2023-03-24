import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import SprintCards from "../Components/Sprint/SprintCards";

export default function Sprint() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box>
        <Box mb="20px">
          <Button colorScheme="teal" size="lg" onClick={onOpen}>
            Create Sprint
          </Button>
          {/* // Model */}

          <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Create Sprint</ModalHeader>
              <ModalCloseButton />
              <ModalBody borderTopWidth={"1px"}>
                <Box mb="30px">
                  <Text fontSize={"18px"}>
                    This sprint contain{" "}
                    <span style={{ fontWeight: "bold" }}>10 working days.</span>{" "}
                    <a
                      href="/"
                      style={{ color: "blue", textDecoration: "none" }}
                    >
                      Learn more
                    </a>
                  </Text>
                </Box>
                <Box mb="20px">
                  <FormControl isRequired mb="10px">
                    <FormLabel>Sprint Name</FormLabel>
                    <Input variant="filled" placeholder="Enter sprint name" />
                  </FormControl>
                  <FormControl mb="10px">
                    <FormLabel>Goal</FormLabel>
                    <Input variant="filled" placeholder="Enter goal" />
                  </FormControl>
                  <FormControl mb="10px">
                    <FormLabel>Start Date</FormLabel>
                    <Input
                      placeholder="Select Date and Time"
                      size="md"
                      type="datetime-local"
                      variant="filled"
                    />
                  </FormControl>
                  <FormControl mb="10px">
                    <FormLabel>End Date</FormLabel>
                    <Input
                      placeholder="Select Date and Time"
                      size="md"
                      type="datetime-local"
                      variant="filled"
                    />
                  </FormControl>
                </Box>
                {/* <Lorem count={2} /> */}
              </ModalBody>

              <ModalFooter borderTopWidth={"1px"}>
                <Button colorScheme="teal" mr={3} onClick={onClose}>
                  Create
                </Button>
                <Button colorScheme="teal" variant="outline">
                  Cancel
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
        <Box>
          <SprintCards />
          <SprintCards />
          <SprintCards />
        </Box>
      </Box>
    </>
  );
}
