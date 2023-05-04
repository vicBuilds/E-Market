import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    createProductList: (state, action) => {
      state.products = action.payload;
    },
    addProduct: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    updateAProduct: (state, action) => {
      let { id, newProductDetail } = action.payload;
      let newProdcuts = [];
      state.products.forEach((product) => {
        let temp = {};
        if (product.id === id) {
          temp = { ...newProductDetail, id };
        } else {
          temp = { ...product };
        }
        newProdcuts.push(temp);
      });
      state.products = newProdcuts;
    },
    deleteAProduct: (state, action) => {
      let id = action.payload;
      state.products = state.products.filter((product) => {
        return product.id !== action.payload.id;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { createProductList, addProduct, updateAProduct, deleteAProduct } =
  productSlice.actions;

export default productSlice.reducer;
