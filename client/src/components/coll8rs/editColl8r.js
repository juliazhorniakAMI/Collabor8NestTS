// @ts-nocheck
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import configData from "../../config.json";
const baseUrl = configData.SERVER_Coll8r_URL;
//const baseUrl = 'http://24.185.220.224:8000/api/projects';
//const baseUrl = 'http://ec2-54-209-142-161.compute-1.amazonaws.com:8000/projects';
export default function Edit() {
 const [form, setForm] = useState({
  coll8rType: "",
  coll8rFullName: "",
  coll8rEmail: "",
  coll8rPass: "",
  coll8rBackgrnd: "",
  coll8rResume: "",
  //coll8rs: [],
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
       window.alert(`Collabor8or with id ${id} not found`);
       navigate("/coll8rlist");
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
    const editedColl8r = {
      coll8rType: form.coll8rType,
      coll8rFullName: form.coll8rFullName,
      coll8rEmail: form.coll8rEmail,
      coll8rPass: form.coll8rPass,
      coll8rBackgrnd: form.coll8rBackgrnd,
      coll8rResume: form.coll8rResume
    };
   // This will send a post request to update the data in the database.
   await fetch(`${baseUrl}/${params.id}`, {
     method: "PUT",
     body: JSON.stringify(editedColl8r),
     headers: {
       'Content-Type': 'application/json'
     },
   });
   navigate("/coll8rlist");
 }
 // This following section will display the form that takes input from the user to update the data.
 return (
  <div>
  <h3>Update Project</h3>
  <form onSubmit={onSubmit}>
    <div className="form-group">
    <label htmlFor="coll8rType">Type</label>
     <input
       type="text"
       className="form-control"
       id="coll8rType"
       value={form.coll8rType}
       onChange={(e) => updateForm({ coll8rType: e.target.value })}
     />
</div>
        <div className="form-group">
          <label htmlFor="coll8rFullName">FullName</label>
          <input
            type="text"
            className="form-control"
            id="coll8rFullName"
            value={form.coll8rFullName}
            onChange={(e) => updateForm({ coll8rFullName: e.target.value })}

          />
        </div>
        <div className="form-group">
          <label htmlFor="coll8rEmail">Email</label>
          <input
            type="text"
            className="form-control"
            id="coll8rEmail"
            value={form.coll8rEmail}
            onChange={(e) => updateForm({ coll8rEmail: e.target.value })}

          />
        </div>
        <div className="form-group">
          <label htmlFor="coll8rPass">Pass</label>
          <input
            type="text"
            className="form-control"
            id="coll8rPass"
            value={form.coll8rPass}
            onChange={(e) => updateForm({ coll8rPass: e.target.value })}

          />
        </div>
        <div className="form-group">
          <label htmlFor="coll8rBackgrnd">Background</label>
          <input
            type="text"
            className="form-control"
            id="coll8rBackgrnd"
            value={form.coll8rBackgrnd}
            onChange={(e) => updateForm({ coll8rBackgrnd: e.target.value })}

          />
        </div>
        <div className="form-group">
          <label htmlFor="coll8rResume">Resume</label>
          <input
            type="text"
            className="form-control"
            id="coll8rResume"
            value={form.coll8rResume}
            onChange={(e) => updateForm({ coll8rResume: e.target.value })}

          />
        </div>

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