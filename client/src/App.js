import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import MyTasks from "./Pages/MyTasks";
import Sprint from "./Pages/Sprint";

function App() {
  return <>
    <Navbar />
    <Box minH="85vh" bg="#EDF2F7" pb="30px" display={"grid"} gridTemplateColumns={{ base : "0fr 1fr" ,md : "280px 1fr"}} >
      <Box></Box>
      <Box mr={{base : "0px", md :"25px"}}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sprint" element={<Sprint />}></Route>
          <Route path="/tasks" element={<MyTasks />}></Route>
        </Routes>
      </Box>
    </Box>
  </>;
}

export default App;
