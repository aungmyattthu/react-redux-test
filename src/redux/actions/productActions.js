import { ActionTypes } from "../constants/action-types"
export const setProducts =(products) =>{
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload:products,

    };
};
export const selectedProducts =(product) =>{
    return {
        type:ActionTypes.SELECT_PRODUCTS,
        payload:product,

    };
};
export const removeSelectedProducts =(product) =>{
    return {
        type:ActionTypes.REMOVE_SELECT_PRODUCTS,
        

    };
};