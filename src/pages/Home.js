import React, { useState } from "react";
import Navbar from "../components/navbar";
import styled from "styled-components";
import { useEffect } from "react";
import { getAllProducts } from "../api";
import { createProductList } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader/Loader";
import ProductCard from "../components/productCard";

const Container = styled.div``;

const ProductDisplayContainer = styled.div`
  /* background-color: blanchedalmond; */
  min-height: 100vh;
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 15px;
`;

const Home = () => {
  const [loader, setLoading] = useState(false);
  const [products, setProducts] = useState(null);
  const dispatch = useDispatch();
  let productData = useSelector((state) => {
    //console.log("state.products is", state);
    return state.product;
  });

  productData = productData.products.slice(5, 12);
  //console.log("Products Data is ", productData);

  const SetProducts = async () => {
    setLoading(true);
    let allProducts = await getAllProducts();
    ///console.log("allProducts", allProducts);
    await dispatch(createProductList(allProducts));
    allProducts = allProducts.splice(0, 8);
    setProducts(allProducts);
    setLoading(false);
  };
  useEffect(() => {
    SetProducts();
  }, []);
  return (
    <Container>
      <Navbar />

      <ProductDisplayContainer>
        {/* {loader && <Loader />} */}
        {productData &&
          productData.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })}
      </ProductDisplayContainer>
    </Container>
  );
};

export default Home;
