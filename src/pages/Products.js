import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Navbar from "../components/navbar";
import ProductCard from "../components/productCard";

const Container = styled.div``;

const ProductDisplayContainer = styled.div`
  /* background-color: blanchedalmond; */
  min-height: 100vh;
  display: flex;
  /* align-items: center; */
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 15px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
`;
const Category = styled.div`
  padding: 15px;
`;

const Select = styled.select`
  margin-left: 10px;
`;

const Label = styled.label`
  font-weight: 800;
`;

const Option = styled.option``;

const Products = () => {
  const [displayProducts, setDisplayproducts] = useState(null);
  let productData = useSelector((state) => {
    return state.product.products;
  });
  //console.log("hello ", productData);
  useEffect(() => {
    setDisplayproducts(productData);
  }, []);

  const handleChangeInCatgory = (e) => {
    e.preventDefault();
    if (e.target.value == "all products") {
      setDisplayproducts(productData);
      return;
    }
    //console.log("Hello  1223 ", e.target.value);
    let productsWithThisCategory = productData.filter((product) => {
      // console.log(
      //   "Product.category=",
      //   product.category,
      //   "E.target.value ",
      //   e.target.value
      // );
      return product.category == e.target.value;
    });

    setDisplayproducts(productsWithThisCategory);
  };

  const handleSort = (e) => {
    if (e.target.value == "none") {
      return;
    }
    if (e.target.value == "hl") {
      let temp = [...displayProducts];
      temp.sort((a, b) => {
        return b.price - a.price;
      });
      setDisplayproducts(temp);
      return;
    }
    let temp = [...displayProducts];
    temp.sort((a, b) => {
      return a.price - b.price;
    });
    setDisplayproducts(temp);
  };

  return (
    <Container>
      <Navbar />
      <FilterContainer>
        <Category>
          <form>
            <Label>Show </Label>
            <Select
              onChange={(e) => {
                handleChangeInCatgory(e);
              }}
            >
              <Option value={`all products`}>All Products</Option>
              <Option value={`men's clothing`}>Men's Clothing</Option>
              <Option value={`women's clothing`}>Women's Clothing</Option>
              <Option value={`electronics`}>Electronics</Option>
              <Option value={`jewelery`}>Jewellery</Option>
            </Select>
          </form>
        </Category>
        <Category>
          <form>
            <Label>Sort By </Label>
            <Select
              onChange={(e) => {
                handleSort(e);
              }}
            >
              <Option value={`none`}>None</Option>
              <Option value={`hl`}>Price High To Low</Option>
              <Option value={`lh`}>Price Low to High</Option>
            </Select>
          </form>
        </Category>
      </FilterContainer>
      <ProductDisplayContainer>
        {/* {loader && <Loader />} */}
        {displayProducts &&
          displayProducts.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })}
      </ProductDisplayContainer>
    </Container>
  );
};

export default Products;
