import React from "react";
import CartTable from "./CartTable";
import CartTotal from "./CartTotal";
import LinkLog from '../../components/LinkLog';
import { Container } from "@mui/material";
const Cart = () => {
    return (
        <>
            <LinkLog />
            <Container maxWidth="md" >
                <CartTable />
            </Container>
            <Container maxWidth="sm">
                <CartTotal />
            </Container>
        </>
    );
};
export default Cart;