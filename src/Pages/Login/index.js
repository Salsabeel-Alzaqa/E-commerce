import React from "react";
import { useFormik  } from "formik";
import { TextField, Button, Typography ,Box } from "@mui/material";
import axios from "../../axios";
import { Link ,useNavigate} from 'react-router-dom';
import Background from '../../components/Backgound';
import PasswordField from '../../components/PasswordField';

const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Email is required";
      }
      if (!values.password) {
        errors.password = "Password is required";
      }
      return errors;
    },
    onSubmit: async (values, { setFieldError }) => {
      try {
        const response = await axios.get("/users");
        const users = response.data;
        const user = users.find((u) => u.email === values.email);
        if (!user) {
          setFieldError("email", "User does not exist");
          return;
        }
        if (user.password !== values.password) {
          setFieldError("password", "Password incorrect");
          return;
        }
        localStorage.setItem("token", user.id);
        navigate("/");
      } catch (error) {
        setFieldError("email", "An error occurred while logging in");
      }
    }
  });
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } = formik;
  return (
    <Background>
      <Typography variant="h5" align="center" gutterBottom>
        Welcome Back!
      </Typography>
      <Typography variant="body2" color="customColor.last" align="center">Login to continue</Typography>
      <Box component="form" onSubmit={handleSubmit} mt={2}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
          size="small"
          margin="normal"
        />
        <PasswordField
          fullWidth
          id="password"
          name="password"
          label="Password"
          value={values.password}
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
          size="small"
          margin="normal"
        />
        <Box mt={6} mb={2}>
        <Button type="submit" variant="contained" fullWidth size="small">
          Login
        </Button>
        </Box>
      </Box>
      <Box mb={7}>
        <Typography variant="body2" color="customColor.last">New user ? <Link to="/signup">Register Here</Link></Typography>
      </Box>
    </Background>
  );
};
export default Login;