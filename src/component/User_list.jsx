import axios from 'axios';
import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import UsertableRow from './UsertableRow';

export default class user_list extends Component {

  constructor(props){
    super(props);

    this.state = {
      users: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:4000/users').then(res => {
      this.setState({
        users:res.data,
        count:res.count
      })
    })
    .catch((error ) => {
      console.log(error)
    })
  }

  DataTable = () => {
    return this.state.users.map((res , u) => {
       return < UsertableRow obj={res} key={u}/>
    })
  }


  render() {
    return (
      <div className='Table-wrapper'>
         <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Rollno</th>
            </tr>
            
          </thead>
          <tbody>
              {this.DataTable()}
          </tbody>        
        </Table>
      </div>
    )
  }
}

