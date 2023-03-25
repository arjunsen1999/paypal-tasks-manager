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
            {/* ////////////////////// */}
            <Box
              width={"100%"}
              paddingBlock={5}
              paddingInline={3}
              borderRadius={10}
              display="flex"
              flexDirection={"column"}
              gap={3}
              boxShadow={
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
              }
            >
              <Box
                width={"100%"}
                display={"flex"}
                gap={"30px"}
                alignItems={"center"}
                backgroundColor={"#edf2f7"}
                borderRadius={10}
                padding={"10px"}
              >
                <Box>
                  <Avatar
                    size="md"
                    name="Jerry"
                    src="https://upload.wikimedia.org/wikipedia/en/2/2f/Jerry_Mouse.png"
                  />
                </Box>

                <Box>
                  <Text fontSize={18} fontWeight={600}>
                    Jerry
                  </Text>
                </Box>
              </Box>

              <Box
                width={"100%"}
                display={"flex"}
                gap={"30px"}
                alignItems={"center"}
                backgroundColor={"#edf2f7"}
                borderRadius={10}
                padding={"10px"}
              >
                <Box>
                  <Avatar
                    size="md"
                    name="Jerry"
                    src="https://upload.wikimedia.org/wikipedia/en/2/2f/Jerry_Mouse.png"
                  />
                </Box>

                <Box>
                  <Text fontSize={18} fontWeight={600}>
                    Jerry
                  </Text>
                </Box>
              </Box>

              <Box
                width={"100%"}
                display={"flex"}
                gap={"30px"}
                alignItems={"center"}
                backgroundColor={"#edf2f7"}
                borderRadius={10}
                padding={"10px"}
              >
                <Box>
                  <Avatar
                    size="md"
                    name="Jerry"
                    src="https://upload.wikimedia.org/wikipedia/en/2/2f/Jerry_Mouse.png"
                  />
                </Box>

                <Box>
                  <Text fontSize={18} fontWeight={600}>
                    Jerry
                  </Text>
                </Box>
              </Box>

              <Box
                width={"100%"}
                display={"flex"}
                gap={"30px"}
                alignItems={"center"}
                backgroundColor={"#edf2f7"}
                borderRadius={10}
                padding={"10px"}
                cursor={"pointer"}
              >
                <Box>
                  <Avatar
                    size="md"
                    name="Jerry"
                    src="https://upload.wikimedia.org/wikipedia/en/2/2f/Jerry_Mouse.png"
                  />
                </Box>

                <Box>
                  <Text fontSize={18} fontWeight={600}>
                    Jerry
                  </Text>
                </Box>
              </Box>
            </Box>
            {/* /////////////////////////// */}
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
