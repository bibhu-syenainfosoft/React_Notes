// import { Link, useSearchParams } from "react-router-dom"

// export default function NRILogin(){
//     const[searchParams,setSearchParams] = useSearchParams();

//     const paramVal = searchParams.get('name');
//      const updateParam = ()=>{    //same as method
//         setSearchParams({name:'Bibhu',age:23});
//      }


//     return(
//         <div className="container-fluid">
//             <h2><b>NRI LOGIN...</b></h2>
//             <h3>Param Value: {paramVal}</h3>
//             <button onClick={updateParam}>update Query Param</button><br></br> <br />
//             <Link to='/nri'>Back to NRI</Link>
//         </div>
//     )
// }



  
//If we dont know routing params then

  import React from "react";

const NRILogin = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const name = queryParams.get("name"); // e.g., ?name=John -> "John"

  return (
    <div>
      <h1>Query Parameter Example</h1>
      <p>Name: {name}</p>
    </div>
  );
};

export default NRILogin;


