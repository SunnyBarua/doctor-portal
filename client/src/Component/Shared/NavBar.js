import React from 'react'

const NavBar = () => {
    return (
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">DoctorPortal</a>
            
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto  nav-menu">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Dental Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
                  Reviews
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link text-white" href="#">
                  Blog
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link text-white" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default NavBar
