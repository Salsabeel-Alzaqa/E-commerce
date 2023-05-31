import React, { useEffect , useState } from "react";
import { Divider, Grid } from "@mui/material";
import { fetchData } from "../../../api";
import { styled } from "@mui/system";
import SendOrder from "../SendOrder";
const StyledGrid = styled(Grid)(({ theme }) => ({
    backgroundColor: theme.palette.primary.last,
    width: '100%',
    height: '165px',
    marginBottom: '5px',
}));
const StyledDivider = styled(Divider)(() => ({
    backgroundColor: 'black',
    width:'90%',
}));
const CartTotal = () => {
    const [cart, setCart] = useState([]);
    const token = localStorage.getItem("token");
    useEffect(() => {
        fetchData(`/carts/${token}`, setCart);
    }, [cart]);
    return (
        <>
            {cart.products && cart.products.length > 0 ? (<>
                <StyledGrid container spacing={0} >
                    <Grid item xs={12} ml={2} mt={2}>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                Items
                            </Grid>
                            <Grid item xs={4}>
                            </Grid>
                            <Grid item xs={4}>
                                {cart.items} Items
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} ml={2}>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                SubTutal
                            </Grid>
                            <Grid item xs={4}>
                            </Grid>
                            <Grid item xs={4}>
                                ${(cart.subtotal).toFixed(2)}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} ml={2}>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                Discount
                            </Grid>
                            <Grid item xs={4}>
                            </Grid>
                            <Grid item xs={4}>
                                {(cart.totaldiscount).toFixed(2)}%
                            </Grid>
                        </Grid>
                        <StyledDivider />
                    </Grid>
                    <Grid item xs={12} ml={2} mb={2}>
                        <Grid container spacing={2} >
                            <Grid item xs={4}>
                                Total
                            </Grid>
                            <Grid item xs={4}>
                            </Grid>
                            <Grid item xs={4}>
                                ${(cart.alltotal).toFixed(2)}
                            </Grid>
                        </Grid>
                    </Grid>
                </StyledGrid>
            <SendOrder /> </>) : null
            }
        </>
    );
};
export default CartTotal;