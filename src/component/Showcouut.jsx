
import {React, useEffect, useState } from 'react'
import axios from 'axios'



function Showcouut() {
    const [data, setdata] = useState([])
    const [search , setsearch] = useState(``)


    const fechData = async () =>{
        
        const respones = await axios.get(`http://localhost:4000/prices/search/${search}`);
        setdata(respones.data);      
    }


    const handleSearchChang = (event) => {
        setsearch(event.target.value);
    }


    const handleSearchSubmit = (event) => {
        event.preventDefault();
        
        fechData();

    }
    

  return (
    <>
     <form onSubmit={handleSearchSubmit}>
                <input type="date"   onChange={handleSearchChang} />
                <button type="submit" >show price</button>
    </form>

    <ul>
        {data.map((sum)=>(
            <li key={sum._id}>
                <h1 >{sum.price}</h1>
            </li>
        ))}
    </ul>
    </>
  )
}

export default Showcouut