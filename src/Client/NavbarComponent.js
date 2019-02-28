import React from "react";
import ReactDOM from "react-dom";

function NavbarComponent(props) {
  return (
    <nav className="navbar navbar-inverse" style={{backgroundColor:'#000', color:'#fff', marginBottom:'20px'}}>
      <div className="container-fluid">
        <div className="navbar-header">
          <h1 className="navbar-brand" >Message Board</h1>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;
