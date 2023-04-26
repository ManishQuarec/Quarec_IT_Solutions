import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Portfolio() {
  const navigate = useNavigate();
  const nextdata = (props) => {
    navigate("/portfolio_inner", { state: { props } });
  };
  // Filter Start
  const [categoryData, setCategoryData] = useState([]);
  const [finalData, setFinalData] = useState([]);

  const Filter = async (props = "All") => {
    console.log(Portfolio);
    if (props != "All") {
      const evenNumbers = await Portfolio.filter(
        (Portfolio) => Portfolio.portfolio_category == props
      );
      console.log(evenNumbers);
      setFinalData(evenNumbers);
    } else {
      setFinalData(Portfolio);
      console.log("All");
    }
  };
  // Filter
  //   API Start
  const [Portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_KEY + "/api/getportfolio")
      .then((response) => {
        setPortfolio(response.data.data);
        setFinalData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(process.env.REACT_APP_API_KEY + "/api/getcategory")
      .then((response) => {
        setCategoryData(response.data.category);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //   API End

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
      {/* <!-- Portfolio section start --> */}
      <section className="Portfolio-section-wrapper">
        <div className="container paddingleftright">
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
                <ul
                  className="nav nav-tabs align-items-center  "
                  id="nav-tab"
                  role="tablist"
                >
                  {categoryData.map((category, index) => (
                    <li
                      className="border-radius"
                      onClick={(e) => {
                        Filter(category);
                      }}
                    >
                      <a
                        className="nav-item movetabs "
                        role="tab"
                        aria-selected="true"
                        href="#1"
                        data-toggle="tab"
                        key={index}
                        style={{ padding: "12px 0px" }}
                      >
                        {category}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="tab-content tabcontent-wrapper">
                <div
                  className="tab-pane tabcontent-inner-wrapper active"
                  id="1"
                >
                  <div
                    className="fortfolio-content"
                    // onClick={(e) => {
                    //   nextdata(Portfolio);
                    //   console.log(Portfolio);
                    // }}
                  >
                    <div className="d-flex justify-content-between fortfolio-content blog">
                      {Array.isArray(Portfolio) &&
                        finalData.map((getportfolio, index) => (
                          <a className="redirect-next-page">
                            <div
                              className="fortfolio-image-wrapper"
                              onClick={(e) => {
                                nextdata(getportfolio);
                                console.log(getportfolio);
                              }}
                            >
                              <div className="fortfolio-image">
                                <img
                                  src={
                                    process.env.REACT_APP_API_KEY +
                                    `${getportfolio.portfolio_image}`
                                  }
                                  alt="not available"
                                />
                              </div>
                            </div>
                            <div className="fortfolio-content-wrapper">
                              <div className="fortfolio-title"></div>
                              <div className="fortfolio-discription">
                                <p>{getportfolio.description}</p>
                                {/* <span>Read More</span> */}
                              </div>
                              <div className="diffrent-position">
                                <p>{getportfolio.tags}</p>
                              </div>
                            </div>
                          </a>
                        ))}
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
