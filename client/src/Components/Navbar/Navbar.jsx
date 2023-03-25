import React, { ReactNode } from "react";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Image,
  Link,
  useToast,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiMenu,
  FiChevronDown,
} from "react-icons/fi";
import { GiSprint } from "react-icons/gi";
import { FaTasks } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { user_login_reset, user_logout } from "../../redux/Auth/Login/Auth.actionType";
import { useEffect } from "react";

const LinkItems = [
  { name: "Home", icon: FiHome, route: "/" },
  { name: "Sprint", icon: GiSprint, route: "/sprint" },
  { name: "My Tasks", icon: FaTasks, route: "/tasks" }
];

export default function SidebarWithHeader({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    // position={"sticky"} top="0px"
    <Box bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: "290px" }} p="4">
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  const { user, isError, isSuccess } = useSelector(
    (state) => state.userLogin
  );
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        {/* <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text> */}
        <Image w="50px" src="./tasks.png" />
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavLink to={link.route}>
          {" "}
          <NavItem key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        </NavLink>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "#4EC9C4",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  const toast = useToast();
  const { User_isLoading, isError, isSuccess, message, user } = useSelector(
    (state) => state.userLogin
  );
  let dispatch = useDispatch();
  useEffect(() =>{
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
  }, [isError, isSuccess])
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      {/* <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Logo
      </Text> */}
      <Image
        w="50px"
        src="./tasks.png"
        display={{ base: "flex", md: "none" }}
      />

      <HStack spacing={{ base: "0", md: "6" }}>
        {/* <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        /> */}
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                  src={user ? user.pic : "https://bit.ly/broken-link"}
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="lm">{user ? user.username : "User"}</Text>
                  {/* <Text fontSize="sm" color="gray.600">
                    Seller
                  </Text> */}
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <NavLink to="/">
                <MenuItem>Profile</MenuItem>
              </NavLink>
              <NavLink to="/">
                <MenuItem>Settings</MenuItem>
              </NavLink>
              {user ? null : (
                <NavLink to="/register">
                  <MenuItem>Register</MenuItem>
                </NavLink>
              )}

              <MenuDivider />
              {user ? (
                <MenuItem onClick={() => dispatch({type : user_logout})}>Logout</MenuItem>
              ) : (
                <NavLink to="/login">
                  <MenuItem>Login</MenuItem>
                </NavLink>
              )}
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
