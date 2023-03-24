import { Box } from "@chakra-ui/react";
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

export default function TasksCard() {
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
                  <Box alignItems="center">
                    <Heading align="left" fontSize="xl" mr={"20px"}>
                      Name
                    </Heading>
                  </Box>
                  <Box>
                  <Heading fontSize={"18px"}>Title</Heading>
                  </Box>
                  <Box>
                  <Badge variant='outline' colorScheme='green'>
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
                  <Box>
                    <Text>
                      Created by:{" "}
                      <span style={{ fontWeight: "bold" }}>Arjun Sen</span>
                    </Text>
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
                <MenuItem >Progress</MenuItem>
                <MenuItem >Done</MenuItem>
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
