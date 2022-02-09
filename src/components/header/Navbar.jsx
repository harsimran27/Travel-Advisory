import React from "react";
import "./navbar.css";
import SearchIcon from "@material-ui/icons/Search";

const Navbar = () => {
  return (
    <div className="Navbar">
      <h3>Travel Advisory</h3>
      <div className="search">
        <h3>Explore new places</h3>
        <div className="input">
          <SearchIcon className="search-icons" />
          <input type="text" placeholder="Search" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
