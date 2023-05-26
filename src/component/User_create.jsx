import React, { Component } from 'react'
import { Form , Button } from 'react-bootstrap'
import axios from 'axios'

export default class user_create extends Component {
  
  constructor(props){
    super(props)

    this.state = {
      name: '',
      email: '',
      rollno: ''
    }
  }

  OnChangUserName = (e) => {
    this.setState({name: e.target.value })
  }
  OnChangUseremail = (e) => {
    this.setState({email: e.target.value })
  }
  OnChangUserRoolNo = (e) => {
    this.setState({rollno: e.target.value })
  }

  Onsubmit = (e) => {
    e.preventDefault();

    const userObject = {
      name: this.state.name,
      email: this.state.email,
      rollno: this.state.rollno
    }

    axios.post('http://localhost:4000/users/User_create' , userObject).then(res => console.log(res.data));


    console.log('create successfully');
    // console.log(`Name: ${this.state.name}`);
    // console.log(`Email: ${this.state.email}`);
    // console.log(`Rollno: ${this.state.rollno}`);

    this.setState({
      name: '',
      email: '',
      rollno: ''
    })
    console.log(userObject)
    
  }


  render() {
    return (
      
      <div className="form-wrapper">
      <div>user_create</div>
      <Form onSubmit={this.Onsubmit}>
        <Form.Group controlId='Name'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' value={this.state.name} onChange={this.OnChangUserName}/>
        </Form.Group>
        <Form.Group controlId='Email'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' value={this.state.email} onChange={this.OnChangUseremail}/>
        </Form.Group>
        <Form.Group controlId='Roll'>
          <Form.Label>Roll no.</Form.Label>
          <Form.Control type='text'value={this.state.rollno} onChange={this.OnChangUserRoolNo}/>
        </Form.Group>
        <Button className='mt-2' variant='success' size='lg' block="block" type='submit' >create user</Button>    
      </Form>
    </div>
    )
  }
}

