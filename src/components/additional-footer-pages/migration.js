import React from 'react'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Migration() {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    const [email, setemail] = useState("")
    const [phone, setphone] = useState("")
    const [file, setfile] = useState()
    const [message, setmessage] = useState("")
    const [txt, setTxt] = useState('');
    const [option, setoption] = useState("")

    const handleemail = (e) => { setemail(e.target.value) }
    const handlephone = (e) => {

        const value = e.target.value

        if (value.length <= 10) {
            setphone(value)
        }


    }
    const handlemessage = (e) => { setmessage(e.target.value) }



    const onInputChange = e => {
        const { value } = e.target;
        console.log('Input value: ', value);

        const re = /^[A-Za-z- ]+$/;
        if (value === "" || re.test(value)) {
            setTxt(value);
        }
    }

    let handleSubmit = (e) => {

        e.preventDefault()

        if (option === "" || option === "Select option") {
            alert("please Select required Option")
        }

        else {
            toast.success('Information Saved Successfully', {
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
    }


    return (
        <div>
            <ToastContainer position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />
            <section className="vitgram-wrapper-section">
                <div className="vitgram-image-wrapper">
                    <div className="contact-us-content-wrapper">
                        <div className="contact-us left38"><h1>Website Migration</h1></div>
                    </div>
                </div>

            </section>

            <section className=" digital-journey-wrapper-section">
                <div className="contuiiiner">
                    <div className="digital-journey-content-wrapper">
                        <div className="digital-journey-heading"><h1>Your Foray Into The World Of Mobile Apps Begins Here</h1></div>
                    </div>
                    <div className="digital-content-wrapper">
                        <div className="digital-content"><p>Quarec was born at the forefront of the mobile revolution. We are experts in app development, from the White House to the USO, and we’ve only gotten better. We have over 10 years of experience designing, delivering, and supporting world-class mobile applications using our award-winning Agile engineering principles, enabling us to ship over 50 apps each year to the Apple and Google stores.</p></div>
                    </div>
                    </div>
                     <div className='small-counnttiner'>
                    <div className="d-flex justify-content-between gap20">
                        <div className="plain-and-Process-wrapper width33.33">
                            <div className="d-flex justify-content-between">
                                <div className="black-img-wrappere">
                                    <div className="black-img backgroundnone"><img src="assets/images/web1.png" alt="not found" /></div>
                                </div>

                            </div>
                            <div className="web-heading leftafter"><h3>If you have idea for MVP</h3></div>
                            <div className="Process-content"><p>Come to us with your next big idea or MVP, and we will help you build it ground up.</p></div>
                        </div>
                        <div className="plain-and-Process-wrapper width33.33">
                            <div className="d-flex justify-content-between">
                                <div className="black-img-wrappere">
                                    <div className="black-img backgroundnone"><img src="assets/images/web.png" alt="not found" /></div>
                                </div>

                            </div>
                            <div className="web-heading leftafter"><h3>If you have Wireframes</h3></div>
                            <div className="Process-content"><p>Have a wireframe, bring it to us. Depending on the scope and requirements, we will develop a full-scale responsive UI-UX. From an in-depth analysis, prototyping, to test proof hosting, we will do it all.</p></div>
                        </div>
                        <div className="plain-and-Process-wrapper width33.33">
                            <div className="d-flex justify-content-between">
                                <div className="black-img-wrappere">
                                    <div className="black-img backgroundnone"><img src="assets/images/web2.png" alt="not found" /></div>
                                </div>

                            </div>
                            <div className="web-heading leftafter"><h3>If You Already Have an Existing App</h3></div>
                            <div className="Process-content"><p>Come to us with your next big idea or MVP, and we will help you build it ground up.</p></div>
                        </div>


                    </div>
                </div>
            </section>
            <section className="bulid-customer-wrapper-section">
                <div className="vgg">
                    <div className="bulid-customer-inner-wrapper your-wany">
                        <div className="bulid-customer-heading-wrapper">
                            <div className="bulid-customer-heading"><h1>Our Mobile App Development Domain Expertise</h1></div>
                        </div>
                        <div className="bulid-customer-contnet-werapper">
                            <div className="bulid-customer-content"><p>We have worked extensively with React, and our skills have helped us develop several vibrant web applications. To us, our clients come first, but their appreciation of their end-user’s experience becomes our goal.</p></div>
                        </div>
                    </div>
                    <div className="web-development-position-wrapper your-ploint">
                        <div className="d-flex justify-content-between inner-wrapper-position-gap">
                            <div className="web-development-inner-wrapper">
                                <div className="inner-wrapper-position-wrapper">
                                    <div className="react-logo-wrapper">
                                        <div className="react-logo">
                                            <img src="assets/images/react-logo.png" />
                                        </div>
                                    </div>
                                    <div className="position-title-requriment-wrapper">
                                        <div className="position-title-wrapper">
                                            <div className="position-title"><h1>Cross-Platform Hybrid Mobile</h1></div>
                                        </div>
                                        <div className="requriment-wrapper">
                                            <div className="reuriment"><p>We are specialists at building SPAs, multiple architectures, and real-time data exchange applications. Leverage our expertise</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="web-development-inner-wrapper">
                                <div className="inner-wrapper-position-wrapper">
                                    <div className="react-logo-wrapper">
                                        <div className="react-logo">
                                            <img src="assets/images/react-logo.png" />
                                        </div>
                                    </div>
                                    <div className="position-title-requriment-wrapper">
                                        <div className="position-title-wrapper">
                                            <div className="position-title"><h1>iOS Development</h1></div>
                                        </div>
                                        <div className="requriment-wrapper">
                                            <div className="reuriment"><p>Our React developers are real experts when it comes to developing cross-platform native applications. Your satisfaction is guaranteed.</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="web-development-inner-wrapper">
                                <div className="inner-wrapper-position-wrapper">
                                    <div className="react-logo-wrapper">
                                        <div className="react-logo">
                                            <img src="assets/images/react-logo.png" />
                                        </div>
                                    </div>
                                    <div className="position-title-requriment-wrapper">
                                        <div className="position-title-wrapper">
                                            <div className="position-title"><h1>Android Development</h1></div>
                                        </div>
                                        <div className="requriment-wrapper">
                                            <div className="reuriment"><p>A dedicated team specializing in React plugins will develop a new one or integrate an existing module to your current setup.</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="web-development-inner-wrapper">
                                <div className="inner-wrapper-position-wrapper">
                                    <div className="react-logo-wrapper">
                                        <div className="react-logo">
                                            <img src="assets/images/react-logo.png" />
                                        </div>
                                    </div>
                                    <div className="position-title-requriment-wrapper">
                                        <div className="position-title-wrapper">
                                            <div className="position-title"><h1>QA & Testing</h1></div>
                                        </div>
                                        <div className="requriment-wrapper">
                                            <div className="reuriment"><p>UI and UX—two things sacrosanct at JNext. Using React, we build captivating and engaging applications that put end-users first.</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="web-development-inner-wrapper">
                                <div className="inner-wrapper-position-wrapper">
                                    <div className="react-logo-wrapper">
                                        <div className="react-logo">
                                            <img src="assets/images/react-logo.png" />
                                        </div>
                                    </div>
                                    <div className="position-title-requriment-wrapper">
                                        <div className="position-title-wrapper">
                                            <div className="position-title"><h1>Mobile Backend Engineering</h1></div>
                                        </div>
                                        <div className="requriment-wrapper">
                                            <div className="reuriment"><p>If you want React integrated with your existing web app and system, just reach out to our team of skilled React developers.</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="web-development-inner-wrapper">
                                <div className="inner-wrapper-position-wrapper">
                                    <div className="react-logo-wrapper">
                                        <div className="react-logo">
                                            <img src="assets/images/react-logo.png" />
                                        </div>
                                    </div>
                                    <div className="position-title-requriment-wrapper">
                                        <div className="position-title-wrapper">
                                            <div className="position-title"><h1>Scalability & Interoperability</h1></div>
                                        </div>
                                        <div className="requriment-wrapper">
                                            <div className="reuriment"><p>Development that is tailored to your needs—it is error-free, result-oriented, and extremely quick.</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="web-development-inner-wrapper">
                                <div className="inner-wrapper-position-wrapper">
                                    <div className="react-logo-wrapper">
                                        <div className="react-logo">
                                            <img src="assets/images/react-logo.png" />
                                        </div>
                                    </div>
                                    <div className="position-title-requriment-wrapper">
                                        <div className="position-title-wrapper">
                                            <div className="position-title"><h1>Game Development</h1></div>
                                        </div>
                                        <div className="requriment-wrapper">
                                            <div className="reuriment"><p>Make use of our expertise in migrating or upgrading your existing web apps to React without losing your data.</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="web-development-inner-wrapper">
                                <div className="inner-wrapper-position-wrapper">
                                    <div className="react-logo-wrapper">
                                        <div className="react-logo">
                                            <img src="assets/images/react-logo.png" />
                                        </div>
                                    </div>
                                    <div className="position-title-requriment-wrapper">
                                        <div className="position-title-wrapper">
                                            <div className="position-title"><h1>Industrial Apps </h1></div>
                                        </div>
                                        <div className="requriment-wrapper">
                                            <div className="reuriment"><p>We are just a call away. 24/7 support and maintenance at your fingertips.</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>



            <section className="react-development-stack-section-wrapper">
                <div className="your-wany">
                    <div className="react-developer-title-wrapper">
                        <div className="inner-title">
                            <h1>UX/UI Design Stack</h1>
                        </div>
                    </div>
                    <div className="">
                        <div className="col-xs-12">
                            <div className="tab-react-Development">
                                <ul className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                    <li className='other-type-li'> <a className="nav-item nav-link active react-tabs" role="tab" aria-selected="true" href="#1" data-toggle="tab">
                                        Libraries<span className='padding-lft'><i className="fa fa-caret-right" aria-hidden="true"></i></span>
                                    </a></li>
                                    <li className='other-type-li'><a className="nav-item nav-link react-tabs " href="#2" role="tab" aria-selected="false" data-toggle="tab">
                                        APIs<span className='padding-lft'><i className="fa fa-caret-right" aria-hidden="true"></i></span>
                                    </a></li>
                                    <li className='other-type-li'><a className="nav-item nav-link react-tabs" href="#3" role="tab" aria-selected="false" data-toggle="tab">
                                        Platforms<span className='padding-lft'><i className="fa fa-caret-right" aria-hidden="true"></i></span>
                                    </a></li>
                                    <li className='other-type-li'><a className="nav-item nav-link react-tabs" href="#4" role="tab" aria-selected="false" data-toggle="tab">
                                        UI Framework<span className='padding-lft'><i className="fa fa-caret-right" aria-hidden="true"></i></span>
                                    </a></li>
                                    <li className='other-type-li'><a className="nav-item nav-link react-tabs" href="#5" role="tab" aria-selected="false" data-toggle="tab">
                                        Database<span className='padding-lft'><i className="fa fa-caret-right" aria-hidden="true"></i></span>
                                    </a></li>
                                    <li className='other-type-li'><a className="nav-item nav-link react-tabs" href="#6" role="tab" aria-selected="false" data-toggle="tab">
                                        Tools<span className='padding-lft'><i className="fa fa-caret-right" aria-hidden="true"></i></span>
                                    </a></li>
                                    <li className='other-type-li'><a className="nav-item nav-link react-tabs" href="#7" role="tab" aria-selected="false" data-toggle="tab">
                                        Other<span className='padding-lft'><i className="fa fa-caret-right" aria-hidden="true"></i></span>
                                    </a></li>
                                </ul>
                            </div>
                            <div className="tab-content react-Development">
                                <div className="tab-pane active" id="1">
                                    <ul className="list-of-react-development">
                                        <li>React</li>
                                        <li>Socket IO</li>
                                        <li>Canvac</li>
                                        <li>GraphQL</li>
                                        <li>Firebase</li>
                                    </ul>
                                </div>
                                <div className="tab-pane" id="2">
                                    <ul className="list-of-react-development">
                                        <li>React</li>
                                        <li>Socket IO</li>
                                        <li>Canvac</li>
                                        <li>GraphQL</li>
                                        <li>Firebase</li>
                                        <li>React</li>
                                        <li>Socket IO</li>
                                        <li>Canvac</li>
                                        <li>GraphQL</li>
                                        <li>Firebase</li>
                                    </ul>
                                </div>
                                <div className="tab-pane" id="3">
                                    <ul className="list-of-react-development">
                                        <li>React</li>

                                        <li>GraphQL</li>
                                        <li>Firebase</li>
                                    </ul>
                                </div>
                                <div className="tab-pane" id="4">
                                    <ul className="list-of-react-development">
                                        <li>React</li>
                                        <li>Socket IO</li>
                                        <li>Canvac</li>
                                        <li>GraphQL</li>
                                        <li>Firebase</li>
                                    </ul>
                                </div>
                                <div className="tab-pane" id="5">
                                    <ul className="list-of-react-development">
                                        <li>React</li>
                                        <li>Socket IO</li>
                                        <li>Canvac</li>

                                    </ul>
                                </div>
                                <div className="tab-pane" id="6">
                                    <ul className="list-of-react-development">
                                        <li>React</li>
                                        <li>Socket IO</li>
                                        <li>Canvac</li>

                                    </ul>
                                </div>
                                <div className="tab-pane" id="7">
                                    <ul className="list-of-react-development">
                                        <li>React</li>
                                        <li>Socket IO</li>
                                        <li>Canvac</li>
                                        <li>GraphQL</li>
                                        <li>Firebase</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="customer-centric-wrapper-section">
                <div className="your-wany">
                    <div className="customer-centric-inner-wrapper">
                        <div className="customer-centric-titile">
                            <h1>A Customer-Centric React Development Firm</h1>
                        </div>
                        <div className="customer-centric-details">
                            <p>Our expertise in React is unparalleled. Having worked with hundreds of clients from around the world, we now understand this back-end technology like the back of our hands. We would love for you to work with us. Talk to us about your pet project or hire a developer from us. We guarantee end-to-end support be it auditing, consulting, migrating, or developing your latest application.</p>
                        </div>
                    </div>
                    <div className="hire-redux-developer-wrapper">
                        <div className="d-flex justify-content-between hire-redux-gap">
                            <div className="hire-redux-dreveloper-wrapper width50">
                                <div className="hire-redux-titile-wrapper">
                                    <div className="hire-redux-title">
                                        <h1>Need a high-performance mobile app?</h1>
                                    </div>
                                    <div className="hire-redux-discription-wrapper">
                                        <div className="hire-redux-discription padding10">
                                            <p>At our mobile app development company, we specialize in creating custom mobile applications for businesses across industries. Our team of experienced developers, designers, and project managers work together to bring your vision to life. From concept to launch, we’ll guide you through every step of the process.</p>
                                            <p>Our approach to mobile app development is focused on delivering the highest quality product to our clients. We take a user-centric approach, starting with in-depth research and analysis to understand your target audience and their needs. From there, we create a comprehensive app development plan, including wireframes, design mockups, and functional prototypes. We also conduct extensive testing throughout the development process to ensure that the app is fully functional and bug-free..</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dire-redux-iamge-wrapper width50">
                                <div className="hire-redux-image">
                                    <img src="assets/images/app-development1.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="customer-centric-wrapper-section-padding">
                <div className="your-wany">

                    <div className="hire-redux-developer-wrapper">
                        <div className="d-flex justify-content-between hire-redux-gap">
                            <div className="dire-redux-iamge-wrapper width50">
                                <div className="hire-redux-image">
                                    <img src="assets/images/app-development2.png" />
                                </div>
                            </div>
                            <div className="dire-redux-iamge-wrapper width50">
                                <div className="hire-redux-dreveloper-wrapper-bothpading">
                                    <div className="hire-redux-titile-wrapper-innerpadding">
                                        <div className="hire-redux-title">
                                            <h1>App Development Process</h1>
                                        </div>
                                        <div className="hire-redux-discription-wrapper">
                                            <div className="hire-redux-discription padding10">
                                                <p>Whether you’re looking to create a new app from scratch or improve an existing one, our team is here to help. Contact us today to learn more about our mobile app development services and how we can help your business succeed in the mobile world.</p>
                                                <p>We use the latest technologies and development frameworks to ensure that your app is fast, reliable, and scalable. Our team is experienced in building apps for both iOS and Android, and we can help you decide which platform is best suited for your business. We also offer ongoing support and maintenance services to ensure that your app stays up-to-date and continues to provide value to your customers..</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- schedule interview section start --> */}
            <section className="schedule-interview-section-wrapper">
                <div className="your-wany">
                    <div className="schedule-interview-title-wrapper">
                        <div className="interview-titile-wrapper">
                            <h1>Schedule A Developer Interview And Get 15 Days Risk-Free Trial</h1>
                        </div>
                        <div className="interview-schedule-discription">
                            <p>We ensure you’re matched with the right talent based on your requirement.</p>
                        </div>
                    </div>
                    <div className="schedule-interview-from-wrapper">
                        <form  className="fillform-for-interview" onSubmit={(e) =>handleSubmit(e)}>
                            <div className="input-field-wrapper d-flex justify-content-between">
                                <div className="name-wrapper-input">
                                    <input type="text" autoComplete="off" placeholder="name" required={true} className="form-control input-informaion" value={txt} onChange={onInputChange}  />
                                </div>
                                <div className="name-wrapper-input">
                                    <input type="email" autoComplete="off" placeholder="email" required={true} className="form-control input-informaion" onChange={handleemail} />
                                </div>
                            </div>
                            <div className="input-field-wrapper d-flex justify-content-between">
                                <div className="name-wrapper-input">
                                    <input type="number" autoComplete="off"  placeholder="phone" required={true} className="form-control input-informaion"  value={phone} onChange={handlephone}/>
                                </div>
                                <div className="name-wrapper-input">
                                    <select className="select-option required" required={true} autoComplete='off'  onChange={(e)=>{setoption(e.target.value)}}>
                                        <option value="Select option">Select option</option>
                                        <option value="web development">web development</option>
                                        <option value="web development">web development</option>
                                        <option value="web development">web development</option>
                                        <option value="web development">web development</option>
                                    </select>
                                </div>
                            </div>
                            <div className="discribe-massege">
                                <textarea id="massege" name="massege" rows="5" cols="60" placeholder="Description Of Your Business Challenge" onChange={(e) => { setmessage(e.target.value) }} required={true}></textarea>
                            </div>
                            <div className="uplaod-documents">
                                <label for="files" className="btn">Upload Document</label>
                                <span>(.pdf,.doc,.excel)</span>
                                <input id="files" required={true} style={{ visibility: 'hidden' }} type="file" onChange={(e) => {
                        setfile(e.target.files[0] )
                      }} />

                            </div>
                            <div className="save-information-wrapper">
                                <div className="save-information">
                                    <span><svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <rect width="15" height="15" transform="translate(0 0.5)" fill="url(#pattern0)" />
                                        <defs>
                                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                <use xlinkHref="#image0_215_5365" transform="scale(0.00195312)" />
                                            </pattern>
                                            <image id="image0_215_5365" width="512" height="512" xlinkHref="data:image/png;base64,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" />
                                        </defs>
                                    </svg>
                                    </span><p>We all know how important your informations is.They are always safe with us.</p>
                                </div>
                            </div>
                            <div className="save-information-button">
                                <button className="button" type='Submit'>submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            {/* <!-- schedule interview section end -->
<!-- cta section start --> */}
            <section className="cta-section-wrapper">
                <div className="your-wany">
                    <div className="cta-inner-wrapper">
                        <div className="d-flex justify-content-between align-items-center cta">
                            <div className="cta-title-wrapper">
                                <div className="cta-title">
                                    <h1>Hurry Up! Contact Us Today And Get</h1>
                                </div>
                                <div className="cta-Consultation">
                                    <p>Free First Consultation</p>
                                </div>
                            </div>
                            <div className="cta-button-wrapper">
                                <div className="cta-button">
                                    <button type="button">BOOK YOUR CONSULTATION</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}


