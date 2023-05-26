import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class UsertableRow extends Component {

     deleteUser = () => {

        
        const url= 'http://localhost:4000/users/deleteUser/' + this.props.obj._id
        console.log(url)

        if(window.confirm("are you sure deleted data")){
            axios.delete( url)
                .then((res) => {
                    console.log("deleted success" + res);
                }).catch((err) => {
                    console.log(err)
                })
            }


    }
    

  render() {
    return (
      <tr>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.email}</td>
        <td>{this.props.obj.rollno}</td>
        <td>
            <Link className='edit-link btn btn-primary' to={"./User_edit/"+this.props.obj._id}>edit</Link>
            <Button onClick={this.deleteUser} className='m-3' variant='danger' >deleted</Button>
        </td>
      </tr>
    )
  }
}
