
export const actionAddItem = (name, description, count, price, imgUrl) => {
  return({
    type: "ADD_ITEM_TO_CART",
    payload: {
      name,
      description,
      count,
      price,
      imgUrl
    }
  })
}

export const actionUpdateItem = (name, count) => {
  return({
    type: "UPDATE_ITEM_ON_CART",
    payload: {
      name,
      count
    }
  })
}

export const actionRemoveItem = (name) => {
  return({
    type: "REMOVE_ITEM_FROM_CART",
    payload: {
      name
    }
  })
}

export const actionDeleteItems = () => {
  return({
    type: "CLEAR_ITEMS"
  })
}