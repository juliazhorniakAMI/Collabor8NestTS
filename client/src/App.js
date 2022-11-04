import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./components/navbar";
import ProjectsListComponent from "./components/projectsList";
import EditProjectComponent from "./components/editProject";
import CreateProjectComponent from "./components/createProject";
 
const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
       <Route path="/" element={<ProjectsListComponent />} />
       <Route path="/edit/:id" element={<EditProjectComponent />} />
       <Route path="/create" element={<CreateProjectComponent />} />
     </Routes>
   </div>
 );
};
 
export default App;