import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from "./Pages/Login";
import Guard, { LoginGuard } from "./Pages/Guard";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Guard>
              <Home />
            </Guard>
          }
        />
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