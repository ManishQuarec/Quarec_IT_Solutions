import React from "react";
import "./blog_inner.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Blog_inner() {
  const { state } = useLocation();
  const data = state;

  console.log(data);
  const htmlString = "<div><p>Hello, world!</p></div>";
  const navigate = useNavigate(); //   API Start
  const [innerdata, setInnerdata] = useState(data.props);
  console.log(innerdata);

  return (
    <div>
      <div class="MAIN-COntact">
        <div class="upper-sec">
          <div class="head-div">
            <h3 class="web-heading">Blogs</h3>
          </div>
        </div>
        <div class="upper-low">
          <p class="upper-head">Full Blog</p>
        </div>
        <div class="container">
          <div class="mainpage-div">
            <div className="upper-one">
              <div class="left-one">
                <a
                  onClick={() => {
                    navigate("/blog");
                  }}
                >
                  <i
                    class="fa fa-arrow-left"
                    aria-hidden="true"
                    style={{ paddingRight: "20px" }}
                  ></i>
                </a>
              </div>
              <a href="">
                Home / Blogs / Wordpress / How To Test And Improve Google Core
                Web Vitals For WordPress?
              </a>
            </div>
            <div class="bigpic">
              <img
                src={
                  process.env.REACT_APP_API_KEY + `${innerdata.profile_image}`
                }
                alt="Not Found"
              />
            </div>
            <div class="paradiv">
              <p>{innerdata.title}</p>
            </div>
            <div class="writer">
              <div class="dateside">
                <p>{innerdata.updated_at.slice(0, 10)}</p>
              </div>
              <div class="imageside">
                <img src="assets/images/blog-one/Ellipse 5.png" alt="" />
                <div class="writername">
                  <p>{innerdata.user_name}</p>
                </div>
              </div>
            </div>
            <div class="paragraph">
              <p
                dangerouslySetInnerHTML={{
                  __html: innerdata.description,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
