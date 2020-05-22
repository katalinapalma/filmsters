import React, { Component } from 'react'
import { Modal, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            showModal: true,
        }
    }

  render() {
    return (
      <div>
        <Modal
          size="lg"
          show={this.state.showModal}
            onHide={() => {
              this.setState({showModal: false})
          }}
        >
          <Modal.Header closeButton style={{backgroundColor: 'white'}}>
          <Modal.Title style={{backgroundColor: 'white'}}>
              Login!
          </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{backgroundColor: 'white'}}>
              <Form className="loginForm">
                  <Form.Group controlId="formBasicEmail" className="loginForm">
                      <Form.Label className="loginForm">Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="loginForm" controlId="formBasicPassword">
                      <Form.Label className="loginForm">Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                      Submit
                  </Button>
                  <Form.Text className="loginForm">Dont have an account? <Link to="/register">Sign one Here</Link></Form.Text>
              </Form>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default Login;
