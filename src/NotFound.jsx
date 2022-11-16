import React from "react";

const NotFound = ({ selectedTeam, teamMemberCount }) => {
  return (
    <header className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
            <h1 className="text-danger">404 - Page not found</h1>
        </div>
      </div>
    </header>
  );
};

export default NotFound;
