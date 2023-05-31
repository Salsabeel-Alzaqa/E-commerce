import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import RemoveButton from "../../../components/RemoveButton";
import { fetchData } from "../../../api";
import { cartColumns } from '../../../Data/data';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box , Button } from "@mui/material";
import CartItem from "../CartItem";
import ItemQuantity from "../ItemQuantity";

const CartTable = () => {
  const [cart, setCart] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchData(`/carts/${token}`, setCart);
  }, [cart]);

  const sortedCart =
    cart.products && cart.products.length > 0
      ? cart.products.sort((a, b) => a.id - b.id)
      : [];

  return (
    <Box my={5} sx={{ height: 590 }}>
      <TableContainer sx={{ maxHeight: 590 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {cartColumns.map((item , index) => (
                <TableCell sx={{ backgroundColor: '#8145CE', color: '#FFFFFF' }} key={index}>{item.text}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedCart.length > 0 ? (
              sortedCart.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <CartItem image={item.image} name={item.name} author={item.author} />
                  </TableCell>
                  <TableCell>
                    <ItemQuantity itemQuantity={item.quantity} id={item.id} name={item.name} author={item.author} image={item.image} price={item.price} discount={item.discount} />
                  </TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>{(item.total).toFixed(2)}</TableCell>
                  <TableCell>
                    <RemoveButton path="carts" id={item.id} />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <>
              <TableRow>
                  <TableCell colSpan={5} align="center">There is nothing to show </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={5} align="center"><Link to="/books"><Button variant="contained">Go and Add Some Books</Button></Link></TableCell>
              </TableRow></>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CartTable;