import React from "react";
// We use Route in order to define the different routes of our application
import { Route, Router, Routes } from "react-router-dom";
// We import all the components we need in our app
import Homepage from "./components/homePage";
// import Navbar from "./components/navbar";
// import ProjectsListComponent from "./components/projects/projectsList";
// import EditProjectComponent from "./components/projects/editProject";
// import CreateProjectComponent from "./components/projects/createProject";
import Coll8rListComponent from "./components/coll8rs/listColl8r";
import EditColl8rComponent from "./components/coll8rs/editColl8r";
import CreateColl8rComponent from "./components/coll8rs/createColl8r";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import HomePage from "./components/homePage";
 
const App = () => {
 return (
    <div>
      {
      <><Navbar /><Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/list" element={<ProjectsListComponent />} />
         <Route path="/edit/:id" element={<EditProjectComponent />} />
         <Route path="/create" element={<CreateProjectComponent />} /> */}
         <Route path="/coll8rlist" element={<Coll8rListComponent />} />
         <Route path="/coll8redit/:id" element={<EditColl8rComponent />} />
         <Route path="/coll8rcreate" element={<CreateColl8rComponent />} />

        </Routes>
        <Footer />
        </> 
      }
    </div>
 );
};
 
export default App;