import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//const baseUrl = 'http://24.185.220.224:8000/api/projects';
//const baseUrl = 'http://127.0.0.1:8000/api/projects';
//const baseUrl = 'http://ec2-54-209-142-161.compute-1.amazonaws.com:8000/projects';
import configData from "../../config.json";
const baseUrl = configData.SERVER_Coll8r_URL;
const Coll8or = (props) => (
 <tr>
   <td>{props.coll8r.coll8rType}</td>
   <td>{props.coll8r.coll8rFullName}</td>  
   <td>{props.coll8r.coll8rEmail}</td>
   <td>{props.coll8r.coll8rPass}</td>  
   <td>{props.coll8r.coll8rBackgrnd}</td>
   <td>{props.coll8r.coll8rResume}</td>  
   <td>
     <Link className="btn btn-link" to={`/coll8redit/${props.coll8r._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteColl8r(props.coll8r._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
export default function Coll8orList() {
 const [coll8rs, setColl8rs] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getColl8rs() {
     const response = await fetch(`${baseUrl}/`);
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
     const records = await response.json();
     setColl8rs(records);
   }
   getColl8rs();
   return;
 }, [coll8rs.length]);

 // This method will delete a record
 async function deleteColl8r(id) {
   await fetch(`${baseUrl}/${id}`, {
     method: "DELETE"
   });
   // @ts-ignore
   const newRecords = coll8rs.filter((el) => el._id !== id);
   // @ts-ignore
   setColl8rs(newRecords);
 }
 // This method will map out the records on the table
 function coll8rsList() {
   return coll8rs.map((coll8r) => {
     return (
       <Coll8or
         coll8r={coll8r}
         // @ts-ignore
         deleteColl8r={() => deleteColl8r(coll8r._id)}
         // @ts-ignore
         key={coll8r._id}
       />
     );
   });
 }

 // This following section will display the table with the records of individuals.
 return (
   <div>
     <h3>Collabor8or List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>coll8rType</th>
           <th>coll8rFullName</th>
           <th>coll8rEmail</th>
           <th>coll8rPass</th>
           <th>coll8rBackgrnd</th>
           <th>coll8rResume</th>
         </tr>
       </thead>
       <tbody>{coll8rsList()}</tbody>
     </table>
   </div>
 );
}