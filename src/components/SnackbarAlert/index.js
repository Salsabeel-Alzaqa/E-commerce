import React from "react";
import { Snackbar, Alert } from "@mui/material";

const SnackbarAlert = ({ open, onClose , message }) => {
  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={onClose}>
      <Alert severity="warning">{message}</Alert>
    </Snackbar>
  );
};

export default SnackbarAlert;