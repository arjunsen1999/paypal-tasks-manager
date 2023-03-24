import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { AddIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

export default function AddIssueBox({ title }) {
  return (
    <>
      <Box w="100%" minH="50px" p="10px" bg="white" borderWidth="1px" mb="30px">
        <Box>
          <DrawerEx title={title} />
        </Box>
      </Box>
    </>
  );
}

function DrawerEx({ title }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        ref={btnRef}
        colorScheme="teal"
        variant="ghost"
        leftIcon={<AddIcon />}
        onClick={onOpen}
      >
        Create Issue
      </Button>
      <Drawer
        size={"sm"}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px" mb="20px">
            Create your {title} Issue
          </DrawerHeader>

          <DrawerBody>
            <FormControl isRequired mb="15px">
              <FormLabel>Title</FormLabel>
              <Input variant="filled" placeholder="Enter title" />
            </FormControl>
            <FormControl isRequired mb="15px">
              <FormLabel>Description</FormLabel>
              <Textarea variant="filled" placeholder="Enter description" />
            </FormControl>
            <FormControl isRequired mb="15px">
              <FormLabel>Role</FormLabel>
              <Select variant="filled" placeholder="Select option">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </FormControl>
          </DrawerBody>

          <DrawerFooter borderTopWidth={"1px"}>
            <Button
              colorScheme="teal"
              variant="outline"
              mr={3}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button colorScheme="teal">Create</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
