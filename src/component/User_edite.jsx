import axios from 'axios';
import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import UsertableRow from './UsertableRow';

export default class User_edite extends Component {

  constructor(props){
    super(props);
    this.state ={
        result:[]
    }
}
  componentDidMount(){
    axios.get('http://localhost:4000/prices/User_edit/').then(res =>{
      this.setState({
        result:res.data
      })
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  DataTable = () => {
    return this.state.result.map((res , u) => {
       return < ResulttableRow obj={res} key={u}/>
    })
  }

  

  render() {
    return (
      <div className='Table-wrapper'>
         <Table striped bordered hover>
          <thead>
            <tr>
              <th>_id</th>
              <th>price</th>
              <th>date_at2</th>
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

