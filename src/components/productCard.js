import { AttachMoneyOutlined } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 500px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin: 15px;
  border: 1px solid whitesmoke;
  transition: all 0.8s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.08);
  }
`;
const ProductImageContainer = styled.div`
  height: 80%;
  width: 90%;
`;

const ProductImage = styled.img`
  height: 100%;
  width: 100%;
`;

const TitleDescrip = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: larger;
  margin-bottom: -6px;
`;

const ProductCard = (props) => {
  const { id, title, price, category, image, description } = props.product;
  const navigate = useNavigate();

  //console.log("Image is ", title);

  const handleNavigate = () => {
    navigate(`/product/${id}`, { state: props.product });
  };

  return (
    <Container
      onClick={(e) => {
        handleNavigate();
      }}
    >
      <ProductImageContainer>
        <ProductImage src={image} />
      </ProductImageContainer>
      <TitleDescrip>
        <AttachMoneyOutlined />
        {price}
      </TitleDescrip>
      <TitleDescrip>{title}</TitleDescrip>
    </Container>
  );
};

export default ProductCard;
