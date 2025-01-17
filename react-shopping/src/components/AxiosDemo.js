import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RoleTable = () => {
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        axios.get('https://testapps.aquilasoftware.com/CRMV1/maintenance/getRolesList', {
            params: {
                jsonObj: JSON.stringify({
                    name: "",
                    active: 1,
                    upperbound: 10,
                    lowerbound: 1,
                    catererId: "compasscrmtest"
                })
            }
        })
        .then(response => {
            setRoles(response.data);
        })
        .catch(error => {
            console.error("There was an error fetching the data!", error);
        });
    }, []);

    return (
        <div>
            <h1>Roles List</h1>
            {roles?.length>0 ?
             <table className='table table-hover'>
             <thead>
                 <tr>
                     <th>ID</th>
                     <th>Name</th>
                     <th>Description</th>
                     <th>Sort Order</th>
                     <th>Active</th>
                 </tr>
             </thead>
             <tbody>
                 {roles.sort((a,b)=>a.id-b.id).map((role, index) => (
                     <tr key={index}>
                         <td>{role.id}</td>
                         <td>{role.name}</td>
                         <td>{role.description}</td>
                         <td>{role.sortOrder}</td>
                         <td>{role.active==1?'Yes':'No'}</td>
                     </tr>
                 ))}
             </tbody>
         </table> : 
         <p className='text-center text-danger'>No Records Found</p>}
        </div>
    );
};
export default RoleTable;






// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function AxiosDemo() {
//   const [roles, setRoles] = useState([]);

//   useEffect(() => {
//     axios.get('https://testapps.aquilasoftware.com/CRMV1/maintenance/getRolesList?jsonObj={"name":"","active":1,"upperbound":10,"lowerbound":"1","catererId":"compasscrmtest"}')
//       .then(response => {
//         setRoles(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Roles List</h1>
//       {roles.length > 0 ? (
//         <ul>
//           {roles.map(role => (
//             <li key={role.id}>
//               <h2>{role.name}</h2>
//               <p>{role.description}</p>
//               <p>{role.active==1?'Yes':'No'}</p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No roles available.</p>
//       )}
//     </div>
//   );
// }

// export default AxiosDemo;
