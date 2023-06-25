import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class SumtableRow extends Component {
  render() {
    return (
        <tr>
        <td>{this.props.obj.totalprice}</td>
        <td>{this.props.obj._id.date_at}</td>
        
        <td>
            <Link className='edit-link btn btn-primary' to={"/User_edit/"+this.props.obj._id.date_at}>detail</Link>
            <Button onClick={this.deleteUser} className='m-3' variant='danger' >deleted</Button>
        </td>
      </tr>
    )
  }
}
