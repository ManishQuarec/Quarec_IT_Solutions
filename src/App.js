import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from 'react-router-dom';

import { Helmet } from "react-helmet";
import About_us from './components/about-us/about-us';
import Home from './components/home/home';
import Blogs from './components/blogs/blogs';
import Career from './components/career.js/career';
import Get_in_touch from './components/get-in-touch/get-in-touch';
import Portfolio from './components/portfolio/portfolio';
import Services from './components/services/services';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import Website from './components/additional-footer-pages/website';
import App_dev from './components/additional-footer-pages/app_dev';
import Uidesign from './components/additional-footer-pages/ui_design';
import Migration from './components/additional-footer-pages/migration';
import Hobspot from './components/additional-footer-pages/Hubspot';
import Email_mrkt from './components/additional-footer-pages/email_mrkt';
import Blog_inner from './components/additional-pages/Blog_inner';
import Portfolio_inner from './components/additional-pages/portfolio_inner';
import Image_imagination from './components/additional-pages/image_imagination';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/About-us' element={<About_us/>}></Route>
          <Route exact path='/Portfolio' element={<Portfolio/>}></Route>
          <Route exact path='/Services' element={<Services/>}></Route>
          <Route exact path='/Blog' element={<Blogs/>}></Route>
          <Route exact path='/Get_in_Touch' element={<Get_in_touch/>}></Route>
          <Route exact path='/Career' element={<Career/>}></Route>
          <Route exact path='/Web-design' element={<Website/>} ></Route>
          <Route exact path='/App-development' element={<App_dev/>}></Route>
          <Route exact path='/UI-design' element={<Uidesign/>}></Route>
          <Route exact path='/Hubspot' element={<Hobspot/>}></Route>
          <Route exact path='/Email-mrkt' element={<Email_mrkt/>}></Route>
          <Route exact path='/Migration' element={<Migration/>}></Route>
          <Route exact path='/blog-inner' element={<Blog_inner/>}></Route>
          <Route exact path='/portfolio_inner' element={<Portfolio_inner/>}></Route>
        </Routes>
        <Footer/>
      </Router> 
      
    </div>
  );
}

export default App;
