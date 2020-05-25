import React, { Component } from 'react'
import { Modal, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import withApiRequests from './HOC/withApiRequests';

class Registration extends Component {
  constructor(props){
    super(props);

    this.state = {
        showModal: true,
        firstnameInput:{ value : '', valid : false },
        lastnameInput:{ value : '', valid : false },
        emailInput:{ value : '', valid : false },
        passwordInput:{ value : '', valid : false },

    }
}

handleInputChange = (event) => {
  this.setState({ [event.target.name]: { value: event.target.value, valid: !!event.target.value } });
}

addUser = (event) => {
  event.preventDefault();

  event.target.className += " was-validated";

  if(this.state.firstnameInput.valid === true & this.state.lastnameInput.valid === true 
    & this.state.emailInput.valid === true & this.state.passwordInput.valid === true){
    
    this.props.history.push('/');
    this.newUser = {
      firstname: this.state.firstnameInput.value,
      lastname: this.state.lastnameInput.value,
      email: this.state.emailInput.value,
      password: this.state.passwordInput.value
      }
    this.props.postUser(this.newUser);}
}

render() {
  const {  firstnameInput, emailInput, lastnameInput, passwordInput, showModal } = this.state;
  return (
    <div>
      <Modal
        size="lg"
        show={showModal}
        onHide={() => {
          this.setState({showModal: false})
      }}
      >
        <Modal.Header closeButton style={{backgroundColor: 'white'}}>
        <Modal.Title style={{backgroundColor: 'white'}}>
            Register your new account here!
        </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor: 'white'}}>
          <Form noValidate className="loginForm" onSubmit={this.addUser}>
              
            <Form.Group controlId="formBasicFirstName" className="loginForm" >
                <Form.Label className="loginForm">First Name</Form.Label>
                <Form.Control  
                  type='text'
                  required
                  name="firstnameInput"
                  value={firstnameInput.value}
                  onChange={this.handleInputChange} 
                  placeholder="Enter Firstname" />
                <div className="valid-feedback">Looks good!</div>
            </Form.Group>
            

            <Form.Group controlId="formBasicLastName" className="loginForm">
                <Form.Label className="loginForm">Last Name</Form.Label>
                <Form.Control 
                  type='text'
                  name="lastnameInput"
                  required
                  value={lastnameInput.value}
                  onChange={this.handleInputChange} 
                  placeholder="Enter Lastname" />
                <div className="valid-feedback">Looks good!</div>
            </Form.Group>
            


            <Form.Group controlId="formBasicEmail" className="loginForm">
                <Form.Label className="loginForm">Email address</Form.Label>
                <Form.Control 
                  type='email'
                  name="emailInput"
                  value={emailInput.value}
                  required
                  onChange={this.handleInputChange}
                  placeholder="Enter email" />
                <div className="valid-feedback">Looks good!</div>  
            </Form.Group>

            <Form.Group className="loginForm" controlId="formBasicPassword">
                <Form.Label className="loginForm">Password</Form.Label>
                <Form.Control 
                  type="password"
                  name="passwordInput"
                  required
                  value={passwordInput.value}
                  onChange={this.handleInputChange} 
                  placeholder="Password" />
                <div className="valid-feedback">Looks good!</div>  
            </Form.Group>


            <Button variant="primary" type="submit"  >
                Create
            </Button>
            <Form.Text className="loginForm">Already have an account? <Link to="/login">Login here!</Link></Form.Text>
          
          </Form>
        </Modal.Body>
      </Modal>
    </div>
    )
  }
}

export default withApiRequests (Registration);