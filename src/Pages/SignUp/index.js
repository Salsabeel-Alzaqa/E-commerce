import React from 'react';
import { useFormik } from 'formik';
import { TextField, Button, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Background from '../../components/Backgound';
import PasswordField from '../../components/PasswordField';
import axios from "../../axios";

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
          phoneNumber: '',
    },
    validate: (values) => {
      const errors = {};

      if (!values.fullName) {
        errors.fullName = 'Full name is required';
      }

      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      if (!values.password) {
        errors.password = 'Password is required';
      } else if (values.password.length < 6) {
        errors.password = 'Password must be at least 6 characters long';
      }
      if (values.password !== values.confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
      }

      if (!values.phoneNumber) {
        errors.phoneNumber = 'Phone number is required';
      }
      return errors;
    },
    onSubmit: (values) => {
    },
  });
      const { handleSubmit, handleChange, handleBlur, values, touched, errors } = formik;
    return (
        <Background>
            <Typography variant="h6" align="center" gutterBottom>
                Registration
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
                <TextField
                    id="fullName"
                    name="fullName"
                    label="Full Name"
                    value={values.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.fullName && Boolean(errors.fullName)}
                    helperText={touched.fullName && errors.fullName}
                    size="small"
                    margin="normal"
                    fullWidth
                />
                <TextField
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone Number"
                    value={values.phoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                    helperText={touched.phoneNumber && errors.phoneNumber}
                    size="small"
                    margin="normal"
                    fullWidth
                />
                <TextField
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    size="small"
                    margin="normal"
                    fullWidth
                />

                <PasswordField
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                    fullWidth
                    size="small"
                    margin="normal"
                />

                <PasswordField
                    id="confirmPassword"
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                    helperText={touched.confirmPassword && errors.confirmPassword}
                    size="small"
                    margin="normal"
                    fullWidth
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Register
                </Button>
            </Box>
            <Box mb={7} mt={2}>
                <Typography variant="body2" color="customColor.last">Already a User? <Link to="/login">Login now</Link></Typography>
            </Box>
        </Background>
    );
};

export default SignUp;