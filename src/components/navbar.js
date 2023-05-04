import {
  Add,
  ShoppingBagOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Avatar, Badge, Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 15px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #26d6ba;
  color: white;
`;

const Logo = styled.div`
  flex: 0.8;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const badgeStyle = {
  "& .MuiBadge-badge": {
    color: "white",
    backgroundColor: "red",
  },
};

const Navbar = () => {
  const Cart = useSelector((state) => {
    return state.cart;
  });
  return (
    <Container>
      <Logo>
        <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
          <h1>E-Commerce</h1>
        </Link>
        <Link
          to={"/products"}
          style={{ textDecoration: "none", color: "white" }}
        >
          <h3>All Products</h3>
        </Link>
        <Link
          to={"/addproduct"}
          style={{ textDecoration: "none", color: "white" }}
        >
          <h3>
            <Add /> Add Product
          </h3>
        </Link>
      </Logo>
      <Link to="/cart">
        <Badge
          sx={badgeStyle}
          badgeContent={Cart.count}
          style={{ color: "white" }}
        >
          <ShoppingCartOutlined />
        </Badge>
      </Link>
    </Container>
  );
};

export default Navbar;
