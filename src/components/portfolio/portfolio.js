import React, { useEffect } from 'react'
import { useNavigate, } from 'react-router-dom'

export default function Portfolio () {

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	}, []);

	const navigate =useNavigate()
	
	
    return (
      <div>
        <section className="vitgram-wrapper-section">
	<div className="vitgram-image-wrapper">
		<div className="contact-us-content-wrapper">
		<div className="contact-us left38"><h1>Portfolio</h1></div>
	</div>
	</div>
	
</section>
{/* <!-- Portfolio section start --> */}
<section className="Portfolio-section-wrapper">
	<div className="cont-portfol paddingleftright">
		<div className="Portfolio-title-wrapper">
			<div className="Portfolio-main-title">
				<h3>Portfolio</h3>
			</div>
				<div className="Portfolio-sub-title">
					<h1>Our Work</h1>
				</div>
		</div>
			<div className="portfolio-tabs-wrapper-section">
				<div className="inner-portfolio-tabs-wrapper">
      <div className="tabs-wrapper">
        <ul className="nav nav-tabs align-items-center  " id="nav-tab" role="tablist">
          <li className="border-radius all-different"><a className="nav-item movetabs active " role="tab" aria-selected="true" href="#1" data-toggle="tab">
            all
          </a></li>
        <li className='all-one-sib'>  <a className="nav-item movetabs" href="#2" role="tab" aria-selected="false" data-toggle="tab">
           Web Development
          </a></li>
         <li className='all-two-sib'> <a className="nav-item movetabs " href="#3" role="tab" aria-selected="false" data-toggle="tab">
            App Development
          </a></li>
		  <li className='all-one-round'> <a className="nav-item movetabs " href="#4" role="tab" aria-selected="false" data-toggle="tab">
            UI-UX Design
          </a></li>
		  <li> <a className="nav-item movetabs " href="#5" role="tab" aria-selected="false" data-toggle="tab">
            Graphic Design
          </a></li>
		  <li className="border-radius-left"> <a className="nav-item movetabs" href="#6" role="tab" aria-selected="false" data-toggle="tab">
            Digital Marketing
          </a></li>
        </ul>
      </div>
  <div className="tab-content tabcontent-wrapper">
        <div className="tab-pane tabcontent-inner-wrapper active" id="1">
         <div className="d-flex justify-content-between fortfolio-content" onClick={()=>{navigate("/portfolio_inner")}}>
			<div className="inner-fortfolio-content">
				<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/fortfolio.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>Secret 17 - Hair & Nail Studio</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
						</div>
					</div>
				</a>
			</div>
			<div className="inner-fortfolio-content">
			<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/fortfolio1.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>The Walt Disney Company</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
						</div>
					</div>
				</a>
				</div>
		 </div>
		 <div className="d-flex justify-content-between fortfolio-content">
			<div className="inner-fortfolio-content">
				<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/fortfolio2.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>Bank of America</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
						</div>
					</div>
				</a>
			</div>
			<div className="inner-fortfolio-content">
			<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/fortfolio3.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>Starbucks</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
						</div>
					</div>
				</a>
				</div>
		 </div>
		 <div className="d-flex justify-content-between fortfolio-content">
			<div className="inner-fortfolio-content">
				<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/fortfolio4.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>Sony</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
						</div>
					</div>
				</a>
			</div>
			<div className="inner-fortfolio-content">
			<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/fortfolio5.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>Apple</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
						</div>
					</div>
				</a>
				</div>
		 </div>
		 <div className="d-flex justify-content-between fortfolio-content">
			<div className="inner-fortfolio-content">
				<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/fortfolio6.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>The Walt Disney Company</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
						</div>
					</div>
				</a>
			</div>
			<div className="inner-fortfolio-content">
			<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/fortfolio7.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>IBM</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
						</div>
					</div>
				</a>
				</div>
		 </div>
        </div>
        <div className="tab-pane tabcontent-inner-wrapper" id="2">
          <div className="d-flex justify-content-between fortfolio-content">
			<div className="inner-fortfolio-content">
				<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/porfolioweb1.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>Barone LLC.</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
						</div>
					</div>
				</a>
			</div>
			<div className="inner-fortfolio-content">
			<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/portfolioweb2.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>Binford Ltd.</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
						</div>
					</div>
				</a>
				</div>
		 </div>
		 <div className="d-flex justify-content-between fortfolio-content">
			<div className="inner-fortfolio-content">
				<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/portfolioweb3.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>Barone LLC.</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
						</div>
					</div>
				</a>
			</div>
			<div className="inner-fortfolio-content">
			<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/portfolio4.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>Acme Co.</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
						</div>
					</div>
				</a>
				</div>
		 </div>
		 <div className="d-flex justify-content-between fortfolio-content">
			<div className="inner-fortfolio-content">
				<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/fortfolioweb5.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>Biffco Enterprises Ltd.</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
						</div>
					</div>
				</a>
			</div>
			<div className="inner-fortfolio-content">
			<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/portfolioweb6.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>Acme Co.</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
						</div>
					</div>
				</a>
				</div>
		 </div>
		 <div className="d-flex justify-content-between fortfolio-content">
			<div className="inner-fortfolio-content">
				<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/fortfolioweb7.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>Biffco Enterprises Ltd.</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
						</div>
					</div>
				</a>
			</div>
			<div className="inner-fortfolio-content">
			<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/portfoliowewb8.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>Acme Co.</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
						</div>
					</div>
				</a>
				</div>
		 </div>
        </div>
        <div className="tab-pane tabcontent-inner-wrapper" id="3">
          <div className="d-flex justify-content-between fortfolio-content">
			<div className="inner-fortfolio-content">
				<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/portfolioappdev1.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>Johnson & Johnson</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
						</div>
					</div>
				</a>
			</div>
			<div className="inner-fortfolio-content">
			<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/portfolioappdev2.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>Starbucks</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
						</div>
					</div>
				</a>
				</div>
		 </div>
		  <div className="d-flex justify-content-between fortfolio-content">
			<div className="inner-fortfolio-content">
				<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/portfolioappdev3.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>General Electric</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
						</div>
					</div>
				</a>
			</div>
			<div className="inner-fortfolio-content">
			<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/portfolioappdev4.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>The Walt Disney Company</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
						</div>
					</div>
				</a>
				</div>
		 </div>
		  <div className="d-flex justify-content-between fortfolio-content">
			<div className="inner-fortfolio-content">
				<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/portfolioappdev5.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>Pizza Hut</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
						</div>
					</div>
				</a>
			</div>
			<div className="inner-fortfolio-content">
			<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/portfolioappdev6.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>McDonald's</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
						</div>
					</div>
				</a>
				</div>
		 </div>
		  <div className="d-flex justify-content-between fortfolio-content">
			<div className="inner-fortfolio-content">
				<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/portfolioappdev7.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>Louis Vuitton</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
						</div>
					</div>
				</a>
			</div>
			<div className="inner-fortfolio-content">
			<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/portfolioappdev8.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>The Walt Disney Company</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
						</div>
					</div>
				</a>
				</div>
		 </div>
		 
		
        </div>
		 <div className="tab-pane tabcontent-inner-wrapper" id="4">
           <div className="d-flex justify-content-between fortfolio-content">
			<div className="inner-fortfolio-content">
				<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/portfolioappdev7.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>Louis Vuitton</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
						</div>
					</div>
				</a>
			</div>
			<div className="inner-fortfolio-content">
			<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/portfolioappdev8.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>The Walt Disney Company</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
						</div>
					</div>
				</a>
				</div>
		 </div> <div className="d-flex justify-content-between fortfolio-content">
			<div className="inner-fortfolio-content">
				<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/portfolioappdev7.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>Louis Vuitton</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
						</div>
					</div>
				</a>
			</div>
			<div className="inner-fortfolio-content">
			<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/portfolioappdev8.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>The Walt Disney Company</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
						</div>
					</div>
				</a>
				</div>
		 </div>
		  <div className="d-flex justify-content-between fortfolio-content">
			<div className="inner-fortfolio-content">
				<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/portfolioappdev7.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>Louis Vuitton</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
						</div>
					</div>
				</a>
			</div>
			<div className="inner-fortfolio-content">
			<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/portfolioappdev8.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>The Walt Disney Company</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
						</div>
					</div>
				</a>
				</div>
		 </div>
		  <div className="d-flex justify-content-between fortfolio-content">
			<div className="inner-fortfolio-content">
				<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/portfolioappdev7.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>Louis Vuitton</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
						</div>
					</div>
				</a>
			</div>
			<div className="inner-fortfolio-content">
			<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/portfolioappdev8.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>The Walt Disney Company</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
						</div>
					</div>
				</a>
				</div>
		 </div>
		 
        </div>
		 <div className="tab-pane tabcontent-inner-wrapper" id="5">
          <div className="d-flex justify-content-between fortfolio-content">
			<div className="inner-fortfolio-content">
				<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/portfolioappdev7.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>Louis Vuitton</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
						</div>
					</div>
				</a>
			</div>
			<div className="inner-fortfolio-content">
			<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/portfolioappdev8.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>The Walt Disney Company</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
						</div>
					</div>
				</a>
				</div>
		 </div>
		  <div className="d-flex justify-content-between fortfolio-content">
			<div className="inner-fortfolio-content">
				<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/portfolioappdev7.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>Louis Vuitton</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
						</div>
					</div>
				</a>
			</div>
			<div className="inner-fortfolio-content">
			<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/portfolioappdev8.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>The Walt Disney Company</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
						</div>
					</div>
				</a>
				</div>
		 </div>
		  <div className="d-flex justify-content-between fortfolio-content">
			<div className="inner-fortfolio-content">
				<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/portfolioappdev7.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>Louis Vuitton</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
						</div>
					</div>
				</a>
			</div>
			<div className="inner-fortfolio-content">
			<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/portfolioappdev8.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>The Walt Disney Company</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
						</div>
					</div>
				</a>
				</div>
		 </div>
		  <div className="d-flex justify-content-between fortfolio-content">
			<div className="inner-fortfolio-content">
				<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/portfolioappdev7.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>Louis Vuitton</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
						</div>
					</div>
				</a>
			</div>
			<div className="inner-fortfolio-content">
			<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/portfolioappdev8.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>The Walt Disney Company</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
						</div>
					</div>
				</a>
				</div>
		 </div>
        </div>
		 <div className="tab-pane tabcontent-inner-wrapper" id="6">
          <div className="d-flex justify-content-between fortfolio-content">
			<div className="inner-fortfolio-content">
				<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/portfolioappdev7.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>Louis Vuitton</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
						</div>
					</div>
				</a>
			</div>
			<div className="inner-fortfolio-content">
			<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/portfolioappdev8.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>The Walt Disney Company</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
						</div>
					</div>
				</a>
				</div>
		 </div>
		  <div className="d-flex justify-content-between fortfolio-content">
			<div className="inner-fortfolio-content">
				<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/portfolioappdev7.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>Louis Vuitton</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
						</div>
					</div>
				</a>
			</div>
			<div className="inner-fortfolio-content">
			<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/portfolioappdev8.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>The Walt Disney Company</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
						</div>
					</div>
				</a>
				</div>
		 </div>
		  <div className="d-flex justify-content-between fortfolio-content">
			<div className="inner-fortfolio-content">
				<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/portfolioappdev7.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>Louis Vuitton</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
						</div>
					</div>
				</a>
			</div>
			<div className="inner-fortfolio-content">
			<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/portfolioappdev8.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>The Walt Disney Company</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
						</div>
					</div>
				</a>
				</div>
		 </div>
		  <div className="d-flex justify-content-between fortfolio-content">
			<div className="inner-fortfolio-content">
				<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/portfolioappdev7.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>Louis Vuitton</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
						</div>
					</div>
				</a>
			</div>
			<div className="inner-fortfolio-content">
			<a  className="redirect-next-page">
					<div className="fortfolio-image-wrapper">
						<div className="fortfolio-image">
							<img src="assets/images/portfolioappdev8.png"/>
						</div>
					</div>
					<div className="fortfolio-content-wrapper">
						<div className="fortfolio-title">
							<h1>The Walt Disney Company</h1>
						</div>
						<div className="fortfolio-discription">
							<p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi....<span>Read More</span></p>
						</div>
						<div className="diffrent-position">
							<p>Figma , Html , Css , React.JS , MongoDB</p>
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