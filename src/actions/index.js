// NOT SUPPORTED NOW!
export const actionCreators = {
  addToList: data => ({ type: "ADD_ITEM_TO_CART", payload: data }),
  removeItem: data => ({ type: "REMOVE_ITEM_FROM_CART", payload: data }),
  clearItems: () => ({ type: "CLEAR_ITEMS" })
};