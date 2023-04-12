import React from 'react'
import { useState } from 'react'

export default function Get_in_touch() {


	
	const [email, setemail] = useState("")
	const [phone, setphone] = useState("")
	const [message, setmessage] = useState("")

	
	const handleemail = (e) => { setemail(e.target.value) }
	const handlephone = (e) => {
		
		const value=e.target.value

		if(value.length <=10){
			setphone(value)
		}
	}
	const handlemessage = (e) => { setmessage(e.target.value) }

	const handlesubmitdata = (e) => {
		e.preventDefault()
		if (phone.length < 10 || phone.length > 10) {
			alert("please Enter 10 digit Phone Number")
		}
		else {
			console.log(txt, email, phone, message)
		}
	}

	const [txt, setTxt] = useState('');
 
      const onInputChange = e => {
        const { value } = e.target;
        console.log('Input value: ', value);
     
        const re = /^[A-Za-z- ]+$/;
        if (value === "" || re.test(value)) {
          setTxt(value);
        }
      }

	return (
		<div>

			<section className="vitgram-wrapper-section">
				<div className="vitgram-image-wrapper">
					<div className="contact-us-content-wrapper">
						<div className="contact-us left38"><h1>contact us</h1></div>
					</div>
				</div>

			</section>


			{/* <!-- Get In Touch section start --> */}
			<section className="conatct-us-section-wrapper background-transparent">
				<div className="container paddingleftright">
					<div className="conact-contnet-wrappere">
						<div className="gat-in-touch"><h3>Get In Touch</h3></div>
						<div className="content-for-help color#1568A2"><h1>Hey! Let’s Talk</h1></div>
					</div>
					<div className="d-flex justify-content-between gapcontact gap48">
						<div className="contact-form-inner-wrapper background-white ">
							<div className="inner-wrapper-content traparent">
								<form action="#" method="post" className="contact-form" onSubmit={(e) => { handlesubmitdata(e) }}>
									<div className="input-field">
										<input type="text" autoComplete="off" placeholder="name" required={true} className="form-control fleidclass border-color" value={txt} onChange={onInputChange} />
									</div>
									<div className="input-field">
										<input type="email" autoComplete="off" placeholder="email" required={true} className="form-control fleidclass border-color" onChange={handleemail} />
									</div>
									<div className="input-field">
										<input type="number" autoComplete="off"  placeholder="phone" required={true} className="form-control fleidclass border-color"  value={phone} onChange={handlephone} />
									</div>
									<div className="input-field">
										<textarea className="form-control border-color fleidclass" rows="5" id="comment" name="text" placeholder="message" onChange={handlemessage}></textarea>
									</div>
									<div className="sumbit-button-wrapper">
										<div className="button-submit"><button type="Submit">submit</button></div>
									</div>
								</form>
							</div>
						</div>
						<div className="help-for-information-wrapper background-white bordernone">
							<div className="inner-wrapper-information">
								<div className="d-flex align-items-center content-wrapper">
									<div className="call-image-wrapper">
										<div className="call-image"><img src="assets/images/ring.png" />
										</div>
									</div>
									<div className="call-inormation">
										<div className="call-anytime"><h2>Call Anytime</h2></div>
										<div className="information"><p><a href="tel:+ 9123678 27867">+ 91 23678 27867</a></p>
											<p><a href="tel:+ 9167678 92878">+ 91 67678 92878</a></p></div>
									</div>
								</div>
								<div className="d-flex align-items-center content-wrapper">
									<div className="call-image-wrapper">
										<div className="call-image"><img src="assets/images/mail.png" /></div>
									</div>
									<div className="call-inormation">
										<div className="call-anytime"><h2>Send Email</h2></div>
										<div className="information"><p><a href="mailto:connect@quarecit.com">connect@quarecit.com</a></p>
											<p><a href="mailto:hello@quarecit.com">hello@quarecit.com</a></p></div>
									</div>
								</div>
								<div className="d-flex align-items-center content-wrapper">
									<div className="call-image-wrapper">

										<div className="call-image"><img src="assets/images/GoogleMap.png" /></div>
									</div>
									<div className="call-inormation">
										<div className="call-anytime"><h2>Visit Us</h2></div>
										<div className="information"><p>821, Sakar-9 , Near City gold Cinema , Ashram Road ,Ahmedabad 380001</p>
										</div>
									</div>
								</div>
								<div className="follow-us-wrapper">
									<div className="folow-us"><h2>Follow us</h2></div>
									<ul className="social-icon">
										<li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
										<li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
										<li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
										<li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- Get In Touch section end --> */}

		</div>
	)

}