import React from "react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const slideData = [
  { id: 1, url: "./createSprint.jpeg", title: "Create Sprint" },
  { id: 2, url: "./myTasks.jpeg", title: "My Tasks:Todo,Progress,Done" },
  { id: 3, url: "./createSprint2.jpeg", title: "Edit Sprint" },
  { id: 4, url: "./bfs.jpeg", title: "Edit:Bug,Feature,Story" },
];
export default function Home() {
  return (
   <>
     <Box bg={"#EDF2F7"}  color="#2C7A7B">
      <Heading
        fontSize={{ sm: "1rem", md: "2rem", lg: "4rem" }}
        textDecoration={"underline"}
        textAlign={"center"}
      >
        Task Planner
      </Heading>
      <Text
        fontStyle={"italic"}
        textAlign={"center"}
        w="75%"
        m={"auto"}
        mt="1rem"
        fontSize={"1.2rem"}
      >
        A task planner is a tool that helps you organize and manage your tasks
        and responsibilities. It typically involves creating a list of tasks,
        prioritizing them based on importance and urgency, estimating how long
        each task will take, and scheduling them into your sprint plan. By using
        a task planner, you can improve your time management skills, increase
        productivity, and reduce stress and overwhelm.
      </Text>

      <Box
      borderRadius={"2rem"} 
      border="2px solid #2C7A7B" m={"auto"} mt="2rem" w="65rem" p={"0.7rem"}>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          className="mySwiper"
          loop={true}
        >
          {slideData.map((ele) => (
            <SwiperSlide key={ele.id}>
              <Image borderRadius={"3rem"} w={"35rem"} border="0.3px solid #2C7A7B" src={ele.url} alt="" />
              <Text textAlign={"center"} mb="1rem" fontSize={"1.4rem"} >{ele.title}</Text>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
   </>
  )
}
