import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Mainmenu() {
    return (
        <>
            {/* Navbar Start */}
            <div className="container-fluid sticky-top">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark p-0">
                    <NavLink to="/" className="navbar-bran">
                            <h1 className="text-white">
                                AI<span className="text-dark"></span>Tech
                            </h1>
                        </NavLink>
                        <button
                            type="button"
                            className="navbar-toggler ms-auto me-0"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto">

                                <NavLink to="/" className="nav-item nav-link ">
                                    Home
                                </NavLink>

                                <NavLink to="/about" className="nav-item nav-link ">
                                    About
                                </NavLink>
                                
                                <NavLink to="/services" className="nav-item nav-link ">
                                    Services
                                </NavLink>

                                <NavLink to="/projects" className="nav-item nav-link ">
                                    Projects
                                </NavLink>

                                <div className="nav-item dropdown">
                                    <a
                                        href="#"
                                        className="nav-link dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                    >
                                        Pages
                                    </a>
                                    <div className="dropdown-menu bg-light mt-2">

                                        <NavLink to="/" className="dropdown-item ">
                                            Features
                                        </NavLink>


                                        <NavLink to="/" className="dropdown-item ">
                                            Our Team
                                        </NavLink>


                                        <NavLink to="/" className="dropdown-item ">
                                            FAQs
                                        </NavLink>


                                        <NavLink to="/" className="dropdown-item ">
                                            Testimonial
                                        </NavLink>

                                        <NavLink to="/" className="dropdown-item ">
                                            404 Page
                                        </NavLink>
                                    </div>
                                </div>

                                <NavLink to="/contact" className="nav-item nav-link ">
                                    Contact
                                </NavLink>

                            </div>
                           
                        </div>
                    </nav>
                </div>
            </div>
            {/* Navbar End */}


        </>
    )
}
