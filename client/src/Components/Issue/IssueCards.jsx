import { Avatar, Box, Checkbox, Select, Textarea } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { delete_issue } from "../../redux/Issue/Issue.action";
import { AutoComplete, AutoCompleteInput, AutoCompleteItem, AutoCompleteList } from "@choc-ui/chakra-autocomplete";
import { useRef } from "react";
import { issueEdit } from "../../redux/Issue/Issue.action";

export default function IssueCards({_id, title, status, description, sprintId, assign_to}) {
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
                    <Heading fontSize={"18px"}>{title}</Heading>
                  </Box>
                  <Box>
                    <Badge variant="outline" colorScheme="green">
                      {status}
                    </Badge>
                  </Box>
                  <Box mb="10px">
                    <Text textAlign={"left"}>
                      {description}
                    </Text>
                  </Box>
                  <Box mb="10px">
                    <Text textAlign={"left"}>
                      {sprintId.start_date} - {sprintId.end_date}
                    </Text>
                  </Box>
                  <Box mb="10px">
                    <Stack direction="row">
                      <Avatar src={assign_to.profile_picture?assign_to.profile_picture : "https://bit.ly/broken-link"} />
                      <Text>{assign_to.username}</Text>
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
                    <DrawerEx _id={_id} title={title} description={description} assign_to={assign_to}/>
                    <AlertDialogEx _id={_id}/>
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

function AlertDialogEx({_id}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userLogin);
  const { isLoading_button, isSuccess, isError } = useSelector((state) => state.issue);
  const handleDelete = (id) =>{
   dispatch(delete_issue(user.token, id))
  }
  useEffect(() =>{
    if(isError){
      onClose()
    }
    if(isSuccess){
      onClose();
    }
  }, [isSuccess, isError])
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
              {
                isLoading_button?  <Button
                isLoading
                loadingText="Delete"
                colorScheme="red"
                ml={3}
              >
                 Delete
              </Button> :  <Button colorScheme="red" onClick={() => handleDelete(_id)} ml={3}>
                Delete
              </Button>
              }
             
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

function DrawerEx({title, _id, description}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userLogin);
  const { isLoading_button} = useSelector((state) => state.issue);
  // const [people, setPeople] = useState([])
  const [formDate, setFormData] = useState({
    title,
    description
  });

  const handleChange = (event) =>{
    let {name, value} = event.target;
    setFormData((prev) =>{
     return {
       ...prev,
       [name] : value
     }
    })
  }

  const handleEdit = (id) =>{
    dispatch(issueEdit(user.token, id, formDate))
  }



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
            <FormControl  mb="15px">
              <FormLabel>Title</FormLabel>
              <Input variant="filled" name={"title"} onChange={handleChange} value={formDate.title} placeholder="Enter title" />
            </FormControl>
            <FormControl  mb="15px">
              <FormLabel>Description</FormLabel>
              <Textarea variant="filled" name={"description"} onChange={handleChange} value={formDate.description} placeholder="Enter description" />
            </FormControl>
            {/* <FormControl  mb="15px">
              <FormLabel>Assign to</FormLabel>
              <AutoComplete rollNavigation>
                <AutoCompleteInput
                  variant="filled"
                  placeholder="Search..."
                  id = "assign_to"

                  autoFocus
                  onChange={searchUser}
                />
                <AutoCompleteList>
                  {people.map((person, oid) => (
                    <AutoCompleteItem
                      key={`option-${oid}`}
                      value={person.username}
                      textTransform="capitalize"
                      align="center"
                     
                    >
                      <Avatar size="sm" name={person.username?person.username : ""} src={person.profile_picture?person.profile_picture: "" } />
                      <Text ml="4">{person.username?person.username : "" }</Text>
                    </AutoCompleteItem>
                  ))}
                </AutoCompleteList>
              </AutoComplete>
            </FormControl>
            <Checkbox size="md" colorScheme="teal" id="important">
              Important
            </Checkbox> */}
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
            {
              isLoading_button? <Button
              isLoading
              loadingText="Edit"
              colorScheme="teal"
              mr={3}
            >
              Edit
            </Button> : <Button colorScheme="teal" onClick={() => handleEdit(_id)}>Edit</Button>
            }
            
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
