import React from "react";
import Home from '../Components/HomeComponent';
import {connect} from 'react-redux';
import { addToCart,removeToCart,deleteToCart } from "../Services/Actions/Actions";


const mapDispatchToProps = (dispatch) => ({
    addToCartHandler: data => dispatch(addToCart(data)) ,
    removeToCartHandler : data=>dispatch(removeToCart(data)),
    deleteToCartHandler : data=>dispatch(deleteToCart(data))
})


const mapStateToProps=(state)=>({
    data:state.cartItems
})
export default connect(mapStateToProps, mapDispatchToProps) (Home);