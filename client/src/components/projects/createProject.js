import React, { useState } from "react";
import { useNavigate } from "react-router";
//const baseUrl = 'http://24.185.220.224:8000/api/projects';
//const baseUrl = 'http://127.0.0.1:8000/api/projects';
//const baseUrl = 'http://ec2-54-209-142-161.compute-1.amazonaws.com:8000/projects';
const baseUrl = 'http://localhost:8000/projects';
export default function Create() {
 const [form, setForm] = useState({
  title: "",
  description: "",
  published: false
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newProject = { ...form };
 
   await fetch(`${baseUrl}/`, {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newProject),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({  title: "",
   description: "",
   published: false});
   navigate("/list");
 }
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Create New Project</h3>
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
         type="text"
          className="form-control"
          id="description"
           value={form.description}
           onChange={(e) => updateForm({ description: e.target.value })}         
         />
       </div>
       <div className="form-group">
         <input
           type="submit"
           value="Create project"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}