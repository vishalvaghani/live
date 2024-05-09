import React from 'react';
import HeaderComponent from '../Components/HeaderComponent';
import {connect} from 'react-redux';
import { addToCart } from '../Services/Actions/Actions';

const mapDispatchToProps=(dispatch)=>({
})

const mapStateToProps=(state)=>({
    data:state.cartItems
})

export default connect(mapStateToProps,mapDispatchToProps)(HeaderComponent);