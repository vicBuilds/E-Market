import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/navbar";
import { useLocation } from "react-router-dom";
//import { CurrencyRupee } from "@mui/icons-material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProductContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 30px;
  box-sizing: border-box;
`;

const ProductImageContainer = styled.img`
  height: 500px;
  width: 400px;
  transition: all 0.9s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const TitleDescrip = styled.p`
  font-size: 40px;
  font-weight: 800;
`;

const LeftSide = styled.div`
  max-width: 45%;
  flex-wrap: wrap;
`;
const RightSide = styled.div`
  max-width: 45%;
  flex-wrap: wrap;
`;

const ItemHeader = styled.p`
  font-weight: 900;
  font-size: 30px;
`;
const Description = styled.div`
  color: #736d6d;
`;

const ButtonCart = styled(Button)`
  transition: all 0.9s ease;
  &&& {
    background-color: #32c99f;
    color: white;
  }

  &:hover {
    transform: translateY(-1px);
    transform: scale(1.04);
  }
`;

const ProductDetail = () => {
  let productData = useLocation();
  productData = productData.state;

  const { id, title, price, category, image, description } = productData;

  //console.log(productData);

  return (
    <Container>
      <Navbar />
      <ProductContainer>
        <LeftSide>
          <ProductImageContainer src={image} />
          <TitleDescrip style={{ color: "#736d6d" }}>{title}</TitleDescrip>
        </LeftSide>
        <RightSide>
          <ItemHeader style={{ letterSpacing: "1px", color: "#736d6d" }}>
            {category.toUpperCase()}
          </ItemHeader>
          <ItemHeader>Product Description</ItemHeader>
          <Description>{description}</Description>

          <ItemHeader>
            Price: <AttachMoneyIcon />
            {price}{" "}
          </ItemHeader>
          <ButtonCart>
            <AddShoppingCartIcon />
            ADD TO CART
          </ButtonCart>
        </RightSide>
      </ProductContainer>
    </Container>
  );
};

export default ProductDetail;
