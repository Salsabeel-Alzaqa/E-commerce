import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Books from "./Pages/Books";
import Layout from "./Pages/Layout";
import Guard, { LoginGuard } from "./Pages/Guard";
import SignUp from "./Pages/SignUp";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import NotFound from "./Pages/NotFound";
import BookDetails from "./Pages/BookDetails";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <Home />
          } />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Guard><Profile /></Guard>} />
          <Route path="/books" element={<Guard><Books title="BOOKS" /></Guard>} />
          <Route path="/sales" element={<Guard><Books title="FLASH SALE" /></Guard>} />
          <Route path="/bestseller" element={<Guard><Books title="BEST SELLER" /></Guard>} />
          <Route path="/cart" element={<Guard><Cart /></Guard>} />
          <Route path="/profile" element={<Guard><Profile /></Guard>} />
          <Route path="/books/:id" element={<Guard><BookDetails /></Guard>} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route
          path="/login"
          element={
            <LoginGuard>
              <Login />
            </LoginGuard>
          }
        />
        <Route
          path="/signup"
          element={
            <LoginGuard>
              <SignUp />
            </LoginGuard>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;