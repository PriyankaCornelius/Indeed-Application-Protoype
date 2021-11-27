import React from "react";
import EmployerDashboard from "./employerDashboard";

const Applicants = (props) => {
  return (
    <div>
      <EmployerDashboard currentTab="applicants"></EmployerDashboard>
      <h1>Applicants</h1>
    </div>
  );
};

export default Applicants;
