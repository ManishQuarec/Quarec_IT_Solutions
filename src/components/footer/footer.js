import React from 'react'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
export default function Footer() {

	const navigate = useNavigate();

	const handleEmailSubscribe = (e) => {

		e.preventDefault()
		toast.success('Thank you For Subscribe Us', {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	}

	return (
		<div >
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
			{/* Same as */}
			<footer className="footer-section-wrapper">
				<div className="container">
					<div className="d-flex justify-content-between footer-inner-wrapper">
						<div className="inner-footer-section-wrapper widthfooter">
							<div className="footer-logo-wrapper">
								<div className="footer-logo"><img src="assets/images/footerlogo.png" /></div>
							</div>
							<div className="footer-infoemation-wrapper">
								<div className="content-footer"><p>It is a long established
									fact that a reader will be distracted by the readable content of a page when looking at</p></div>
							</div>
							<div className="follow-us-wrapper ">
								<ul className="social-icon text-alignrigth footer-icons-one">
									<li><a href="https://www.linkedin.com/company/quarec-it-solutions"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
									<li><a href="https://www.instagram.com/quarecitsolution/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
									<li><a href="https://www.facebook.com/quarecitsolutions/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
									<li><a href=''><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
								</ul>
							</div>
						</div>
						<div className="footer-service-section-wrapper widthfooter">
							<div className="service-heading"><h1>Services</h1></div>
							<div className="services-wraPPER">
								<ul className="services-menus ">
									<li><a href="" onClick={() => { navigate("/Web-design") }} >Web Design/Development</a></li>
									<li><a href="" onClick={() => { navigate("/App-development") }}>App Development</a></li>
									<li><a href="" onClick={() => { navigate("/UI-design") }}>UI/UX Design</a></li>
									<li><a href="" onClick={() => { navigate("/Hubspot") }}>HubSpot Integration</a></li>
									<li><a href="" onClick={() => { navigate("/Email-mrkt") }}>Email Marketing</a></li>
									<li><a href="" onClick={() => { navigate("/Migration") }}>Website Migration</a></li>
								</ul>
							</div>
						</div>
						<div className="footer-career-wrapper widthfooter">
							<div className="service-heading"><h1>Career</h1></div>
							<div className="inner-wrapper-career">
								<div className="d-flex reactjs-wrapper">
									<div className="react-image">
										<img src="assets/images/react.png" />
									</div>
									<div className="details-information-wrapper">
										<div className="details-information">
											<div className="react-Development"><h2>ReactJs Dev.</h2></div>
											<div className="experience"><p>1-5 Years of Exp.</p></div>
										</div>
									</div>
								</div>
								<div className="d-flex reactjs-wrapper">
									<div className="react-image">
										<img src="assets/images/react.png" />
									</div>
									<div className="details-information-wrapper">
										<div className="details-information">
											<div className="react-Development"><h2>ReactJs Dev.</h2></div>
											<div className="experience"><p>1-5 Years of Exp.</p></div>
										</div>
									</div>
								</div>
								<div className="d-flex reactjs-wrapper paddingbottom0
					">
									<div className="react-image">
										<img src="assets/images/react.png" />
									</div>
									<div className="details-information-wrapper">
										<div className="details-information">
											<div className="react-Development"><h2>ReactJs Dev.</h2></div>
											<div className="experience"><p>1-5 Years of Exp.</p></div>
										</div>
									</div>
								</div>


								<div className="viewmore-button-wrapper">
									<div className="view-more"><a onClick={() => { navigate('/Career') }} >View More...</a></div>
								</div>
							</div>
						</div>
						<div className="subscribe-wrapper-footer widthfooter">
							<div className="service-heading"><h1>Subscribe Us</h1></div>
							<div className="Subscribe-content-wrapper">
								<div className="Subscribe-content"><p>It is a long established
									fact that a reader will be distracted by the readable </p></div>
							</div>
							<div className="footer-form-wrapper">
								<form className="footer-form" onSubmit={handleEmailSubscribe}>
									<div className="email-wrapper-input">
										<input type="email" placeholder="email" required={true} autoComplete="off" className="form-control emailinput" />
									</div>
									<div className="button-footer-wrapper">
										<button type="Submit" className="footer-button">Submit</button>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div className="copyright-section-wrapper">
						<div className="copyrigth">
							<p>Copyright<i className="fa fa-copyright" aria-hidden="true"></i><span>2023 QuarecITSollutions. All Rights Reserved.</span></p>
						</div>
					</div>
				</div>
			</footer>



		</div>
	)

}
