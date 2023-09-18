import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light sticky-top nav" role='navigation'>
                <div class="container">

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span><i class="fa fa-bars" aria-hidden="true" style={{ color: "#fff" }}></i></span>
                    </button>


                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto ">
                            <li class="nav-item active">
                               <Link className="nav-link" to={"/"}>Home</Link> 
                            </li>
                            <li class="nav-item active">
                               <Link className="nav-link " to={"/about"}>About</Link> 
                            </li>
                            <li class="nav-item active">
                               <Link className="nav-link " to={"/skill"}>Skill</Link> 
                            </li>
                            <li class="nav-item active">
                               <Link className="nav-link " to={"/project"}>Project</Link> 
                            </li>
                            <li class="nav-item active">
                               <Link className="nav-link " to={"/contact"}>Contact</Link> 
                            </li>
                            
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar