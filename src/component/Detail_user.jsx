// import React, { Component } from 'react'
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// export default class Detail_user extends Component {
  

  

//   constructor(props){
//     super(props);

//     this.state = {
//         name: '',
//         email: '',
//         rollno: ''
//     }
//   }

//   componentDidMount(){
//     const model = this.props.match.params.id
//     axios.put('http://localhost:4000/users/detail/'+ model).then(res => {
//       this.setState({
//         name: res.data.name,
//         email: res.data.email,
//         rollno:res.data.rollno
//       })
//     })
//     .catch((error ) => {
//       console.log(error)
//     })
//   }
//   render() {
//     return (
//       <div>Detail_user</div>
//     )
//   }
// }
import axios from 'axios';
import React, { Component, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Table } from 'react-bootstrap';


function Detail_user() {
  const {id} = useParams();
  const[data , setdata] = useState([]);


  const fechdata = async()=>{
    const response = axios.get(`http://localhost:4000/users/detail/${id}` );
    setdata((await response).data)
  }

  useEffect (()=>{
    fechdata();
  }, []);

   

  return (
    
    <div>
      <h1>{id}</h1>
      <Link className='edit-link btn btn-primary' to={"/Upload/"+ data._id }>test</Link>
      <Table striped bordered hover>
             <thead>
               <tr>
                 <th>name</th>
                 <th>email</th>
                
               </tr>
               
             </thead>
             <tbody>
                 <tr>
                  {/* {data.map(i =>{
                    return(
                      <td key={i._id}>{i.name}</td>
                      
                    )
                  })} */}
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  
                </tr>
             </tbody>        
           </Table>
    </div>
  )
}

export default Detail_user