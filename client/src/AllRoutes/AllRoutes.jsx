import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoutes from '../hoc/PrivateRoutes'
import MyTasksLoading from '../Loading-page/MyTasksLoading'
import Error404main from '../Pages/Error404main'
import Home from '../Pages/Home'
import Issue from '../Pages/Issue'
import Login from '../Pages/Login'
import MyTasks from '../Pages/MyTasks'
import Register from '../Pages/Register'
import Sprint from '../Pages/Sprint'

export default function AllRoutes() {
  return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sprint" element={<PrivateRoutes><Sprint /></PrivateRoutes>} />
          <Route path="/sprint/:id" element={<PrivateRoutes><Issue /></PrivateRoutes>} />
          <Route path="/tasks" element={<PrivateRoutes><MyTasks /></PrivateRoutes>} />
          <Route path="/loading" element={<MyTasksLoading />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error404main />} />
        </Routes>
    </>
  )
}
