import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
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
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
  AutoCompleteGroup,
  AutoCompleteFixedItem,
} from "@choc-ui/chakra-autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { add_issue } from "../../redux/Issue/Issue.action";

export default function AddIssueBox({ title, sprintId }) {
  return (
    <>
      <Box w="100%" minH="50px" p="10px" bg="white" borderWidth="1px" mb="30px">
        <Box>
          <DrawerEx title={title} sprintId={sprintId} />
        </Box>
      </Box>
    </>
  );
}

function DrawerEx({ title, sprintId }) {
  const toast = useToast();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userLogin);
  const { isLoading_button} = useSelector((state) => state.issue);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [formData, setFormData] = useState({
    sprintId,
    title : "",
    description : "",
    type : title,
  })
  const [people, setPeople] = useState([])

  const handleChange = (event) =>{
 let {name, value} = event.target;
 setFormData((prev) =>{
  return {
    ...prev,
    [name] : value
  }
 })
  }

  const searchUser = async (event) =>{
    try {
      let res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth//get/users?username=${event.target.value}`);
      let resData = await res.json();
      if(Array.isArray(resData)){
        setPeople(resData); 
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleClick = () =>{
    let assign_to = document.querySelector("#assign_to").value || false;
    let important = document.querySelector("#important").checked || false;
    let data = {
      ...formData,
      important
    }

    if(assign_to){
      data.assign_to = assign_to;
    }else{
      toast({
        title: `Error`,
        position: "top",
        isClosable: true,
        status: "error",
        description: "Please fill assign to",
      });
      return;
    }
   
    dispatch(add_issue(user.token, data))
  }

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
              <Input variant="filled" name={"title"} onChange={handleChange} placeholder="Enter title" />
            </FormControl>
            <FormControl isRequired mb="15px">
              <FormLabel>Description</FormLabel>
              <Textarea variant="filled" name="description" onChange={handleChange} placeholder="Enter description" />
            </FormControl>
            {/* //////////////////// */}

            {/* <Flex
              boxSize="full"
              h="100vh"
              pos="absolute"
              bg={"gray.400"}
              _dark={{
                bg: "gray.600",
              }}
              p={30}
              justifyContent="center"
            > */}
            <FormControl isRequired mb="15px">
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
            </Checkbox>
            {/* </Flex> */}
            {/* /////////////////// */}
            {/* <FormControl isRequired mb="15px">
              <FormLabel>Role</FormLabel>
              <Select variant="filled" placeholder="Select option">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </FormControl> */}
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
              isLoading_button?  <Button
              isLoading
              loadingText="Create"
              colorScheme="teal"
              mr={3}
            >
              Create
            </Button> : <Button colorScheme="teal" onClick={handleClick}>Create</Button>
            }
            
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
