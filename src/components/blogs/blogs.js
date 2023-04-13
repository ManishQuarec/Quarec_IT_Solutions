import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Blogs () {

	const navigate =useNavigate()
	

    return (
      <div>
        
        <section className="vitgram-wrapper-section">
	<div className="vitgram-image-wrapper">
		<div className="contact-us-content-wrapper">
		<div className="contact-us left38"><h1>blogs</h1></div>
	</div>
	</div>
	
</section>
{/* <!-- Portfolio section start --> */}
<section className="Portfolio-section-wrapper">
	<div className="container paddingleftright">
		<div className="Portfolio-title-wrapper">
			<div className="Portfolio-main-title">
				<h3>Our Blog</h3>
			</div>
				<div className="Portfolio-sub-title">
					<h1>Latest Post</h1>
				</div>
		</div>
    
			<div className="portfolio-tabs-wrapper-section">
				<div className="inner-portfolio-tabs-wrapper">
      <div className="tabs-wrapper">
        <ul className="nav nav-tabs align-items-center justify-content-between " id="nav-tab" role="tablist">
          <li className="border-radius"><a className="nav-item movetabs active " role="tab" aria-selected="true" href="#1" data-toggle="tab">
            all
          </a></li>
        <li>  <a className="nav-item movetabs" href="#2" role="tab" aria-selected="false" data-toggle="tab">
           Web Development
          </a></li>
         <li  id='border-round-3'> <a className="nav-item movetabs " href="#3" role="tab" aria-selected="false" data-toggle="tab">
            App Development
          </a></li>
		  <li> <a className="nav-item movetabs " href="#4" role="tab" aria-selected="false" data-toggle="tab">
            UI-UX Design
          </a></li>
		  <li> <a className="nav-item movetabs " href="#5" role="tab" aria-selected="false" data-toggle="tab">
            Graphic Design
          </a></li>
		  <li className="border-radius-left" id='border-round-6'> <a className="nav-item movetabs"  href="#6" role="tab" aria-selected="false" data-toggle="tab">
            Digital Marketing
          </a></li>
        </ul>
      </div>
  <div className="tab-content tabcontent-wrapper">
        <div className="tab-pane tabcontent-inner-wrapper active" id="1">
         <div className="d-flex justify-content-between fortfolio-content blog">
			
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs" onClick={()=>{navigate("/blog-inner")}}>
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
			
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
			
			
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
			
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
			
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
			
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
			
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
			
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				</div>
				
		 </div>
		
		
		
        
        <div className="tab-pane tabcontent-inner-wrapper" id="2">
		<div className="d-flex justify-content-between fortfolio-content blog">
			
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs" onClick={()=>{navigate("/blog-inner")}}>
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
			
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
			
			
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
			
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
			
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
			
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
			
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
			
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				</div>
		 
		
		
        </div>
        <div className="tab-pane tabcontent-inner-wrapper" id="3">
		<div className="d-flex justify-content-between fortfolio-content blog">
			
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs" onClick={()=>{navigate("/blog-inner")}}>
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
			
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
			
			
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
			
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
			
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
			
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
			
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
			
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				</div>
		  
		 
		 
		
        </div>
		 <div className="tab-pane tabcontent-inner-wrapper" id="4">
		 <div className="d-flex justify-content-between fortfolio-content blog">
			
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs" onClick={()=>{navigate("/blog-inner")}}>
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
			
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
			
			
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
			
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
			
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
			
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
			
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
			
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				</div>
		 
		 
		 <div className="tab-pane tabcontent-inner-wrapper" id="5">
		 <div className="d-flex justify-content-between fortfolio-content blog">
			
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs" onClick={()=>{navigate("/blog-inner")}}>
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
			
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
			
			
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
			
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
			
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
			
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
			
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
			
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				</div>
		
		 
		 
        </div>
		 <div className="tab-pane tabcontent-inner-wrapper" id="6">
		 <div className="d-flex justify-content-between fortfolio-content blog">
			
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs" onClick={()=>{navigate("/blog-inner")}}>
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
			
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
			
			
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
			
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
			
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
			
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
			
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
				
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				
			
			<a  className="redirect-next-page blog">
					<div className="blog-inner-wrapper blogtabs">
				<div className="blog-image-wrapper">
					<div className="blog-image">
						<img src="assets/images/blog1.png"/>
					</div>
				</div>
				<div className="blog-title-wrapper-inner">
					<div className="blog-title-inner"><h1>The most Popular Business Of the Year</h1></div>
				</div>
				<div className="blog d-flex justify-content-between align-items-center">
					<div className="blog-small-iamge-wtrapper">
						<div className="blog-samll-image"><img src="assets/images/blogsmall.png" alt="not found"/><span>Ranold Jeff.</span></div>
					</div>
					<div className=" blog-release-information-wrapper">
						<div className="blog-information"><p>May 4th, 2022</p></div>
					</div>
				</div>
			</div>
				</a>
				</div>
		 
		  
		 
        </div>
      </div>
 
 
				</div>
			</div>
	</div>
</div>
</section>
{/* <!-- Portfolio section end --> */}
      </div>
    )
  
}