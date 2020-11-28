import React from "react";
import "../../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import "./Profile.css";
import Button from "react-bootstrap/Button";
import Accordion from 'react-bootstrap/Accordion'
import Table from 'react-bootstrap/Table'

export default function Profile(props) {
  return (
    <>
    <div class = "parent">
    <section class = 'card'>
    <Card style={{ width: '20rem'}}>
  <Card.Img variant="top" src="images/img-6.jpg" />
  <Card.Body>
  <Card.Title>↓↓The best volunteer ever↙↙ </Card.Title>
    <Card.Title>{props.user.first_name}</Card.Title>
  </Card.Body>
</Card>
</section>
<section class = 'card2'>
<Table striped bordered hover>
  <thead>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>email address</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{props.user.first_name}</td>
      <td>{props.user.last_name}</td>
      <td>{props.user.email}</td>
    </tr>
    <tr>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="3">Address</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td colSpan="3">{props.user.address}</td>
    </tr>
    <tr>
    </tr>
  </tbody>
  
  
</Table>

<Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      Previous application      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>No previous activity</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      Current application
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
  <Card.Body>No application , Current Status: Not available </Card.Body>
      
    </Accordion.Collapse>
  </Card>
</Accordion>
</section>
</div>
  </>
  );
}
