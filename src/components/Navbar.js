import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <span class="navbar-brand"></span>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link to="/" class="nav-link">
                Home
              </Link>
            </li>
            <li class="nav-item active">
              <Link to="/about" class="nav-link">
                About Us
              </Link>
            </li>
            <li class="nav-item active">
              <Link to="/employee" class="nav-link">
                Employees
              </Link>
            </li>
            <li class="nav-item active">
              <Link to="/add" class="nav-link">
                Add
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
