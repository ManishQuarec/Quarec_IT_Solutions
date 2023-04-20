import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Portfolio_inner() {
  const navigate = useNavigate();
  const [Portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_KEY + "/api/getportfolio")
      .then((response) => {
        setPortfolio(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <section className="vitgram-wrapper-section">
        <div className="vitgram-image-wrapper">
          <div className="contact-us-content-wrapper">
            <div className="contact-us left38">
              <h1>Portfolio</h1>
            </div>
          </div>
        </div>
      </section>
      <section class="single-portfolio-wrapper-section">
        <div class="container">
          <div class="single-page-Portfolio-title-wrapper">
            <div class="Portfolio-single-page-title">
              <h3>Project Details</h3>
            </div>
          </div>
          <div class="vitgram-Portfolio-wrapper">
            <div class="d-flex align-items-center single-page-wrapper">
              <div class="right-arrow-wrapper">
                <div
                  class="right-arrow"
                  onClick={() => {
                    navigate("/Portfolio");
                  }}
                >
                  <a>
                    <i class="fa fa-arrow-left" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <div class="vitgram-fortfolio-content-wrapper">
                <div class="vitgram-content">
                  <p>
                    Home / Portfolio / Web Development / Secret 17 - Hair & Nail
                    Studio{" "}
                  </p>
                </div>
              </div>
            </div>
            {Array.isArray(Portfolio) &&
              Portfolio.map((getportfolio, index) => (
                <div>
                  <div class="single-fortfolio-image-wrapper">
                    <div class="single-Portfolio-image">
                      <img
                        src={
                          process.env.REACT_APP_API_KEY +
                          `${getportfolio.portfolio_image}`
                        }
                        alt="not Found"
                      />
                    </div>
                  </div>

                  <div class="single-page-content-wrapper-Portfolio">
                    <div class="title-wrapper-single">
                      <div class="title-single">
                        <h1>{getportfolio.title}</h1>
                      </div>
                    </div>
                    <div class="Portfolio-single-page-discription">
                      <div class="discriptions">
                        <p>{getportfolio.description}</p>
                      </div>
                      <div class="diffrent-position">
                        <p>{getportfolio.tags}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            <div class="more-projects-wrapper">
              <div class="more-projecr-wrapper-title">
                <div class="more-projects">
                  <h1>More Projects</h1>
                </div>
              </div>
              <div class="more-project d-flex justify-content-between flex-wrap single-page">
                <div class="inner-fortfolio-content">
                  <div class="fortfolio-image-wrapper">
                    <div class="fortfolio-image">
                      <img src="assets/images/portfolioappdev8.png" alt=""/>
                    </div>
                  </div>
                  <div class="fortfolio-content-wrapper">
                    <div class="fortfolio-title">
                      <h1>The Walt Disney Company</h1>
                    </div>
                    <div class="fortfolio-discription">
                      <p>
                        Aliqua id fugiat nostrud irure ex duis ea quis id quis
                        ad et. Sunt qui esse pariatur duis deserunt mollit
                        dolore cillum minim tempor enim. Elit aute irure tempor
                        cupidatat incididunt sint deserunt ut voluptate aute id
                        deserunt nisi....<span>Read More</span>
                      </p>
                    </div>
                    <div class="diffrent-position">
                      <p>Figma , Html , Css , React.JS , MongoDB</p>
                    </div>
                  </div>
                </div>
                <div class="inner-fortfolio-content">
                  <div class="fortfolio-image-wrapper">
                    <div class="fortfolio-image">
                      <img src="assets/images/portfolioappdev8.png" alt=""/>
                    </div>
                  </div>
                  <div class="fortfolio-content-wrapper">
                    <div class="fortfolio-title">
                      <h1>The Walt Disney Company</h1>
                    </div>
                    <div class="fortfolio-discription">
                      <p>
                        Aliqua id fugiat nostrud irure ex duis ea quis id quis
                        ad et. Sunt qui esse pariatur duis deserunt mollit
                        dolore cillum minim tempor enim. Elit aute irure tempor
                        cupidatat incididunt sint deserunt ut voluptate aute id
                        deserunt nisi....<span>Read More</span>
                      </p>
                    </div>
                    <div class="diffrent-position">
                      <p>Figma , Html , Css , React.JS , MongoDB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
