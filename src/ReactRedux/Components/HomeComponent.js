import React, { useEffect, useState } from "react";
import ProductImg from '../../../src/product.png'
import { Table, Button, Modal, Container, Row, Col, Form } from 'react-bootstrap';

function HomeComponent(props) {
    debugger
    // const[dataList,setdataList]=useState([]);
    // setdataList(props.data);

    // const[Amount,setAmount]=useState(0);
    // const countTotal=(item)=>
    // {
    //     debugger
    //      var total=0;
    //      props.data.map(item=>total+=item.qty*item.price);
    //      setAmount(total);
    // }
    const[SelectProductList,setSelectProductList]=useState([])

    const [ProductList, setProductList] = useState([
        { id: 101, name: 'product1', price: 1000, qty: 1,stock:50 },
        { id: 102, name: 'product2', price: 500, qty: 1,stock:50 },
        { id: 103, name: 'product3', price: 100, qty: 1,stock:50 },
        { id: 104, name: 'product4', price: 2000, qty: 1,stock:50 },
        { id: 105, name: 'product5', price: 1500, qty: 1,stock:50 }
    ])

    useEffect(()=>{
        debugger
        setProductList(props.data.obj2.length > 0 ? props.data.obj2[0] : ProductList);
        setSelectProductList([]);
    },[props.data])
    function SelectProduct(e){
        
        if(e.target.checked){
            
            setSelectProductList([...SelectProductList,parseInt(e.target.value)])
        }else{
            setSelectProductList(SelectProductList.filter((item)=> item !== e.target.value))
        }
    } 
    return (
        <React.Fragment>
            <div>
                <h2>Home Component</h2>
                <button onClick={() => props.removeToCartHandler({SelectProductList, action: 'DeleteSelectData', productData : ProductList })}>Delete Product</button>
                {ProductList.map((item) =>

                    <div className='cart-wrapper'>
                        <div className="input-checkbox">
                            <input type='checkbox' checked={SelectProductList.includes(item.id)}  onChange={SelectProduct} value={item.id} />
                        </div>
                        <div className='img-wrapper item'>
                            <img src={ProductImg} />
                        </div>
                        <div className='text-wrapper item'>
                            <span>Product Name : {item.name} </span><br></br>
                            <span>Product Price : {item.price}</span><br></br>
                            <span>Product Stocks : {item.stock}</span><br></br>
                        </div>
                        <div className='btn-wrapper item'>
                            <button onClick={() => props.addToCartHandler({ id: item.id, qty: item.qty, price: item.price, name: item.name,productData: ProductList})}>Add</button>
                            <button onClick={() => props.removeToCartHandler({ id: item.id, action: 'removeItem',productData: ProductList })}>Remove</button>
                        </div>
                        <div className='btn-wrapper-remove'>
                            <button onClick={() => props.removeToCartHandler({ id: item.id, action: 'deleteItem',productData: ProductList })}>Delete</button>
                        </div>
                    </div>
                )}
                {/* <div className='cart-wrapper'>
                    <div className='img-wrapper item'>
                        <img src={ProductImg} />
                    </div>
                    <div className='text-wrapper item'>
                        <span> Product 1 </span><br></br>
                        <span> Price : $500.00</span>
                    </div>
                    <div className='btn-wrapper item'>
                        <button onClick={() => props.addToCartHandler({ id: 101, qty: 1, price: 500, name: 'Product1' })}>Add To Cart</button>
                    </div>
                    <div className='btn-wrapper-remove'>
                        <button onClick={() => props.removeToCartHandler({ id: 101 })}>Remove To Cart</button>
                    </div>
                </div><br></br>
                <div className='cart-wrapper'>
                    <div className='img-wrapper item'>
                        <img src={ProductImg} />
                    </div>
                    <div className='text-wrapper item'>
                        <span> Product 2</span><br></br>
                        <span> Price : $1500.00</span>
                    </div>
                    <div className='btn-wrapper item'>
                        <button onClick={() => props.addToCartHandler({ id: 102, qty: 1, price: 1500, name: 'product2' })}>Add To Cart</button>
                    </div>
                    <div className='btn-wrapper-remove'>
                        <button onClick={() => props.removeToCartHandler({ id: 102 })}>Remove To Cart</button>
                    </div>
                </div><br></br>
                <div className='cart-wrapper'>
                    <div className='img-wrapper item'>
                        <img src={ProductImg} />
                    </div>
                    <div className='text-wrapper item'>
                        <span> Product 3</span><br></br>
                        <span> Price : $2000.00</span>
                    </div>
                    <div className='btn-wrapper item'>
                        <button onClick={() => props.addToCartHandler({ id: 103, qty: 1, price: 2000, name: 'Product 3' })}>Add To Cart</button>
                    </div>
                    <div className='btn-wrapper-remove'>
                        <button onClick={() => props.removeToCartHandler({ id: 103 })}>Remove To Cart</button>
                    </div>
                </div> */}
            </div><br></br><br></br>
            
        </React.Fragment>
    )
}
export default HomeComponent;