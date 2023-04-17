// import React, {  useState,useRef } from 'react'
// import './navbar.css'
// import { useNavigate } from 'react-router-dom';


// export default function Navbar() {
//   const navref = useRef()

//     const [clicked, setclicked] = useState(true)
//     const navigate = useNavigate();

//     return (
//         <div className='sticky-container'>
//             <nav className="navbar navbar-expand-lg  navbar-dark parent" >
//                 {/* <!-- Brand --> */}
//                 <a onClick={() => { navigate("/") }} className="navbar-brand" >
//                     <img className='larger-main' src='assets/images/headerlogo.png' />
//                 </a>

//                 {/* <!-- Toggler/collapsibe Button --> */}
//                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" onClick={() => { setclicked(!clicked) }}>
//                     <div className='button-icon'>
//                         <img src={clicked ? "assets/images/3bars.png" : "assets/images/x-one.png"} />
//                     </div>
//                 </button>

//                 {/* <!-- Navbar links --> */}
//                 <div className="collapse navbar-collapse resposne-head classwith" id="collapsibleNavbar">
//                     <ul className="navbar-nav" id='myDIV'>
//                         <li className="nav-item navother">
//                             <a className="nav-link other-evry-li active "onClick={(e) => {
                                    
//                                     let other=document.getElementsByClassName("nav-link")
                    
//                                   for(let i=0;i<other.length;i++){
//                                     other[i].className="nav-link other-evry-li"
//                                   }

//                                   e.target.className="nav-link other-evry-li active"

//                                   navigate("/")

//                             }}>Home
//                              <div className='orange-parent'>
//                              <i className="fa fa-circle orange-dot"></i>
//                              </div>
                            
//                             </a>
                           
//                         </li>
//                         <li className="nav-item navother">
//                             <a className="nav-link other-evry-li"onClick={(e) => {
                                  
//                                   let other=document.getElementsByClassName("nav-link")
//                                   for(let i=0;i<other.length;i++){
//                                     other[i].className="nav-link other-evry-li"
//                                   }

//                                   e.target.className="nav-link other-evry-li active"

                                  
//                                   const okyyy=e.target.querySelector(".orange-parent")
//                                   console.log(ok)
                    

                            
//                                 navigate("/About-us") }}>
//                                     About Us
//                                     <div className='orange-parent'>
//                                     <i className="fa fa-circle orange-dot"></i>
//                                     </div>
                                    
//                                     </a>
                                    
                                    
//                         </li>
//                         <li className="nav-item navother">
//                             <a className="nav-link other-evry-li" onClick={(e) => { 
                                  
//                                   let other=document.getElementsByClassName("nav-link")
//                                   for(let i=0;i<other.length;i++){
//                                     other[i].className="nav-link other-evry-li"
//                                   }

//                                   e.target.className="nav-link other-evry-li active"

                            
//                                 navigate("/Services") }}>Services</a>
//                                 <div className='orange-parent '>
//                                  <i className="fa fa-circle orange-dot"></i>
//                                  </div>
//                         </li>
//                         <li className="nav-item navother">
//                             <a className="nav-link other-evry-li"  onClick={(e) => { 
                                  
//                                   let other=document.getElementsByClassName("nav-link")
//                                   for(let i=0;i<other.length;i++){
//                                     other[i].className="nav-link other-evry-li"
//                                   }

//                                   e.target.className="nav-link other-evry-li active"

                                
//                                 navigate("/Portfolio") }}>Portfolio
//                                    {/* <div className='reone'>
//                                  <div className='red-parent'>
//                                  <i  className="fa fa-circle"></i>
//                                  </div>
//                                  </div> */}
//                                 </a>
//                                 <div className='orange-parent'>
//                                  <div className='orange-set-height'>
//                                  <i  className="fa fa-circle orange-dot"></i>
//                                  </div>
//                                  </div>
//                         </li>
//                         <li className="nav-item navother">
//                             <a className="nav-link other-evry-li"  onClick={(e) => { 
                                  
//                                   let other=document.getElementsByClassName("nav-link")
//                                   for(let i=0;i<other.length;i++){
//                                     other[i].className="nav-link other-evry-li"
//                                   }

//                                   e.target.className="nav-link other-evry-li active"

                                
//                                 navigate("/Blog") }}>Blogs</a>
//                                 <div className='orange-parent'>
//                                  <i className="fa fa-circle orange-dot"></i>
//                                  </div>
//                         </li>
//                         <li>
//                             <span className="button-in-touch gwet-btn"><a className="nav-link getw-btn"  onClick={() => {
                              
//                               let other=document.getElementsByClassName("nav-link")
//                                   for(let i=0;i<other.length;i++){
//                                     other[i].className="nav-link other-evry-li"
//                                   }

//                               navigate("/Get_in_Touch") }} >Get In Touch</a></span>
//                         </li>
//                     </ul>
//                 </div>
//             </nav>
//         </div>
//     )

// }

import React, { useState, useRef } from 'react'
import './navbar.css'
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
  const navref = useRef()
  const [activeLink, setActiveLink] = useState('/');
  const handleClick = (event, link) => {
    event.preventDefault();
    setActiveLink(link);
    navigate(link)
  
  }
    const [clicked, setclicked] = useState(true)
    const navigate = useNavigate();
    return (
      <div className=''>
        <nav className="navbar navbar-expand-lg  navbar-dark parent" >
          {/* <!-- Brand --> */}
          <a onClick={() => { navigate("/") }} className="navbar-brand" >
            <img className='larger-main' src='assets/images/headerlogo.png' />
          </a>
          {/* <!-- Toggler/collapsibe Button --> */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" onClick={() => { setclicked(!clicked) }}>
            <div className='button-icon'>
              <img src={clicked ? "assets/images/3bars.png" : "assets/images/x-one.png"} />
            </div>
          </button>

          {/* <!-- Navbar links --> */}
          <div className="collapse navbar-collapse resposne-head classwith" id="collapsibleNavbar">
            {/* <ul className="navbar-nav" id='myDIV'>
                        <li className="nav-item navother">
                            <a className="nav-link other-evry-li active "onClick={(e) => {
                                    
                                    let other=document.getElementsByClassName("nav-link")
                                    console.log(other)
                                  for(let i=0;i<other.length;i++){
                                    other[i].className="nav-link other-evry-li"
                                  }
​
                                  e.target.className="nav-link other-evry-li active"
​
                                  navigate("/")
​
                            }}>Home</a>
                            <div className='orange-parent'>
                             <i className="fa fa-circle orange-dot"></i>
                             </div>
                        </li>
                        <li className="nav-item navother">
                            <a className="nav-link other-evry-li"onClick={(e) => {
                                  
                                  let other=document.getElementsByClassName("nav-link")
                                  for(let i=0;i<other.length;i++){
                                    other[i].className="nav-link other-evry-li"
                                  }
​
                                  e.target.className="nav-link other-evry-li active"
​
                            
                                navigate("/About-us") }}>
                                    About Us</a>
                                    <div className='orange-parent'>
                                    <i className="fa fa-circle orange-dot"></i>
                                    </div>
                                    
                        </li>
                        <li className="nav-item navother">
                            <a className="nav-link other-evry-li" onClick={(e) => { 
                                  
                                  let other=document.getElementsByClassName("nav-link")
                                  for(let i=0;i<other.length;i++){
                                    other[i].className="nav-link other-evry-li"
                                  }
​
                                  e.target.className="nav-link other-evry-li active"
​
                            
                                navigate("/Services") }}>Services</a>
                                <div className='orange-parent '>
                                 <i className="fa fa-circle orange-dot"></i>
                                 </div>
                        </li>
                        <li className="nav-item navother">
                            <a className="nav-link other-evry-li"  onClick={(e) => { 
                                  
                                  let other=document.getElementsByClassName("nav-link")
                                  for(let i=0;i<other.length;i++){
                                    other[i].className="nav-link other-evry-li"
                                  }
​
                                  e.target.className="nav-link other-evry-li active"
​
                                
                                navigate("/Portfolio") }}>Portfolio
                                   {/* <div className='reone'>
                                 <div className='red-parent'>
                                 <i  className="fa fa-circle"></i>
                                 </div>
                                 </div> */}
            {/* </a>
                                <div className='orange-parent'>
                                 <div className='orange-set-height'>
                                 <i  className="fa fa-circle orange-dot"></i>
                                 </div>
                                 </div>
                        </li>
                        <li className="nav-item navother">
                            <a className="nav-link other-evry-li"  onClick={(e) => { 
                                  
                                  let other=document.getElementsByClassName("nav-link")
                                  for(let i=0;i<other.length;i++){
                                    other[i].className="nav-link other-evry-li"
                                  }
​
                                  e.target.className="nav-link other-evry-li active"
​
                                
                                navigate("/Blog") }}>Blogs</a>
                                <div className='orange-parent'>
                                 <i className="fa fa-circle orange-dot"></i>
                                 </div>
                        </li>
                        <li>
                            <span className="button-in-touch gwet-btn"><a className="nav-link getw-btn"  onClick={() => {
                              
                              let other=document.getElementsByClassName("nav-link")
                                  for(let i=0;i<other.length;i++){
                                    other[i].className="nav-link other-evry-li"
                                  }
​
                              navigate("/Get_in_Touch") }} >Get In Touch</a></span>
                        </li>
                    </ul> */}
            <ul className="navbar-nav" id="myDIV">
              <li className="nav-item navother">
                <a
                  href="/"
                  className={`nav-link other-evry-li ${activeLink === '/' ? 'active' : ''}`}
                  onClick={(event) => handleClick(event, '/')}
                >
                  Home
                  <div className={`orange-parent ${activeLink === '/' ? 'active' : ''}`}>
                    <i className="fa fa-circle orange-dot"></i>
                  </div>
                </a>
              </li>
              <li className="nav-item navother">
                <a
                  href="/about-us"
                  className={`nav-link other-evry-li ${activeLink === '/About-us' ? 'active' : ''}`}
                  onClick={(event) => handleClick(event, '/About-us')}
                >
                  About Us
                  <div className={`orange-parent ${activeLink === '/About-us' ? 'active' : ''}`}>
                    <i className="fa fa-circle orange-dot"></i>
                  </div>
                </a>
              </li>
              <li className="nav-item navother">
                <a
                  href="/services"
                  className={`nav-link other-evry-li ${activeLink === '/Services' ? 'active' : ''}`}
                  onClick={(event) => handleClick(event, '/Services')}
                >
                  Services
                  <div className={`orange-parent ${activeLink === '/Services' ? 'active' : ''}`}>
                    <i className="fa fa-circle orange-dot"></i>
                  </div>
                </a>
              </li>
              <li className="nav-item navother">
                <a
                  href="/services"
                  className={`nav-link other-evry-li ${activeLink === '/Portfolio' ? 'active' : ''}`}
                  onClick={(event) => handleClick(event, '/Portfolio')}
                >
                  Portfolio
                  <div className={`orange-parent ${activeLink === '/Portfolio' ? 'active' : ''}`}>
                    <i className="fa fa-circle orange-dot"></i>
                  </div>
                </a>
              </li>
              <li className="nav-item navother">
                <a
                  href="/services"
                  className={`nav-link other-evry-li ${activeLink === '/Blog' ? 'active' : ''}`}
                  onClick={(event) => handleClick(event, '/Blog')}
                >
                  Blogs
                  <div className={`orange-parent ${activeLink === '/Blog' ? 'active' : ''}`}>
                    <i className="fa fa-circle orange-dot"></i>
                  </div>
                </a>
              </li>
              <li>
                            <span className="button-in-touch gwet-btn"><a className="nav-link getw-btn"  onClick={() => {
                              
                              let other=document.getElementsByClassName("nav-link")
                                  for(let i=0;i<other.length;i++){
                                    other[i].className="nav-link other-evry-li"
                                  }
                                  let anyone=document.getElementsByClassName("orange-parent")
                                  for(let i=0;i<anyone.length;i++){
                                    anyone[i].className="orange-parent"
                                  }
                              navigate("/Get_in_Touch") }} >Get In Touch</a></span>
                        </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
