import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  
    const [clicked,setclicked] =useState(false)
    const navigate = useNavigate();

    return (

        <div >

            <header className="main-header-wrapper-section">
                <div className="container-fluid">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="logo-wrapper-header">
                            <a href="#"><img src="assets/images/headerlogo.png" alt="Not Fount" /></a>
                        </div>
                        <div className="mobile-menbu-wrapper">
                            <div></div>
                        </div>
                        <div className="header-menu-wrapper">

                            <ul className="header-menu">
                                <li  onClick={()=>{navigate("/")}}><a href="#" >home</a></li>
                                <li onClick={()=>{navigate("/About-us")}}><a href="#">about us</a></li>
                                <li onClick={()=>{navigate("/Services")}}><a href="#">services</a></li>
                                <li onClick={()=>{navigate("/Portfolio")}}><a href="#">portfolio</a></li>
                                <li onClick={()=>{navigate("/Blog")}}><a href="#">blog</a></li>
                                <span onClick={()=>{navigate("/Get_in_Touch")}} className="button-in-touch"><a href="#" >Get In Touch</a></span>
                                
                            </ul>

                            {/* <span className='mobile-response-nav-parent'>
                            <li className='mobile-response-nav-button' onClick={()=>{setclicked(!clicked)}}>
                                <i class={clicked?"fa fa-bars":"fa fa-times"} aria-hidden="true"></i>
                                </li>
                            </span> */}


                              
                        </div> 
                    </div>
                </div>
            </header>
        </div>
    )

}
