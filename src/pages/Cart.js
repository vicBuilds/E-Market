import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { removeProductFromCart } from "../redux/cartSlice";
import Navbar from "../components/navbar";
import { AttachMoneyOutlined, Delete, Money } from "@mui/icons-material";
import { Button } from "@mui/material";

const Container = styled.div`
  background-color: #d1d1d1;
  min-height: 100vh;
`;
const ItemsInCart = styled.div`
  flex: 2;
  background-color: white;
  padding: 20px;
  margin-right: 15px;
`;

const PriceDetails = styled.div`
  flex: 1;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PriceContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  justify-content: center;
  align-items: start;
  padding: 25px;
`;
const ProductDetails = styled.div`
  padding: 5px;
  height: 250px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Image = styled.img`
  height: 120px;
  width: 100px;
  margin-right: 10px;
`;
const OtherDetails = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  flex-wrap: wrap;
`;

const Block = styled.p`
  width: 90%;
  margin-bottom: 4px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
`;
const PriceBlock = styled.p``;

const Cart = () => {
  const datafromCart = useSelector((state) => {
    return state.cart;
  });
  const dispatch = useDispatch();
  console.log("Cart Data is ",datafromCart);
  const ProductsInCart = datafromCart.products;
  const count = datafromCart.count;
  const totalPrice = datafromCart.totalPrice;

  const handleRemove = (id) => {
    console.log("Hello");
    dispatch(removeProductFromCart(id));
  };

  return (
    <Container>
      <Navbar />
      <PriceContainer>
        <ItemsInCart>
          <h1 style={{ color: "#868181" }}>Items in Cart:</h1>
          {ProductsInCart &&
            ProductsInCart.map((product) => {
              return (
                <ProductDetails key={product.id}>
                  <Image src={product.image} />
                  <OtherDetails>
                    <Block>{product.title}</Block>
                    <Block>Qty: {product.count}</Block>
                    <Block
                      style={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        fontWeight: "900",
                      }}
                    >
                      <AttachMoneyOutlined /> {product.price * product.count}
                    </Block>
                    <Block>
                      <Button
                        style={{ backgroundColor: "", color: "black" }}
                        onClick={() => {
                          handleRemove(product.id);
                        }}
                      >
                        Remove
                      </Button>
                    </Block>
                  </OtherDetails>
                </ProductDetails>
              );
            })}
        </ItemsInCart>
        <PriceDetails>
          <Block>PRICE DETAILS</Block>
          <Block>
            <span>Price&nbsp;({count}&nbsp;items)</span>
            <span>
              <b style={{ display: "flex", alignItems: "center" }}>
                <AttachMoneyOutlined />
                {totalPrice}
              </b>
            </span>
          </Block>
          <Block>
            <span>Discount</span>
            <span>
              <b style={{ display: "flex", alignItems: "center" }}>
                <AttachMoneyOutlined />0
              </b>
            </span>
          </Block>
          <Block>
            <span>Total</span>
            <span>
              <b style={{ display: "flex", alignItems: "center" }}>
                <AttachMoneyOutlined />
                {totalPrice}
              </b>
            </span>
          </Block>
        </PriceDetails>
      </PriceContainer>
    </Container>
  );
};

export default Cart;
