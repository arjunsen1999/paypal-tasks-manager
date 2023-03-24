import { Box } from "@chakra-ui/react";
import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from "./AllRoutes/AllRoutes";

function App() {
  return <>
    <Navbar />
    <Box minH="85vh" bg="#EDF2F7" pb="30px"  display={"grid"} gridTemplateColumns={{ base : "0fr 1fr" ,md : "280px 1fr"}} >
      <Box></Box>
      <Box mr={{base : "20px", md :"25px"}} ml={{base : "20px", md : "0px"}}>
      <AllRoutes />
      </Box>
    </Box>
  </>;
}

export default App;
