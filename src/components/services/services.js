import React from 'react'
import "../home/home.css"
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Services() {

    const navigate =useNavigate()

    useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	}, []);

  return (
    <div>
      <section class="vitgram-wrapper-section">
        <div class="vitgram-image-wrapper">
          <div class="contact-us-content-wrapper">
            <div class="contact-us left38"><h1>Services</h1></div>
          </div>
        </div>

      </section>


      {/* <!-- SERVICES SECTION START  --> */}
      <section class="plaining-section-wrapper padding25">
      <div className="any-con-inert">
                    <div className="plainong-heading-wrapper">
                        <div className="plaining-heaing"><h3>Services </h3></div>
                        <div className="Process-heading"><h1>Our Expertice</h1></div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center gap20">
                        <div className="plain-and-Process-wrapper width33.33 courser-one-it" onClick={navigate("/Web-design")}>
                            <div className="d-flex justify-content-between">
                                <div className="black-img-wrappere">
                                    <div className="black-img"><img src="assets/images/Black-5.svg" alt="not found" /></div>
                                </div>

                            </div>
                            <div className="web-heading leftafter"><h3>Web Design / Development</h3></div>
                            <div className="Process-content"><p>It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout</p></div>
                        </div>
                        <div className="plain-and-Process-wrapper width33.33 courser-one-it" onClick={navigate("/UI-design")}>
                            <div className="d-flex justify-content-between">
                                <div className="black-img-wrappere">
                                    <div className="black-img"><img src="assets/images/Black-6.svg" alt="not found" /></div>
                                </div>

                            </div>
                            <div className="web-heading leftafter"><h3>UI/UX Design</h3></div>
                            <div className="Process-content"><p>It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout</p></div>
                        </div>
                        <div className="plain-and-Process-wrapper width33.33 courser-one-it" onClick={navigate("/Migration")}>
                            <div className="d-flex justify-content-between">
                                <div className="black-img-wrappere">
                                    <div className="black-img"><img src="assets/images/Black-7.svg" alt="not found" /></div>
                                </div>

                            </div>
                            <div className="web-heading leftafter"><h3>Website Migration</h3></div>
                            <div className="Process-content"><p>It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout</p></div>
                        </div>
                        <div className="plain-and-Process-wrapper width33.33 courser-one-it" onClick={navigate("/App-development")}>
                            <div className="d-flex justify-content-between">
                                <div className="black-img-wrappere">
                                    <div className="black-img"><img src="assets/images/Black-8.svg" alt="not found" /></div>
                                </div>

                            </div>
                            <div className="web-heading leftafter"><h3>App Development</h3></div>
                            <div className="Process-content"><p>It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout</p></div>
                        </div>
                        <div className="plain-and-Process-wrapper width33.33 courser-one-it" onClick={navigate("/Hubspot")}>
                            <div className="d-flex justify-content-between">
                                <div className="black-img-wrappere">
                                    <div className="black-img"><img src="assets/images/Black-9.svg" alt="not found" /></div>
                                </div>

                            </div>
                            <div className="web-heading leftafter"><h3>HubSpot Integration</h3></div>
                            <div className="Process-content"><p>It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout</p></div>
                        </div>
                        <div className="plain-and-Process-wrapper width33.33 courser-one-it" onClick={navigate("/Email-mrkt")}>
                            <div className="d-flex justify-content-between">
                                <div className="black-img-wrappere">
                                    <div className="black-img"><img src="assets/images/Black-10.svg" alt="not found" /></div>
                                </div>

                            </div>
                            <div className="web-heading leftafter"><h3>Email Marketing</h3></div>
                            <div className="Process-content"><p>It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout</p></div>
                        </div></div>
                </div>







      </section>
      {/* // <!-- SERVICES SECTION END --> */}
    </div>
  )

}