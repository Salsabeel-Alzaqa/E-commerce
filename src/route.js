import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Layout from "./Pages/Layout";
import Guard, { LoginGuard } from "./Pages/Guard";
import SignUp from "./Pages/SignUp";
import Trending from "./components/Trending";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Guard><Layout /></Guard>}>
            <Route index element={
            <Guard>
              <div>Home page</div>
              <Trending />
            </Guard>
          } />
         <Route path="/about" element={<Guard><About /></Guard>} />
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