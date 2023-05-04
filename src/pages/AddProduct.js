import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import { addAProduct } from "../api";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/productSlice";
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Header = styled.div`
  padding: 15px;
  display: flex;
  //flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #26d6ba;
  color: white;
  width: 100%;
`;

const FormContainer = styled.div`
  background-color: #d1d1d1;
  min-height: 80vh;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #417f6b;
  color: white;
  margin-top: 25px;
`;

const Form = styled.form``;

const Label = styled.div`
  font-size: 24px;
  font-weight: 900;
`;

const Input = styled.input`
  width: 120%;
  height: 25px;
`;

const InputContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
`;

const ButtonSubmit = styled(Button)`
  margin-top: 20px;
  transition: all 0.9s ease;
  &&& {
    background-color: #32c99f;
    color: white;
  }
`;

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let tempProd = {
      title,
      description,
      image,
      category,
      image,
      price,
    };

    //console.log("Temp Prod is ", tempProd);

    // let productAdded = await addAProduct({
    //   title,
    //   description,
    //   image,
    //   category,
    //   image,
    //   price,
    // });

    //console.log("Product added is ", productAdded);
    await dispatch(addProduct({ ...tempProd, id: new Date().getTime() }));
    navigate("/products");
  };

  return (
    <Container>
      <Header>
        {/* <Link to={"/products"}>
          <h1>All Products</h1>
        </Link>  */}
        <h1>ADD A PRODUCT</h1>
      </Header>
      <FormContainer>
        <h1>PRODUCT DETAILS</h1>
        <Form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <InputContainer>
            <Label>Title</Label>
            <Input
              type="text"
              required={true}
              name="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            ></Input>
          </InputContainer>
          <InputContainer>
            <Label>Description</Label>
            <Input
              type="text"
              required={true}
              name="description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></Input>
          </InputContainer>
          <InputContainer>
            <Label>Price</Label>
            <Input
              type="number"
              required={true}
              name="price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            ></Input>
          </InputContainer>
          <InputContainer>
            <Label>Category</Label>
            <Input
              type="text"
              required={true}
              name="category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            ></Input>
          </InputContainer>
          <InputContainer>
            <Label>Image Url</Label>
            <Input
              type="text"
              name="image"
              value={image}
              onChange={(e) => {
                setImage(e.target.value);
              }}
            ></Input>
          </InputContainer>
          <ButtonSubmit type="submit">Submit</ButtonSubmit>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default AddProduct;
