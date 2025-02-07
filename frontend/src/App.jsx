import { Box, useColorModeValue } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import Navbar from "./components/Navbar.jsx";
import { useProductStore } from "./store/product.js";
import React, { useState } from 'react';
import UserRegister from "./pages/UserRegister.jsx";

function App() {
  const { products } = useProductStore()

  return (
  <Box minH={"100vh"} bg={useColorModeValue ("gray.200", "gray.600")}>
    <Navbar />
    <Routes>
      <Route path="/" element={ <HomePage /> } />
      <Route path="/create" element={ <CreatePage /> } />
      <Route path="/user-page" element={ <UserRegister/>} />
    </Routes>
  </Box>
  );
}

export default App
