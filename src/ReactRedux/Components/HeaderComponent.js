import React, { useEffect, useState } from "react";
import CartImg from '../../../src/cart.png'
import { Table, Button, Modal, Container, Row, Col, Form } from 'react-bootstrap';
import axios from 'axios';

function HeaderComponent(props) {
    debugger
    var uniqueProduct=[];
    const [data,setData]=useState([]);
    props.data.obj1.map(item=>{
        if(uniqueProduct.indexOf(item.id) === -1){
            uniqueProduct.push(item.id)
        }
    })

    useEffect(()=>{
        fetchAllStudent();
    },[])

    const fetchAllStudent = async () => {
        try {
            const res = await axios.get("https://web-backend-api-575c4fb7fce0.herokuapp.com/student");
            console.log(res);
            setData(res.data);
        } catch (err) {
            console.log(err);

        }
    };

    return (
        <React.Fragment>

        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>College</th>
                <th>Subject</th>
            </tr>
            {
                data.map((item)=>
                    <tr><td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.gender}</td>
                        <td>{item.college}</td>
                        <td>{item.subject}</td>
                        <td>{item.stream}</td>
                    </tr>
                )
            }
        </table>
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