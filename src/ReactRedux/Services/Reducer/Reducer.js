import { ADD_TO_CART,REMOVE_TO_CART,DELETE_TO_CART } from "./Constant";

const initialState = {
    cartdata: []
}

export default function cartItems(state = [], action) {
    debugger
    var productData = [];
    var SelectProductList = [];
    switch (action.type) {
        case ADD_TO_CART:
            var existProduct = state.obj1.some(item=> item.id === action.data.id);
            if(existProduct){
                debugger
                productData = state.obj2[0].map(item=>item.id === action.data.id ? {...item, stock:item.stock - 1} : item)
                return {obj1:state.obj1.map(item=>item.id === action.data.id ? {...item, qty:item.qty + 1} : item), obj2:[productData]}
                //return state.map(item=>item.id === action.data.id ? {...item, qty:item.qty + 1} : item)
            }else{
                productData = action.data.productData.map(item=>item.id === action.data.id ? {...item, stock:item.stock - 1} : item)
                return {obj1: [...state.obj1,action.data],obj2: [productData]}
                // return [
                //     ...state,
                //     action.data
                // ]
            }
            break;
        case REMOVE_TO_CART:
            debugger
            var existQty = state.obj1.some(item=> item.id === action.data.id && item.qty >= 2);
            if(action.data.action =='DeleteSelectData'){
                debugger
                productData = state.obj2[0].map(item=> action.data.SelectProductList.includes(item.id) ? {...item, stock:item.stock + state.obj1.find(items=>items.id===item.id).qty} : item)  
                SelectProductList= [];
                return{obj1:state.obj1.filter(item => !action.data.SelectProductList.includes(item.id)),obj2:[productData],obj3:[SelectProductList]}
            }else if(existQty && action.data.action =='removeItem'){
                productData = state.obj2[0].map(item=>item.id === action.data.id ? {...item, stock:item.stock + 1} : item)
                return {obj1:state.obj1.map(item=>item.id === action.data.id ? {...item, qty:item.qty - 1} : item), obj2:[productData]}
            }else{
                debugger
                existQty = state.obj1.some(item=> item.id === action.data.id)

                debugger
                if(existQty || action.data.action === 'deleteItem'){
                    debugger
                    productData = action.data.productData.map(item=>item.id === action.data.id ? {...item, stock:item.stock + state.obj1[0].qty } : item)  
                }else if(existQty){
                    debugger
                    productData = action.data.productData.map(item=>item.id === action.data.id ? {...item, stock:item.stock +1} : item)  
                }else{
                    productData = action.data.productData.map(item=>item.id === action.data.id ? {...item, stock:item.stock} : item)    
                }
                
                return {obj1: state.obj1.filter(item => item.id !== action.data.id),obj2: [productData]}
                debugger
                // return state = state.obj1.filter(item => item.id !== action.data.id)
            }
            break;
        case DELETE_TO_CART:
            debugger
            var existProduct = state.some(item=> item.id === action.data.id);
            if(existProduct){
                return state = state.filter(item => item.id !== action.data.id)
            }
        default:
            return {obj1:state,obj2:productData};
    }
}
