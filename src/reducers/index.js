const initialCart = []
export const cartReducer = (state = initialCart, action) => {
    switch (action.type) {
        case "ADD_ITEM_TO_CART":
            return [
                ...state,
                {
                    name: action.payload.name,
                    count: action.payload.count,
                }
            ]
        case "UPDATE_ITEM_ON_CART":
            return state.map(item => item.name === action.payload.name ? {...item, count: action.payload.count} : item)
        case "REMOVE_ITEM_FROM_CART":
            return state.filter(item => item.name !== action.payload.name)
        case "CLEAR_ITEMS":
            return []
        default:
    }
};
