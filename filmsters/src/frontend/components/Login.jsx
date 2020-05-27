import React, { Component } from 'react'
import { Modal, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import withApiRequests from '../components/HOC/withApiRequests';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: true,
      emailInput:{ value : '', valid : false },
      passwordInput:{ value : '', valid : false },
      users:[]
      }
    }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: { value: event.target.value, valid: !!event.target.value } });
  }

  componentDidMount(){
    this.props.getUser()
    .then(data=>{
      this.setState({users:data.map((items)=>{
        return items
      })})
    })
    
  }
 
  login = (event) => {
    event.preventDefault();
  
    event.target.className += " was-validated";

    if( this.state.emailInput.valid === true & this.state.passwordInput.valid === true  )
    if( this.state.users.find(user => user.email === this.state.emailInput.value) )
    if( this.state.users.find(user => user.password === this.state.passwordInput.value)){
        this.props.history.push('/'); 
      }
  }

  render() {
  const { emailInput, passwordInput, showModal } = this.state;
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
              Login with your Email and Password!
          </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{backgroundColor: 'white'}}>
              <Form noValidate className="loginForm" onSubmit={this.login}>
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
                  <Button variant="primary" type="submit">
                      Login
                  </Button>
                  <Form.Text className="loginForm">Dont have an account? <Link to="/register">Sign one Here</Link></Form.Text>
              </Form>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default withApiRequests (Login);
