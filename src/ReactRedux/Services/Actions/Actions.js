import React from "react";
import {ADD_TO_CART,REMOVE_TO_CART,DELETE_TO_CART} from '../Reducer/Constant';

export const addToCart = (data) => {

    return{
        type : ADD_TO_CART,
        data : data
    }
}

export const removeToCart = (data) => {
    debugger
    return {
        type: REMOVE_TO_CART,
        data: data
    }
}

export const deleteToCart = (data) => {
    debugger
    return {
        type: DELETE_TO_CART,
        data: data 
    }
}