import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  totalPrice: 0,
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.count += 1;
    },
    decrement: (state) => {
      if (state.count === 0) {
        return;
      }
      state.count -= 1;
    },
    addProductToCart: (state, action) => {
      //console.log("Data in Cart Redux is", action.payload);
      //console.log("before state is ", state.products);
      let sameProductFlag = false;

      state.products.forEach((product) => {
        if (product.id == action.payload.id) {
          product.count += action.payload.count;
          sameProductFlag = true;
          let pricetemp = 0;
          state.products.forEach((product) => {
            pricetemp += product.price * product.count;
          });
          state.totalPrice = pricetemp.toFixed(2);
        }
      });
      if (sameProductFlag) return;

      //console.log("Some Problem");
      state.products.push(action.payload);
      let pricetemp = 0;
      state.products.forEach((product) => {
        pricetemp += product.price * product.count;
      });
      state.totalPrice = pricetemp.toFixed(2);
      state.count += 1;
      //console.log("After State Products is at Cartslice ", state.products);
    },
    removeProductFromCart: (state, action) => {
      //console.log("Data in Cart Redux is", action.payload);
      state.products = state.products.filter((product) => {
        return product.id !== action.payload;
      });

      let pricetemp = 0;
      state.products.forEach((product) => {
        pricetemp += product.price * product.count;
      });
      state.totalPrice = pricetemp.toFixed(2);
      state.count -= 1;
      //console.log("State Products is ", state.products);
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, addProductToCart, removeProductFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
