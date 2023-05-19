import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from "./Pages/Login";
import Guard, { LoginGuard } from "./Pages/Guard";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Guard>
              <div>Home page</div>
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
      </Routes>
    </BrowserRouter>
  );
};

export default Router;