import React from "react";
import CartImg from '../../../src/cart.png'
import { Table, Button, Modal, Container, Row, Col, Form } from 'react-bootstrap';

function HeaderComponent(props) {
    debugger
    var uniqueProduct=[];
    props.data.obj1.map(item=>{
        if(uniqueProduct.indexOf(item.id) === -1){
            uniqueProduct.push(item.id)
        }
    })


    return (
        <React.Fragment>
        <div className='add-to-cart'>
            <span className='cart-count'>{uniqueProduct.length}</span>
            <img src={CartImg} />
        </div>
        <Container><h1>Product Order Details</h1></Container>
            <div>
                <Container>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Product ID</th>
                                <th>Name</th>
                                <th>Qty</th>
                                <th>Price</th>
                                <th>Sub Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.data.obj1.map((item) =>
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.qty}</td>
                                    <td>{item.price}</td>
                                    <td>{item.qty * item.price}</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Container>
            </div>
            <Container>
                {/* <h2>Total Amount : {props.data.map((item) => parseInt(item.qty * item.price) + '+')}</h2> */}
                <h2>Total Amount : {props.data.obj1.reduce((sum, item) => sum += (item.qty * item.price), 0)}</h2>
                {/* <h2>Total Amount : {props.data.map(item=>total+=item.qty*item.price)}</h2> */}
            </Container>
    </React.Fragment>
    )
}
export default HeaderComponent;