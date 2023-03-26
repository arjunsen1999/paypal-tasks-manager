import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
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
import SprintLoading from "../Loading-page/SprintLoading";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addSprint } from "../redux/Sprint/Sprint.action";
import { sprint_reset } from "../redux/Sprint/Sprint.actionType";

export default function Sprint() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userLogin);
  const { isLoading_button, isSuccess, isError, message } = useSelector(
    (state) => state.sprint
  );
  let [data, setData] = useState([]);
  const [formInput, setFormInput] = useState({
    name: "",
    goal: "",
    start_date: "",
    end_date: "",
  });

  const handleChange = (event) => {
    let { name, value } = event.target;
    setFormInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    dispatch(addSprint(user.token, formInput));
  };

  let [sprintIsLoading, setSprintIsLoading] = useState(true);
  const getSprintData = async () => {
    try {
      let res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/sprint/get`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: user.token,
        },
      });
      let resData = await res.json();
      setSprintIsLoading(false);
      setData(resData);
    } catch (error) {
      setSprintIsLoading(false);
    }
  };
  useEffect(() => {
    // For Error
    if (isError) {
      toast({
        title: `Error`,
        position: "top",
        isClosable: true,
        status: "error",
        description: message,
      });
    }
    // For Success
    if (isSuccess) {
      toast({
        title: `Success`,
        position: "top",
        isClosable: true,
        status: "success",
        description: message,
      });
    }
    dispatch({ type: sprint_reset });
    getSprintData();
  }, [isError, isSuccess]);
  return (
    <>
      {sprintIsLoading ? (
        <SprintLoading />
      ) : (
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
                      <span style={{ fontWeight: "bold" }}>
                        10 working days.
                      </span>{" "}
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
                      <Input
                        variant="filled"
                        name="name"
                        onChange={handleChange}
                        placeholder="Enter sprint name"
                      />
                    </FormControl>
                    <FormControl mb="10px">
                      <FormLabel>Goal</FormLabel>
                      <Input
                        variant="filled"
                        onChange={handleChange}
                        name="goal"
                        placeholder="Enter goal"
                      />
                    </FormControl>
                    <FormControl mb="10px">
                      <FormLabel>Start Date</FormLabel>
                      <Input
                        placeholder="Select Date and Time"
                        size="md"
                        type="datetime-local"
                        variant="filled"
                        name="start_date"
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl mb="10px">
                      <FormLabel>End Date</FormLabel>
                      <Input
                        placeholder="Select Date and Time"
                        size="md"
                        type="datetime-local"
                        variant="filled"
                        name="end_date"
                        onChange={handleChange}
                      />
                    </FormControl>
                  </Box>
                  {/* <Lorem count={2} /> */}
                </ModalBody>

                <ModalFooter borderTopWidth={"1px"}>
                  {isLoading_button ? (
                    <Button
                      isLoading
                      loadingText="Create"
                      colorScheme="teal"
                      mr={3}
                    >
                      Create
                    </Button>
                  ) : (
                    <Button colorScheme="teal" mr={3} onClick={handleSubmit}>
                      Create
                    </Button>
                  )}

                  <Button
                    colorScheme="teal"
                    variant="outline"
                    onClick={onClose}
                  >
                    Cancel
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
          <Box>
            {data.map((ele) => {
              return <SprintCards {...ele} />;
            })}
          </Box>
        </Box>
      )}
    </>
  );
}
