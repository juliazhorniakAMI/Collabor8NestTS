// @ts-nocheck
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
//const baseUrl = 'http://24.185.220.224:8000/api/projects';
const baseUrl = 'http://ec2-54-209-142-161.compute-1.amazonaws.com:8000/projects';
export default function Edit() {
 const [form, setForm] = useState({
  title: '',
  description: '',
  published: false,
   projects: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
    
 
     const id = params.id.toString();
     const response = await fetch(`${baseUrl}/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Project with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(record);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
   const editedProject = {
    title:form.title,
    description:form.description,
    published: form.published,
   
   };
 
   // This will send a post request to update the data in the database.
   await fetch(`${baseUrl}/${params.id}`, {
     method: "PUT",
     body: JSON.stringify(editedProject),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     <h3>Update Project</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
       <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={form.title}
          onChange={(e) => updateForm({ title: e.target.value })}
        />
  </div>
  <div className="form-group">
       <label htmlFor="description">Description</label>
        <input
          className="form-control"
          id="description"
           value={form.description}
           onChange={(e) => updateForm({ description: e.target.value })}
         />
       </div>
     
       <br />

       <div className="form-group">
         <input
           type="submit"
           value="Update Project"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}