import React, { Component } from 'react'
import { Form , Button } from 'react-bootstrap'
import axios from 'axios'


export default class Price_post extends Component {
    constructor(props){
        super(props)
    
        this.state = {
          price: '',
          date_at:''
        //   date_at2:''

        }
      }
    
      OnChangPrice = (e) => {
        this.setState({price: e.target.value })
      }
      OnChangDate = (e) => {
        this.setState({date_at: e.target.value })
        // this.setState({date_at2: e.target.value })
      }

      Onsubmit = (e) => {
        e.preventDefault();
    
        const priceObject = {
          price: this.state.price,
          date_at: this.state.date_at,
        //   date_at2: this.state.date_at2,

        }
    
        axios.post('http://localhost:4000/prices/Price_post' , priceObject).then(res => console.log(res.data));
    
    
        console.log('create successfully');
        // console.log(`Name: ${this.state.name}`);
        // console.log(`Email: ${this.state.email}`);
        // console.log(`Rollno: ${this.state.rollno}`);
    
        this.setState({
          price: '',
   
        })
        console.log(priceObject)
        
      }
    
    
      render() {
        return (
          
          <div className="form-wrapper">
          <div>user_create</div>
          <Form onSubmit={this.Onsubmit}>
            <Form.Group controlId='Name'>
              <Form.Label>Name</Form.Label>
              <Form.Control type='text' value={this.state.price} onChange={this.OnChangPrice}/>
            </Form.Group>
            <Form.Group controlId='Name'>
              <Form.Label>Name</Form.Label>
              <Form.Control type='date' value={this.state.date_at} onChange={this.OnChangDate}/>
              {/* <Form.Control type='date' value={this.state.date_at2} onChange={this.OnChangDate}/> */}
            </Form.Group>
            <Button className='mt-2' variant='success' size='lg' block="block" type='submit' >create user</Button>    
          </Form>
        </div>
        )
      }
    }
    
    
