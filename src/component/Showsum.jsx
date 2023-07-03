import axios from 'axios';
import React, { Component } from 'react'
import { Table } from 'react-bootstrap';

import SumtableRow from './SumtableRow';

class Showsum extends Component {

    constructor(props){
        super(props);
        this.state ={
            sum:[]
        }
    }


    componentDidMount(){
        axios.get('http://localhost:4000/prices/sum').then(res => {
            this.setState({
                sum:res.data
                
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    

    DataTable = () => {
        return this.state.sum.map((res , u) => {
           return < SumtableRow obj={res} key={u}/>
        })
      }

    render() {
        return (
            <div className='Table-wrapper'>
            <Table striped bordered hover>
             <thead>
               <tr>
                 <th>totalprice</th>
                 <th>date</th>
                
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

export default Showsum;
