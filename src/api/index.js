const ROOT_URL = "https://fakestoreapi.com/products";

export const getAllProducts = async () => {
  try {
    let Products = await fetch(`${ROOT_URL}`);
    Products = await Products.json();
    return Products;
  } catch (err) {
    return err;
  }
};

export const addAProduct = async (productToBeAdded) => {
  // console.log("Inside the APi call ", productToBeAdded);
  try {
    let returnFromApiAfterAdding = await fetch(`${ROOT_URL}`, {
      method: "POST",
      body: JSON.stringify(productToBeAdded),
    });
    returnFromApiAfterAdding = await returnFromApiAfterAdding.json();
    return returnFromApiAfterAdding;
  } catch (err) {
    return err;
  }
};

export const deleteAProduct = async (id) => {
  let deleted = await fetch(`${ROOT_URL}/${id}`, {
    method: "DELETE",
  });

  deleted = await deleted.json();
  return deleted;
};

export const updateAProduct = async (productToBeAdded) => {
  try {
    let returnFromApiAfterUpdate = await fetch(
      `${ROOT_URL}/${productToBeAdded.id}`,
      {
        method: "PUT",
        body: JSON.stringify(productToBeAdded),
      }
    );
    returnFromApiAfterUpdate = await returnFromApiAfterUpdate.json();
    return returnFromApiAfterUpdate;
  } catch (err) {
    return err;
  }
};
