import React from 'react'
import { useState, useEffect } from 'react'

export default function Career() {


  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [phone, setphone] = useState("")
  const [file, setfile] = useState()
  const [message, setmessage] = useState("")

  const [user, setUser] = useState({});

  const fetchData = () => {
    return fetch("https://0fd7-43-249-54-66.in.ngrok.io/api/getcategory",
      { 
      method: 'Get',
      headers: {
      Accept: 'application/json'
    }
  }
    ).then((response) => {
        console.log(response)
      }).then((data) => {
        setUser(data)
        console.log(user, data)

      })
      

  }

  useEffect(() => {
    fetchData();
  })


  let handleSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append('name', name);
    formData.append('email', email)
    formData.append('phone', phone)
    formData.append('message', message)
    formData.append('resume', file)

    console.log(formData)



    try {
      let res = await fetch("https://9a0c-43-249-54-66.in.ngrok.io/api/addresume", {
        method: "POST",
        // headers: { 'Content-Type': 'application/json' },
        body: formData,
      });
      let resJson = await res.json();

      console.log(resJson)
      if (res.status === 200) {
        console.log("user created successfully")
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };



  return (
    <div>

      <section className="vitgram-wrapper-section">
        <div className="vitgram-image-wrapper">
          <div className="contact-us-content-wrapper">
            <div className="contact-us left38"><h1>Careers</h1></div>
          </div>
        </div>

      </section>

      {/* <!--  career section start   --> */}
      <section className="career-section-wrapper">
        <div className="container paddingleftright">
          <div className="carrers-heading-title-wrapper">
            <div className="career-title"> <h1>Come, Join Us</h1></div>
            <div className="career-discription"><p>Quarec IT Solutions is all about innovative excellence. If you are a thinker, an
              innovator, we’d love to hear from you.</p></div>
          </div>
          <div className="career-flex-wrapper-section">
            <div className="d-flex justify-content-between gapcareer">
              <div className="career-image-wrapper width50 oneo-oneo">
                <div className="career-image">
                  <img src="assets/images/career.png" />
                </div>
              </div>
              <div className="career-together-wrapper width50 oneo-oneo">
                <div className="career-together-title">
                  <div className="career-sub-title">
                    <h1>A Career Together</h1>
                  </div>
                  <div className="career-small">
                    <p>Our team is our greatest asset!</p>
                  </div>
                </div>
                <div className="career-discription-wrapper">
                  <div className="career-explain">
                    <p>Quarec IT Solutions provides the best work culture where you can explore your skills and have a good career exposure. We are always on the look-out for creative out-of-the-box thinkers to join our team. We offer outstanding professional development and competitive compensation and benefits. Strengthen your skills and build a career working on exciting international projects!</p>
                  </div>
                  <div className="career-small">
                    <p>Come join US and explore your skills!</p>
                  </div>
                </div>
                <div className="career-mail-wrapper">
                  <div className="career-email">
                    <p><span>Email Us</span><a href="mailto:info@Quarecitsolutions.com">info@Quarecitsolutions.com</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--   career section end -->

<!-- career-developer information section start  --> */}
      <section className="career-developer-information-wrapper">
        <div className="container">
          <div className="question-and-informaion-wrapper">
            <div className="d-flex justify-content-between gapinforamtion">
              <div className="developer-information-form width50 wecanadjust ">
                <div className="job-opening-wrapper lets-suupp">
                  <div className="job-opening">
                    <h1>Send Your Resume</h1>
                  </div>
                  <div className="here-answer">
                    <p>We are here to answer any question you may have</p>
                  </div>
                </div>
                <div className="schedule-interview-from-wrapper">
                  <form action="" method="post" className="fillform-for-interview" onSubmit={(e) => { handleSubmit(e) }}>
                    <div className="input-field-wrapper d-flex justify-content-between">
                      <div className="name-wrapper-input">
                        <input type="text" autoComplete="off" required="" placeholder="name" className="form-control input-informaion" onChange={(e) => { setname(e.target.value) }} />
                      </div>
                      <div className="name-wrapper-input">
                        <input type="email" autoComplete="off" required="" placeholder="email" className="form-control input-informaion" onChange={(e) => { setemail(e.target.value) }} />
                      </div>
                    </div>
                    <div className="input-field-wrapper d-flex justify-content-between">
                      <div className="name-wrapper-input">
                        <input type="text" autoComplete="off" required="" placeholder="Contact Phone" className="form-control input-informaion" onChange={(e) => { setphone(e.target.value) }} />
                      </div>
                      <div className="name-wrapper-input">
                        <select className="select-option">
                          <option value="Select option">Select option</option>
                          <option value="web development">web development</option>
                          <option value="web development">web development</option>
                          <option value="web development">web development</option>
                          <option value="web development">web development</option>
                        </select>
                      </div>
                    </div>
                    <div className="discribe-massege">
                      <textarea id="massege" name="massege" rows="5" cols="60" placeholder="Description Of Your Business Challenge" onChange={(e) => { setmessage(e.target.value) }}></textarea>
                    </div>
                    <div className="uplaod-documents">
                      <label htmlFor="files" className="btn">Upload Document</label>
                      <span>(.pdf,.doc,.excel)</span>
                      <input id="files" style={{ visibility: 'hidden' }} type="file" onChange={(e) => {
                        setfile(e.target.files[0])
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



                          </defs>

                        </svg>
                        </span><p>We all know how important your informations is.They are always safe with us.</p>
                      </div>
                    </div>
                    <div className="save-information-button">
                      <button className="button" value="button">submit</button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="faq-section-wrapper width50 wecanadjust">
                <div className="job-opening-wrapper lets-suupp">
                  <div className="job-opening">
                    <h1>Current Openings</h1>
                  </div>
                </div>
                {/* <!--Accordion wrapper--> */}
                <div className="accordion md-accordion" id="accordionEx1" role="tablist" aria-multiselectable="true">

                  {/* <!-- Accordion card --> */}
                  <div className="card requirement-skiils">

                    {/* <!-- Card header --> */}
                    <div className="faq-inner-wrapper" role="tab" id="headingTwo1">
                      <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx1" href="#collapseTwo1"
                        aria-expanded="false" aria-controls="collapseTwo1">
                        React js Developer [4-Posts] [Experience 0-3+ Years ]
                        <span><i className="fa fa-plus " aria-hidden="true"></i></span>
                      </a>
                    </div>

                    {/* <!-- Card body --> */}
                    <div id="collapseTwo1" className="collapse" role="tabpanel" aria-labelledby="headingTwo1"
                      data-parent="#accordionEx1">
                      <div className="card-body">
                        <div className="detailsof-current-opening-wrapper">
                          <div className="sent-title">
                            <h1>Sent</h1>
                          </div>
                          <div className="pointsof-current-opening">
                            <ul className="points">
                              <li>Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model</li>
                              <li>Thorough understanding of React.js and its core principles</li>
                              <li>Experience with popular React.js workflows (such as Flux or Redux)</li>
                              <li>Familiarity with newer specifications of ECMAScript</li>
                              <li>Experience with data structure libraries (e.g., Immutable.js)</li>
                              <li>Knowledge of isomorphic React is a plus</li>
                              <li>Familiarity with RESTful APIs</li>
                              <li>Knowledge of modern authorization mechanisms, such as JSON Web Token</li>
                              <li>Familiarity with modern front-end build pipelines and tools</li>
                              <li>Ability to understand business requirements and translate them into technical requirements</li>

                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  {/* <!-- Accordion card --> */}

                  {/* <!-- Accordion card --> */}
                  <div className="card requirement-skiils">

                    {/* <!-- Card header --> */}
                    <div className="faq-inner-wrapper" role="tab" id="headingTwo2">
                      <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx1" href="#collapseTwo21"
                        aria-expanded="false" aria-controls="collapseTwo21">
                        React Native Developer [4-Posts] [Experience 0-3+ Years ]
                        <span><i className="fa fa-plus rotate-icon" aria-hidden="true"></i></span>

                      </a>
                    </div>

                    {/* <!-- Card body --> */}
                    <div id="collapseTwo21" className="collapse" role="tabpanel" aria-labelledby="headingTwo21"
                      data-parent="#accordionEx1">
                      <div className="card-body">
                        <div className="detailsof-current-opening-wrapper">
                          <div className="sent-title">
                            <h1>Sent</h1>
                          </div>
                          <div className="pointsof-current-opening">
                            <ul className="points">
                              <li>Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model</li>
                              <li>Thorough understanding of React.js and its core principles</li>
                              <li>Experience with popular React.js workflows (such as Flux or Redux)</li>
                              <li>Familiarity with newer specifications of ECMAScript</li>
                              <li>Experience with data structure libraries (e.g., Immutable.js)</li>
                              <li>Knowledge of isomorphic React is a plus</li>
                              <li>Familiarity with RESTful APIs</li>
                              <li>Knowledge of modern authorization mechanisms, such as JSON Web Token</li>
                              <li>Familiarity with modern front-end build pipelines and tools</li>
                              <li>Ability to understand business requirements and translate them into technical requirements</li>

                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  {/* <!-- Accordion card -->

  <!-- Accordion card --> */}
                  <div className="card requirement-skiils">
                    {/* 
    <!-- Card header --> */}
                    <div className="faq-inner-wrapper" role="tab" id="headingThree31">
                      <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx1" href="#collapseThree31"
                        aria-expanded="false" aria-controls="collapseThree31">
                        Node js Developer [3-Posts] [Experience 0-3+ Years ]
                        <span><i className="fa fa-plus rotate-icon" aria-hidden="true"></i></span>

                      </a>
                    </div>

                    {/* <!-- Card body --> */}
                    <div id="collapseThree31" className="collapse" role="tabpanel" aria-labelledby="headingThree31"
                      data-parent="#accordionEx1">
                      <div className="card-body">
                        <div className="detailsof-current-opening-wrapper">
                          <div className="sent-title">
                            <h1>Sent</h1>
                          </div>
                          <div className="pointsof-current-opening">
                            <ul className="points">
                              <li>Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model</li>
                              <li>Thorough understanding of React.js and its core principles</li>
                              <li>Experience with popular React.js workflows (such as Flux or Redux)</li>
                              <li>Familiarity with newer specifications of ECMAScript</li>
                              <li>Experience with data structure libraries (e.g., Immutable.js)</li>
                              <li>Knowledge of isomorphic React is a plus</li>
                              <li>Familiarity with RESTful APIs</li>
                              <li>Knowledge of modern authorization mechanisms, such as JSON Web Token</li>
                              <li>Familiarity with modern front-end build pipelines and tools</li>
                              <li>Ability to understand business requirements and translate them into technical requirements</li>

                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="card requirement-skiils">

                    {/* <!-- Card header --> */}
                    <div className="faq-inner-wrapper" role="tab" id="headingThree41">
                      <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx1" href="#collapseThree41"
                        aria-expanded="false" aria-controls="collapseThree41">
                        Web Designer [2-posts] [Experience 0-3+ Years ]
                        <span><i className="fa fa-plus rotate-icon" aria-hidden="true"></i></span>

                      </a>
                    </div>

                    {/* <!-- Card body --> */}
                    <div id="collapseThree41" className="collapse" role="tabpanel" aria-labelledby="headingThree41"
                      data-parent="#accordionEx1">
                      <div className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                        wolf
                        moon
                        officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                        Brunch
                        3
                        wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                        shoreditch
                        et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        Ad
                        vegan
                        excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth
                        nesciunt
                        you probably haven't heard of them accusamus labore sustainable VHS.
                      </div>
                    </div>

                  </div>
                  <div className="card requirement-skiils">

                    {/* <!-- Card header --> */}
                    <div className="faq-inner-wrapper" role="tab" id="headingThree51">
                      <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx1" href="#collapseThree51"
                        aria-expanded="false" aria-controls="collapseThree51">
                        Wordpress Developer [3-Posts] [Experience 0-3+ Years ]
                        <span><i className="fa fa-plus rotate-icon" aria-hidden="true"></i></span>
                      </a>
                    </div>

                    {/* <!-- Card body --> */}
                    <div id="collapseThree51" className="collapse" role="tabpanel" aria-labelledby="headingThree51"
                      data-parent="#accordionEx1">
                      <div className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                        wolf
                        moon
                        officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                        Brunch
                        3
                        wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                        shoreditch
                        et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        Ad
                        vegan
                        excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth
                        nesciunt
                        you probably haven't heard of them accusamus labore sustainable VHS.
                      </div>
                    </div>

                  </div>
                  <div className="card requirement-skiils">

                    {/* <!-- Card header --> */}
                    <div className="faq-inner-wrapper" role="tab" id="headingThree61">
                      <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx1" href="#collapseThree61"
                        aria-expanded="false" aria-controls="collapseThree61">
                        Android Native Developer [3-Posts] [Experience 0-3+ Years ]
                        <span><i className="fa fa-plus rotate-icon" aria-hidden="true"></i></span>
                      </a>
                    </div>

                    {/* <!-- Card body --> */}
                    <div id="collapseThree61" className="collapse" role="tabpanel" aria-labelledby="headingThree61"
                      data-parent="#accordionEx1">
                      <div className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                        wolf
                        moon
                        officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                        Brunch
                        3
                        wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                        shoreditch
                        et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        Ad
                        vegan
                        excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth
                        nesciunt
                        you probably haven't heard of them accusamus labore sustainable VHS.
                      </div>
                    </div>

                  </div>
                  <div className="card requirement-skiils">

                    {/* <!-- Card header --> */}
                    <div className="faq-inner-wrapper" role="tab" id="headingThree71">
                      <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx1" href="#collapseThree71"
                        aria-expanded="false" aria-controls="collapseThree71">
                        Full Stack Developer [3-Posts] [Experience 0-3+ Years ]
                        <span><i className="fa fa-plus rotate-icon" aria-hidden="true"></i></span>
                      </a>
                    </div>

                    {/* <!-- Card body --> */}
                    <div id="collapseThree71" className="collapse" role="tabpanel" aria-labelledby="headingThree71"
                      data-parent="#accordionEx1">
                      <div className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
                        wolf
                        moon
                        officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                        Brunch
                        3
                        wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                        shoreditch
                        et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        Ad
                        vegan
                        excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth
                        nesciunt
                        you probably haven't heard of them accusamus labore sustainable VHS.
                      </div>
                    </div>

                  </div>
                  {/* <!-- Accordion card --> */}

                </div>
                {/* <!-- Accordion wrapper --> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- career-developer information section start  -->
<!-- compnay project and deparment section start   --> */}
      <section className="company-overview-wrapper">
        <div className="container paddingleftright">
          <div className="overview-inner-wrapper">
            <div className="d-flex justify-content-between overviewgap">
              <div className="department-wrappere">
                <div className="deparment-item yellow">

                  <span className="data-number" data-number="6">6</span>
                  <h1>Departments</h1>
                </div>
              </div>
              <div className="department-wrappere">
                <div className="deparment-item yellow">

                  <span className="data-number" data-number="22">22</span>
                  <h1>Open Vacancies</h1>
                </div>
              </div>
              <div className="department-wrappere">
                <div className="deparment-item yellow">

                  <span className="data-number" data-number="25">25</span>
                  <h1>Parties, Yearly</h1>
                </div>
              </div>
              <div className="department-wrappere">
                <div className="deparment-item yellow">

                  <span className="data-number" data-number="328">328</span>
                  <h1>Pizzas</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- compnay project and deparment section start   --> */}
    </div>
  )

}