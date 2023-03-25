import React, { useEffect, useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  InputRightElement,
  InputGroup,
  useToast,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import styles from "../styles/RegisterButton.module.css";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { userLogin } from "../redux/Auth/Login/Auth.action";
import { user_login_reset } from "../redux/Auth/Login/Auth.actionType";

const Login = () => {
  const toast = useToast();
  const { User_isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.userLogin
  );
  let dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [FormInput, setFormInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) =>{
    event.preventDefault();
    dispatch(userLogin(FormInput))
  }

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

    dispatch({ type: user_login_reset });
  }, [isError, isSuccess]);

  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" name="email" onChange={handleChange} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? "text" : "password"} name="password" onChange={handleChange} />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Stack width={"100%"}>
                  {
                    User_isLoading?     <Button
                    isLoading
                    loadingText="Login"
                    colorScheme="teal"
                    variant="outline"
                    w="100%"
                  >
                    Login
                  </Button> : <Button className={styles.registerButton} onClick={handleSubmit}>Login</Button>
                  }
                  
                </Stack>
              </Stack>
            </Stack>
            <Stack marginTop={5}>
              <Text textAlign={"center"} fontSize={17}>
                New User?{" "}
                <Link to={"/register"}>
                  <span style={{ color: "blue"}}>Sign up</span>
                </Link>
              </Text>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default Login;
