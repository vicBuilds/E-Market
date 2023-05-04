import { Add } from "@mui/icons-material";
import { Avatar, Button } from "@mui/material";
import React from "react";
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

const Navbar = () => {
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
        <Avatar />
      </Link>
    </Container>
  );
};

export default Navbar;
