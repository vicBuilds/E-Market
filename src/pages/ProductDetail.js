import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/navbar";
import { useLocation, useNavigate } from "react-router-dom";
//import { CurrencyRupee } from "@mui/icons-material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Add, Remove, Edit } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addProductToCart } from "../redux/cartSlice";

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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  productData = productData.state;
  const [qty, setQty] = useState(1);

  const { id, title, price, category, image, description } = productData;

  const handleqty = (msg) => {
    if (msg === "add") {
      setQty(qty + 1);
    } else {
      if (qty == 1) {
        return;
      }
      setQty(qty - 1);
    }
  };

  const notify = (msg) => toast(msg);

  const addItemToCart = async () => {
    //console.log("Hello Data");

    await dispatch(addProductToCart({ ...productData, count: qty }));
    notify("Item Added to Cart");
    //navigate("/cart");
  };

  const handleUpdateAProduct = () => {
    navigate("/editproduct", { state: productData });
  };

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
            <ButtonCart
              style={{ marginLeft: "15px", backgroundColor: "red" }}
              onClick={(e) => {
                handleUpdateAProduct();
              }}
            >
              <Edit />
            </ButtonCart>
          </ItemHeader>
          <ItemHeader>Product Description</ItemHeader>
          <Description>{description}</Description>

          <ItemHeader>
            Price: <AttachMoneyIcon />
            {price}{" "}
          </ItemHeader>
          <ItemHeader
            style={{ fontWeight: "700", color: "#647576", fontSize: "19px" }}
          >
            Quantity:
            <Button
              onClick={() => {
                handleqty("sub");
              }}
            >
              <Remove />
            </Button>
            {qty}
            <Button
              onClick={() => {
                handleqty("add");
              }}
            >
              <Add />
            </Button>
          </ItemHeader>

          <ButtonCart
            onClick={() => {
              addItemToCart();
            }}
          >
            <AddShoppingCartIcon />
            ADD TO CART
          </ButtonCart>
        </RightSide>
      </ProductContainer>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {/* <ToastContainer /> */}
    </Container>
  );
};

export default ProductDetail;
