import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class ResulttableRow extends Component {
  render() {
    return (
        <tr>
        <td>{this.props.obj._id}</td>
        <td>{this.props.obj.price}</td>
        <td>{this.props.obj.date_at2}</td>
        {/* <td>
            <Link className='edit-link btn btn-primary' to={"./User_edit/"+this.props.obj._id}>edit</Link>
            <Button onClick={this.deleteUser} className='m-3' variant='danger' >deleted</Button>
        </td> */}
      </tr>
    )
  }
}
