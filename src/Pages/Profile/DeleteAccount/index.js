import React, { useEffect, useState } from "react";
import { fetchData, deleteData} from "../../../api";
import { Button } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from "react-router-dom";


function DeleteAccount() {
    const [user, setUser] = useState([]);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    useEffect(() => {
        const path = `/users/${token}`;
        fetchData(path, setUser);
    }, [user]);

    const handleShow = () => {
        setShow(true);
    };
    const handleClose = () => {
        setShow(false);
    };
    const handleDelete = () => {
        deleteData(`/users/${token}`);
        deleteData(`/carts/${token}`);
        deleteData(`/wishlists/${token}`);
        localStorage.removeItem("token");
        navigate("/login");
    };
    return (
        <>
            <Button variant="contained" color="primary" fullWidth onClick={handleShow}>Delete account</Button>
            <Dialog
                open={show}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are you sure you want to delete your account?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Once your account is deleted your data will be deleted
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                    <Button onClick={handleDelete} autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
export default DeleteAccount;