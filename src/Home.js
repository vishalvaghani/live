import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router";

function Home() {
    const navigate = useNavigate('');
    debugger
    function HandleClick() {
        debugger;
        navigate('/Student');
    }
    return (
        <>
            <h2>Home Page</h2><br></br>
            <Container className="d-flex justify-content-center">
                <Button onClick={HandleClick}>Student Form</Button>
            </Container>
        </>
    )
}
export default Home;