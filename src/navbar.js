import React from "react";
import { Link } from "react-router-dom";


const Navbar = ()=>{
    return(
        <diV>
            <section className="navbar-bg">
            <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Website</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Testimonial</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Contact</a>
        </li>
      </ul>
      <form class="d-flex">
        <button class="btn btn-outline-success" type="submit">Sign in</button>
        <button class="btn btn-outline-success" type="submit">Sign up</button>
      </form>
    </div>
  </div>
</nav>
</section>
        </diV>
        
    );
}

export default Navbar;