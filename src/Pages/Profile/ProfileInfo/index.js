import React, { useEffect, useState } from "react";
import { fetchData,updateData} from "../../../api";
import Title from "../../../components/Title";
import { TextField,Box, Button , Container, Stack, Typography} from "@mui/material";
import SubTitle from "../../../components/SubTitle";
import PasswordField from '../../../components/PasswordField';
import { useFormik } from "formik";
import DeleteAccount from "../DeleteAccount";

function ProfileInfo() {
    const [user, setUser] = useState([]);
    const [newEmail, setNewEmail] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const token = localStorage.getItem("token");
    useEffect(() => {
        const path = `/users/${token}`;
        fetchData(path, setUser);
    }, [user]);
    const handleEdit = () => {
        setShowForm(true);
    };
    const handleSave = () => {
        setShowForm(false);
    };
    const formik = useFormik(
        {
            initialValues:
            {
                fullName: user.fullName,
                email: user.email,
                password: user.password,
                confirmPassword: user.password,
                phoneNumber: user.phone,
            },
            enableReinitialize: true,
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
            onSubmit: (values, { setFieldError }) => {
                try {
                    const path = `/users?email=${values.email}`;
                    fetchData(path, setNewEmail);
                    if (newEmail.length > 0) {
                        if (newEmail.email !== user.email) {
                            setFieldError("email", "Email already exists");
                            return;
                        }
                    }
                    const updatedData =
                    {
                        fullName: values.fullName,
                        email: values.email,
                        password: values.password,
                        phone: values.phoneNumber
                    };
                    updateData(`/users/${token}`, updatedData);
                    setShowForm(false);
                } catch (error) {
                    console.error('Registration error:', error);
                }
            },
        });
      const { handleSubmit, handleChange, handleBlur, values, touched, errors } = formik;
    return (
        <Container maxWidth="lg">
            <Box textAlign="center" my={2} sx={{color:'#5A595C'}}>
                <Title text={`${user.fullName} Profile`} />
            </Box>
            {
                showForm ? (<>
                    <Box justifyContent="flex-end" display="flex">
                        <Button variant="contained" onClick={handleSave}>close</Button>
                    </Box>
                    <Box component="form" onSubmit={handleSubmit} mb={5}>
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
                        <Stack direction="row" spacing={2}>
                            <Button type="submit" variant="contained" color="primary" fullWidth> save </Button>
                            <DeleteAccount />
                        </Stack>
                    </Box>
                </>) : (<>
                    <Box justifyContent="flex-end" display="flex">
                        <Button variant="contained" onClick={handleEdit}>Edit</Button>
                    </Box>
                    <Stack direction="column" spacing={2}>
                        <Stack direction="row" spacing={2}>
                            <Title text="Name : " />                  
                            <SubTitle text={user.fullName} />
                        </Stack>
                        <Stack direction="row" spacing={2}>
                            <Title text="Email : " />
                            <SubTitle text={user.email} />
                        </Stack>
                        <Stack direction="row" spacing={2}>
                            <Title text="Phone Number : " />
                            <SubTitle text={user.phone} />
                        </Stack>
                    </Stack>
                </>)
            }
        </Container>
    );
}
export default ProfileInfo;