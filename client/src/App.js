import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import SprintLoading from "./Loading-page/SprintLoading";
import Home from "./Pages/Home";
import Issue from "./Pages/Issue";
import MyTasks from "./Pages/MyTasks";
import Sprint from "./Pages/Sprint";

function App() {
  return <>
    <Navbar />
    <Box minH="85vh" bg="#EDF2F7" pb="30px"  display={"grid"} gridTemplateColumns={{ base : "0fr 1fr" ,md : "280px 1fr"}} >
      <Box></Box>
      <Box mr={{base : "20px", md :"25px"}} ml={{base : "20px", md : "0px"}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sprint" element={<Sprint />} />
          <Route path="/sprint/:id" element={<Issue />} />
          <Route path="/tasks" element={<MyTasks />} />
          <Route path="/loading" element={<SprintLoading />} />
        </Routes>
      </Box>
    </Box>
  </>;
}

export default App;
