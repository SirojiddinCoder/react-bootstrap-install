import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Alert,Card } from "react-bootstrap";
import Rasm from '../src/logo192.png'

const Boot = () =>{
    return(
        <div>
            <h1>React bootstrap</h1>
            <Button variant="danger">Clic Me!</Button>
            <Button variant="info">Clic Me!</Button>
            <Button variant="primary">Clic Me!</Button>
            <Alert variant="danger">Salom alert</Alert>
            <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={Rasm} alt="nimadir" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </div>
    )
}


export default Boot;