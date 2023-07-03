// import axios from 'axios';
// import React, { Component } from 'react'
// import { Table } from 'react-bootstrap';


// export default class User_edite extends Component {

//   constructor(props){
//     super(props);
//     this.state ={
//         result:[]
//     }
// }
//   componentDidMount(){
//     axios.get('http://localhost:4000/prices/User_edit/').then(res =>{
//       this.setState({
//         result:res.data
//       })
//     })
//     .catch((error)=>{
//       console.log(error)
//     })
//   }
//   DataTable = () => {
//     return this.state.result.map((res , u) => {
//        return < ResulttableRow obj={res} key={u}/>
//     })
//   }

  

//   render() {
//     return (
//       <div className='Table-wrapper'>
//          <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>_id</th>
//               <th>price</th>
//               <th>date_at2</th>
//             </tr>
            
//           </thead>
//           <tbody>
//               {this.DataTable()}
//           </tbody>        
//         </Table>
        
//       </div>
//     )
//   }
// }

import axios from 'axios';
import React, { Component, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Table } from 'react-bootstrap';


function User_edite() {
  const {id} = useParams();
  const [data , setdata] = useState([]);


  const fechdata = async()=>{
    const response = axios.get(`http://localhost:4000/prices/fechdetail/${id}`);
    setdata((await response).data)

  }

  useEffect (()=>{
    fechdata();
  }, []);


  return (

    <div>
      <h1>{id}</h1>
      <Table>
        <thead>
          <tr>
            <th>date</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          
            {data.map( (res , u) =>{
                    return(
                      
                       <tr key={res._id}>
                        <td>{res.date_at}</td>
                        <td>{res.price}</td>

                       </tr> 
                      
                      
                      
                      
                    )
                  })}
          
        </tbody>
      </Table>
    </div>
  )
}

export default User_edite