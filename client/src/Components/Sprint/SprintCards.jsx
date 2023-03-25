import React from "react";
import {
  Box,
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
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function SprintCards({end_date, managerId, start_date, name, number_of_issue, _id, status}) {
  return (
    <>
      {/* <Container maxW="4xl" p={{ base: 5, md: 12 }}> */}
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
                <Box display={"flex"} alignItems="center">
                  <Heading align="left" fontSize="xl" mr={"20px"}>
                    {name}
                  </Heading>
                  <Text fontSize={"17px"} mr={"20px"}>
                    {number_of_issue} issue
                  </Text>
                  <Badge variant="outline" colorScheme="green">
                    {status}
                  </Badge>
                </Box>
                <Box mb="10px">
                  <Text>{start_date} - {end_date}</Text>
                </Box>
                <Box>
                  <Text>
                    Created by:{" "}
                    <span style={{ fontWeight: "bold" }}>{managerId.username}</span>
                  </Text>
                </Box>
                {/* <Tags skills={skills} display={['none', 'none', 'flex', 'flex']} /> */}
                <Link to={`/sprint/${_id}`}>
                  <Button colorScheme="teal" variant="outline" rightIcon={<ArrowForwardIcon />}>
                    Visit sprint issue
                  </Button>
                </Link>
              </Stack>
            </Flex>
            <Stack>
              <Menu>
                <MenuButton as={Button} h="20px">
                  <BsThreeDots />
                </MenuButton>
                <MenuList>
                  <EditModel id={_id}/>
                  <AlertDialogExample id={_id}/>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>

          {/* <Tags skills={skills} display={['flex', 'flex', 'none', 'none']} /> */}
        </Box>
      </VStack>
      {/* </Container> */}
    </>
  );
}

function AlertDialogExample(id) {
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
              Delete Sprint
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

function EditModel(id) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <MenuItem onClick={onOpen}>Edit</MenuItem>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Sprint</ModalHeader>
          <ModalCloseButton />
          <ModalBody borderTopWidth={"1px"}>
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
              Edit
            </Button>
            <Button colorScheme="teal" variant="outline">
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
