import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Blogs() {
  const navigate = useNavigate();
  const nextdata = (props) => {
    navigate("/blog-inner", { state: { props } });
  };
  // Filter Start
  const [categoryData, setCategoryData] = useState([]);
  const [finalData, setFinalData] = useState([]);

  const Filter = async (props = "All") => {
    console.log(props);
    if (props != "All") {
      const evenNumbers = await blogData.filter(
        (blogData) => blogData.category_name == props
      );

      setFinalData(evenNumbers);
    } else {
      setFinalData(blogData);
      console.log("All");
    }
  };
  // Filter
  //   API Start
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_KEY + "/api/getpost")
      .then((response) => {
        setBlogData(response.data.data);
        setFinalData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // code for categoryData
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
              <h1>blogs</h1>
            </div>
          </div>
        </div>
      </section>

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
          <div className="portfolio-tabs-wrapper-section">
            <div className="inner-portfolio-tabs-wrapper">
              <div className="tab-content tabcontent-wrapper">
                <div
                  className="tab-pane tabcontent-inner-wrapper active"
                  id="1"
                >
                  <div className="d-flex justify-content-between fortfolio-content blog">
                    {finalData.map((getpost, index) => (
                      <a className="redirect-next-page blog">
                        <div
                          className="blog-inner-wrapper blogtabs"
                          onClick={(e) => {
                            nextdata(getpost);
                            console.log(getpost);
                          }}
                        >
                          <div className="blog-image-wrapper">
                            <div className="blog-image">
                              <img
                                src={
                                  process.env.REACT_APP_API_KEY +
                                  `${getpost.profile_image}`
                                }
                                alt="Not Found"
                              />
                            </div>
                          </div>
                          <div className="blog-title-wrapper-inner">
                            <div className="blog-title-inner">
                              <h1>{getpost.title}</h1>
                            </div>
                          </div>
                          <div className="blog d-flex justify-content-between align-items-center">
                            <div className="blog-small-iamge-wtrapper">
                              <div className="blog-samll-image">
                                <span>{getpost.user_name}</span>
                              </div>
                            </div>
                            <div className=" blog-release-information-wrapper">
                              <div className="blog-information">
                                <p>{getpost.updated_at.slice(0, 10)}</p>
                              </div>
                            </div>
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
      </section>
    </div>
  );
}
