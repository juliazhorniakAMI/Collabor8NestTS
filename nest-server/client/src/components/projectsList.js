import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//const baseUrl = 'http://24.185.220.224:8000/api/projects';
//const baseUrl = 'http://127.0.0.1:8000/api/projects';
const baseUrl = 'http://ec2-54-209-142-161.compute-1.amazonaws.com:8000/projects';
const Project = (props) => (
 <tr>
   <td>{props.project.title}</td>
   <td>{props.project.description}</td>
   
   <td>
     <Link className="btn btn-link" to={`/edit/${props.project._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteProject(props.project._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function ProjectsList() {
 const [projects, setProjects] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getProjects() {
     const response = await fetch(`${baseUrl}/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     setProjects(records);
   }
 
   getProjects();
 
   return;
 }, [projects.length]);
 
 // This method will delete a record
 async function deleteProject(id) {
   await fetch(`${baseUrl}/${id}`, {
     method: "DELETE"
   });
 
   // @ts-ignore
   const newRecords = projects.filter((el) => el._id !== id);
   // @ts-ignore
   setProjects(newRecords);
 }
 
 // This method will map out the records on the table
 function projectsList() {
   return projects.map((project) => {
     return (
       <Project
         project={project}
         // @ts-ignore
         deleteProject={() => deleteProject(project._id)}
         // @ts-ignore
         key={project._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div>
     <h3>Project List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Title</th>
           <th>Description</th>
         </tr>
       </thead>
       <tbody>{projectsList()}</tbody>
     </table>
   </div>
 );
}