import React, { useRef, useState } from 'react'
import "./fresh.css"

export default function Fresh_navbar() {

  const navref = useRef()
  const [clicked, setclicked] = useState(false)

  const shownavbar = () => {

    navref.current.classList.toggle("responsive_nav")
    setclicked(!clicked)

  }


  .div
  return (
    <header className='header-wrapper-section'>
      <div className='container-fluid'>
        <div className='d-flex justify-content-between align-items-center header-inner-wrapper'>
          <div className='header-logo-wrapper'>
            <div className='logo-parent'>
              <a>
                <img src='assets/images/headerlogo.png' />
              </a>
            </div>
          </div>
          <div className='responsiveheader' ref={navref}>
            <ul className='ui-section'>
              <div className='li-parent'>
              <li className='vav-li active'> <a className='link-nav ' href='#' onClick={(e)=>{
                 let other=document.getElementsByClassName("link-nav")
                 for(let i=0;i<other.length;i++){
                   other[i].className="link-nav"
                 }

                 e.target.className="link-nav active"
              }} >Home</a></li>
              </div>
              <div  className='li-parent'>
              <li className='vav-li'> <a className='link-nav' href='#' onClick={(e)=>{
                 let other=document.getElementsByClassName("link-nav")
                 for(let i=0;i<other.length;i++){
                   other[i].className="link-nav"
                 }

                 e.target.className="link-nav active"
              }}>About Us</a></li>
              </div>
              <div  className='li-parent'>
              <li className='vav-li'> <a className='link-nav' href='#' onClick={(e)=>{
                 let other=document.getElementsByClassName("link-nav")
                 for(let i=0;i<other.length;i++){
                   other[i].className="link-nav"
                 }

                 e.target.className="link-nav active"
              }}>Career</a></li>
              </div>
              <div  className='li-parent'> 
              <li className='vav-li'> <a className='link-nav' href='#'onClick={(e)=>{
                 let other=document.getElementsByClassName("link-nav")
                 for(let i=0;i<other.length;i++){
                   other[i].className="link-nav"
                 }

                 e.target.className="link-nav active"
              }}>Portfolio</a></li>
              </div>
              <div  className='li-parent'>
              <li className='vav-li'> <a className='link-nav' href='#'onClick={(e)=>{
                 let other=document.getElementsByClassName("link-nav")
                 for(let i=0;i<other.length;i++){
                   other[i].className="link-nav"
                 }

                 e.target.className="link-nav active"
              }}>Blog</a></li>
              </div>
              <li>
                <span className="button-in-touch gwet-btn"><a className="nav-link getw-btn" href="#"  >Get In Touch</a></span>
                {/* onClick={() => { navigate("/Get_in_Touch") }} */}
              </li>
            </ul>
            {/* <button className='nav-btn nav-close-btn' onClick={shownavbar} >
                <img src="assets/images/x-one.png"/>
                </button> */}

          </div>


        </div>
        <button className='nav-btn nav-close-btn' onClick={shownavbar}>
          <img src={clicked ? 'assets/images/x-one.png' : "assets/images/3bars.png"} />
        </button>
      </div>
    </header>
  )

}
