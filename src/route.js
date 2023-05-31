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
import Home from "./Pages/Home";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Guard><Layout /></Guard>}>
            <Route index element={
            <Guard>
              <Home />
            </Guard>
          } />
          <Route path="/about" element={<Guard><About /></Guard>} />
          <Route path="/books" element={<Guard><Books title="BOOKS"/></Guard>} />
          <Route path="/sales" element={<Guard><Books title="FLASH SALE"/></Guard>} />
          <Route path="/bestseller" element={<Guard><Books title="BEST SELLER"/></Guard>} />
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