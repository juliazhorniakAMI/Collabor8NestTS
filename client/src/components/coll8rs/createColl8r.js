import React, { useState } from "react";
import { useNavigate } from "react-router";
import configData from "../../config.json";
const baseUrl = configData.SERVER_Coll8r_URL;
//const baseUrl = 'http://24.185.220.224:8000/api/projects';
//const baseUrl = 'http://127.0.0.1:8000/api/projects';
//const baseUrl = 'http://ec2-54-209-142-161.compute-1.amazonaws.com:8000/projects';
export default function Create() {
  const [form, setForm] = useState({
    coll8rType: "",
    coll8rFullName: "",
    coll8rEmail: "",
    coll8rPass: "",
    coll8rBackgrnd: "",
    coll8rResume: ""
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

    setForm({
      coll8rType: "",
      coll8rFullName: "",
      coll8rEmail: "",
      coll8rPass: "",
      coll8rBackgrnd: "",
      coll8rResume: ""
    });
    navigate("/coll8rlist");
  }
  // This following section will display the form that takes the input from the user.
  return (
    <div>
      <h3>Create New Collabor8or</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="coll8rType">Type</label>
          <input
            type="text"
            className="form-control"
            id="coll8rType"
            value={form.coll8rType}
            onChange={(e) => updateForm({ title: e.target.value })}

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
            onChange={(e) => updateForm({ title: e.target.value })}

          />
        </div>
        <div className="form-group">
          <label htmlFor="coll8rBackgrnd">Background</label>
          <input
            type="text"
            className="form-control"
            id="coll8rBackgrnd"
            value={form.coll8rBackgrnd}
            onChange={(e) => updateForm({ title: e.target.value })}

          />
        </div>
        <div className="form-group">
          <label htmlFor="coll8rResume">Resume</label>
          <input
            type="text"
            className="form-control"
            id="coll8rResume"
            value={form.coll8rResume}
            onChange={(e) => updateForm({ title: e.target.value })}

          />
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Create"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}