import { Avatar, Box, Select, Textarea } from "@chakra-ui/react";
import React from "react";
import {
  Stack,
  VStack,
  Heading,
  Flex,
  Text,
  Image,
  useColorModeValue,
  Container,
  Button,
  Badge,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

export default function IssueCards() {
  return (
    <>
      <Box bg="#EDF2F7" minH="100px" mb="10px">
        <VStack spacing={4} marginBottom={6} align="left" mb="20px">
          <Box
            px={4}
            py={5}
            borderWidth="1px"
            _hover={{ shadow: "lg" }}
            bg={useColorModeValue("white", "gray.800")}
            position="relative"
            rounded="md"
          >
            <Flex justifyContent="space-between">
              <Flex>
                <Stack spacing={2} pl={3} align="left">
                  {/* <Box alignItems="center">
                    <Heading align="left" fontSize="xl" mr={"20px"}>
                      Name
                    </Heading>
                  </Box> */}
                  <Box>
                    <Heading fontSize={"18px"}>Title</Heading>
                  </Box>
                  <Box>
                    <Badge variant="outline" colorScheme="green">
                      Default
                    </Badge>
                  </Box>
                  <Box mb="10px">
                    <Text textAlign={"left"}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Hic maiores sequi consequuntur? Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Et error pariatur placeat.
                    </Text>
                  </Box>
                  <Box mb="10px">
                    <Text textAlign={"left"}>
                      24/May/22 3:55 PM - 28/May/22 3:55 PM
                    </Text>
                  </Box>
                  <Box mb="10px">
                    <Stack direction="row">
                      <Avatar src="https://bit.ly/broken-link" />
                      <Text>Name</Text>
                    </Stack>
                  </Box>
                  {/* <Tags skills={skills} display={['none', 'none', 'flex', 'flex']} /> */}
                </Stack>
              </Flex>
              <Stack>
                <Menu>
                  <MenuButton as={Button} h="20px">
                    <BsThreeDots />
                  </MenuButton>
                  <MenuList>
                    <DrawerEx />
                    <AlertDialogEx />
                  </MenuList>
                </Menu>
              </Stack>
            </Flex>

            {/* <Tags skills={skills} display={['flex', 'flex', 'none', 'none']} /> */}
          </Box>
        </VStack>
      </Box>
    </>
  );
}

function AlertDialogEx() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  return (
    <>
      <MenuItem onClick={onOpen}>Delete</MenuItem>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Issue
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={onClose} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

function DrawerEx() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <MenuItem ref={btnRef} onClick={onOpen}>
        Edit
      </MenuItem>
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
            Edit Issue
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
            <Button colorScheme="teal">Edit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
