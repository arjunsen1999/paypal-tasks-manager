import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
    Avatar,
    AvatarBadge,
    IconButton,
    Center,
    Box,
    Editable,
    EditablePreview,
    useEditableControls,
    ButtonGroup,
    EditableInput,
    Tooltip,
    Textarea,
  } from "@chakra-ui/react";
  import {
    CheckIcon,
    CloseIcon,
    EditIcon,
  } from "@chakra-ui/icons";
  
  import React from "react";
  
  const Profile = () => {
    function EditableControls() {
      const {
        isEditing,
        getSubmitButtonProps,
        getCancelButtonProps,
        getEditButtonProps,
      } = useEditableControls();
  
      return isEditing ? (
        <ButtonGroup justifyContent="center" size="sm">
          <Tooltip label={"Change"} fontSize={"md"}>
            <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
          </Tooltip>
  
          <Tooltip label={"Cancel"} fontSize={"md"}>
            <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
          </Tooltip>
        </ButtonGroup>
      ) : (
        <Flex>
          <Tooltip label={"Edit"} fontSize="md">
            <IconButton size="sm" icon={<EditIcon />} {...getEditButtonProps()} />
          </Tooltip>
        </Flex>
      );
    }
  
    return (
      <>
        <Box
          width={"100%"}
          height={"100%"}
          backgroundImage={
            // `linear-gradient(rgba(0, 0, 0, 0.63), rgba(0, 0, 0, 0.623)), url(https://project-management.com/wp-content/uploads/2023/01/pmcom-11923-clickup-alts.jpeg)`
            // "https://project-management.com/wp-content/uploads/2023/01/pmcom-11923-clickup-alts.jpeg"
            'https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'
            // 'https://images.wallpapersden.com/image/download/black-color-liquid-4k_bGtpbmeUmZqaraWkpJRqZmdlrWdtbWU.jpg'
          }
          backgroundRepeat={"no-repeat"}
          backgroundSize={"cover"}
          backgroundPosition={"center"}
          boxShadow={
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
          }
          borderRadius={20}
        >
          <Box width={"100%"} height={"100%"} backdropFilter={"blur(10px)"}>
            <Box width={"100%"} height={"100%"} padding={5}>
              <Heading textAlign={"center"}>Profile Section</Heading>
  
              <Flex justifyContent={"center"} alignItems={"center"}>
                <Stack
                  spacing={4}
                  w={"full"}
                  maxW={"md"}
                  bg={"rgba(237, 219, 195, 0.3)"}
                  rounded={"xl"}
                  boxShadow={"lg"}
                  p={6}
                  my={12}
                >
                  <FormControl id="userImage">
                    <FormLabel>User Icon</FormLabel>
                    <Stack direction={["column", "row"]} spacing={6}>
                      <Center>
                        <Avatar size="xl" src="https://bit.ly/sage-adebayo">
                          <AvatarBadge boxSize="1em" bg="red.500" />
                        </Avatar>
                      </Center>
                      <Center w="full">
                        <Button w="full">Change Icon</Button>
                      </Center>
                    </Stack>
                  </FormControl>
  
                  <FormControl id="username">
                    <FormLabel>User name</FormLabel>
                    <Editable
                      defaultValue="Arjun Sen"
                      isPreviewFocusable={false}
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                      gap={5}
                    >
                      <EditablePreview
                        border={"1px soli black"}
                        width={"100%"}
                        padding={1.5}
                        paddingLeft={"18px"}
                        fontWeight={600}
                      />
                      {/* Here is the custom input */}
                      <Input
                        type={"text"}
                        as={EditableInput}
                        fontSize={"18px"}
                        fontWeight={600}
                        border={"1px solid black"}
                      />
                      <EditableControls />
                    </Editable>
                  </FormControl>
  
                  <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input
                      type="email"
                      value={"arjunsen@example.com"}
                      fontSize={"18px"}
                      fontWeight={600}
                      border={"1px solid black"}
                      readOnly
                    />
                  </FormControl>
  
                  <FormControl id="aboutMe">
                    <FormLabel>About Me</FormLabel>
                    <Textarea
                      placeholder="Write Something About You!"
                      fontSize={"18px"}
                      fontWeight={600}
                      border={"1px solid black"}
                    />
                  </FormControl>
  
                  <FormControl id="task">
                    <FormLabel>No. Of Task</FormLabel>
                    <Input
                      type="number"
                      value={21}
                      fontSize={"18px"}
                      fontWeight={600}
                      border={"1px solid black"}
                      readOnly
                    />
                  </FormControl>
  
                  <Stack spacing={6} direction={["column", "row"]}>
                    <Button
                      bg={"red.400"}
                      color={"white"}
                      w="full"
                      _hover={{
                        bg: "red.500",
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      bg={"blue.400"}
                      color={"white"}
                      w="full"
                      _hover={{
                        bg: "blue.500",
                      }}
                    >
                      Submit
                    </Button>
                  </Stack>
                </Stack>
              </Flex>
            </Box>
          </Box>
        </Box>
      </>
    );
  };
  
  export default Profile;