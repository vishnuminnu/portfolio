import logo from "./logo.svg";
import "./App.css";
import vishnu from "./minnu.png";
import react from "./react.jpg";
import minnu from "./vm.jpg";
import img from "./githubimg.jpeg";
import frontend from "./frontend.jpg";
import vasavi from "./vasavi.png"
import narayana from "./narayana.png"
import mrec from "./mrec.png"
import dsa from "./dsa.jpg"
import vincense from "./vincense.jpg"
import v1 from "./v1.jpg"
import v2 from "./v2.jpg"
import py from "./py.jpg"
import {NavLink} from "react-router-dom"
import styled from 'styled-components';
import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Navigation, FreeMode, Pagination } from "swiper/modules";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  position: relative;
  padding: 20px;
  min-height: 100vh;  // Ensure the container takes the full height of the viewport

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: flex-start;
    margin-left: 200px;
    margin-top: 90px;
    min-height: auto; // Reset the height for larger screens
  }

  &:before {
    content: '';
    background: url(${vishnu}) no-repeat center top; // Adjusted position to center top
    background-size: cover;
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 992px) {
    &:before {
      display: none;
    }
  }
`;

const TextContainer = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  margin-top: 30px; // Adjust margin to move text up

  @media (min-width: 992px) {
    text-align: left;
    margin-top: 0; // Reset margin for larger screens
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;

  @media (min-width: 992px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.h3`
  font-size: 1rem;

  @media (min-width: 992px) {
    font-size: 1.5rem;
  }
`;

const Button = styled.button`
  height: 40px;
  border-radius: 30px;
  width: 160px;
  border: 1px solid rgb(223, 195, 38);
  font-size: 0.9rem;
  margin: 0.5rem;

  @media (min-width: 992px) {
    height: 50px;
    width: 180px;
    font-size: 1rem;
  }
`;

const ImageContainer = styled.div`
  display: none;

  @media (min-width: 992px) {
    display: block;
    margin-left: 100px;
    margin-top: -100px;
  }

  @media (max-width: 991px) {
    margin-left: 0;
    margin-top: -100px;
  }
`;



function App() {
  // State to keep track of the number of slides to show
  const [slidesPerView, setSlidesPerView] = useState(3);

  // Media query to adjust the number of slides based on screen size
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setSlidesPerView(1); // For small screens, show 1 slide
    } else if (window.innerWidth <= 1024) {
      setSlidesPerView(2); // For medium screens, show 2 slides
    } else {
      setSlidesPerView(3); // For larger screens, show 3 slides
    }
  };

  // Add event listener for window resize
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b628f33d-0fbb-4d3b-86f9-3871b8523efa");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg sticky-top bg-dark pt-3">
        <div class="container ">
          <h2 class=" text-light jaro-title ms-0 ms-lg-5">
            VOLLALA VISHNUVARDHAN
          </h2>
          <button
            className="navbar-toggler shadow-none  "
            style={{ outline: "none", border: "none", color: "white" }}
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <i class="fa-solid fa-bars "></i>
            </span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav  mb-2  mb-lg-0 ms-auto ">
              <li class="nav-item  pe-5 ">
                <a class="nav-link  items  " aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item pe-5">
                <a class="nav-link items" href="#about">
                  About
                </a>
              </li>
              <li class="nav-item  pe-5">
                <a class="nav-link items" href="#resume">
                  Resume
                </a>
              </li>
              <li class="nav-item  pe-5">
                <a class="nav-link items" href="#contact">
                  Contact
                </a>
              </li>
              <li class="nav-item  pe-5">
                <a class="nav-link items" href="#message">
                  Message me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className="container-fluid bg-dark bgi "
        style={{ height: "7000px", paddingTop: "100px" }}
      >
              <Container>
      <TextContainer>
        <h6 className="hello poetsen-one-regular">HELLO!</h6>
        <Title className="poetsen-one-regular reg">
          I'm <span className="hello">VOLLALA <br /> VISHNUVARDHAN</span>
        </Title>
        <Subtitle className="roboto-slab-rag mt-3">Full stack web-developer</Subtitle>
        <div className="mt-4">
          <Button className="hover-1">MY INSTAGRAM</Button>
        <NavLink to="https://www.linkedin.com/in/vollala-vishnuvardhan-b9019b246/ ">  <Button className="hover-1 ms-2 roboto-slab-rag">MY LINKEDIN</Button></NavLink>
        </div>
      </TextContainer>
      <ImageContainer>
        <img src={vishnu} height="650px" className="img" alt="..." />
      </ImageContainer>
    </Container>

        <div className="mt-5" style={{ height: "25px" }} id="about"></div>
        <div className="container mt-5 ">
          <div className="row">
            <div className="col">
              <div className="container ">
                <div className="d-inline-flex gap-5">
                  <img
                    src={minnu}
                    className="img2"
                    style={{ height: "170px", width: "170px" }}
                    alt="..."
                  />
                  <h6 class="bio mt-2">
                    <span>Name: Vollala Vishnuvardhan</span> <br></br>
                    <br></br>
                    <span> Job Role: Software Developer</span> <br></br>
                    <br></br>
                    <span class="bio">Address: Hyderabad,Telangana</span>
                  </h6>
                </div>
                <div className="skills">
                  <h5 style={{ color: "rgb(168, 186, 201)" }}>Skills</h5>
                  <h6 className="mt-3" style={{ color: "rgb(225, 234, 242)" }}>
                    MERN <i class="fa-solid fa-star"></i>
                  </h6>
                  <div class="progress" style={{ height: "13px" }}>
                    <div
                      class="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6 className="mt-3" style={{ color: "rgb(225, 234, 242)" }}>
                    Java
                  </h6>
                  <div class="progress" style={{ height: "13px" }}>
                    <div
                      class="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6 className="mt-3" style={{ color: "rgb(225, 234, 242)" }}>
                    DSA
                  </h6>
                  <div class="progress" style={{ height: "13px" }}>
                    <div
                      class="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6 className="mt-3" style={{ color: "rgb(225, 234, 242)" }}>
                    Python
                  </h6>
                  <div class="progress" style={{ height: "13px" }}>
                    <div
                      class="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6 className="mt-3" style={{ color: "rgb(225, 234, 242)" }}>
                    Javascript
                  </h6>
                  <div class="progress" style={{ height: "13px" }}>
                    <div
                      class="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h6 className="mt-3" style={{ color: "rgb(225, 234, 242)" }}>
                    SQL
                  </h6>
                  <div class="progress" style={{ height: "13px" }}>
                    <div
                      class="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="container ">
                <h1
                  className=" jersey-20-regular"
                  style={{ fontSize: "70px", color: "rgb(223, 195, 38)" }}
                >
                  About Me
                </h1>
                <p className="text-white mt-5 barlow-condensed-thin" style={{ fontSize: "17px" }}>
                  Tailwind, Bootstrap, and Material UI. Well-versed in Python,
                  C++, C, and Java, with a solid foundation in SQL. Eager to
                  contribute to innovative web development projects.
                </p>
                <div className="mt-5 ">
                  <h6 style={{ color: "rgb(225, 234, 242)" }}>
                    Profile:{" "}
                    <span style={{ marginLeft: "65px" }}>
                      MERN Stack Developer
                    </span>{" "}
                  </h6>
                  <h6 className="mt-4" style={{ color: "rgb(225, 234, 242)" }}>
                    Domain:{" "}
                    <span style={{ marginLeft: "55px" }}>
                      Software Development
                    </span>{" "}
                  </h6>
                  <h6 className="mt-4" style={{ color: "rgb(225, 234, 242)" }}>
                    Education:{" "}
                    <span style={{ marginLeft: "40px" }}>
                      Bachelor of Technology
                    </span>{" "}
                  </h6>
                  <h6 className="mt-4" style={{ color: "rgb(225, 234, 242)" }}>
                    Language:{" "}
                    <span style={{ marginLeft: "41px" }}>
                      English,Telugu,Hindi
                    </span>{" "}
                  </h6>
                  <h6 className="mt-4" style={{ color: "rgb(225, 234, 242)" }}>
                    Other Skills:{" "}
                    <span>
                      <div
                        style={{
                          width: "400px",
                          marginLeft: "120px",
                          marginTop: "-20px",
                        }}
                      >
                        Observational skills, Creativity,<br></br> Technical
                        proficiency, Communication skills,<br></br> Time
                        management, Adaptability &<br></br> Attention to detail
                      </div>
                    </span>{" "}
                  </h6>
                  <h6 className="mt-4" style={{ color: "rgb(225, 234, 242)" }}>
                    Interest:{" "}
                    <span style={{ marginLeft: "55px" }}>
                     
                    </span>{" "}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container cont mt-5" id="resume">
       <NavLink to="https://www.linkedin.com/in/vollala-vishnuvardhan-b9019b246/">  <button
            className="hover-1  ms-2 roboto-slab-rag"
            style={{
              height: "50px",
              borderRadius: "30px",
              width: "180px",
              border: "1px solid rgb(223, 195, 38)",
            }}
          >
            LINKEDIN
          </button></NavLink> 
        </div>
        <div className="mt-5 text-center container">
          <h1
            style={{ color: "rgb(223, 195, 38)", fontSize: "70px" }}
            className="jersey-20-regular"
          >
            Resume
          </h1>
          <p
            style={{
              color: "rgb(225, 234, 242)",
            }}
            className="mt-4  barlow-condensed-thin"
          >
            Experienced Adobe ColdFusion Developer at Arosys Technologies,
            proficient in PHP and skilled in jQuery AJAX. Specialized in
            crafting visually appealing webpages using HTML, CSS, Tailwind,
            Bootstrap, and Material UI. Possesses a strong foundation in Python,
            C++, C, and Java, with expertise in SQL. Eager to apply expertise to
            drive innovative web development projects forward.{" "}
          </p>
        </div>
        <div className="mt-5  container">
          <div className="text-center">
            <h1 style={{ color: "rgb(225, 234, 242)" }}>
              Experience{" "}
              <i
                class="fa-solid fa-user-check"
                style={{ color: " rgb(223, 195, 38)" }}
              ></i>
            </h1>
          </div>

          <div
            style={{
              color: "rgb(225, 234, 242)",
              borderTop: "5px solid ",
              borderImage:
                "linear-gradient(to right, rgb(223, 195, 38), #019fb6) 1",
            }}
            className="mt-3 pt-4"
          >
            <div className="row row-cols-lg-2 row-cols-1">
              <div className="col">
                <div
                  class="card text-white bg-secondary m-5"
                  style={{
                    maxWidth: "35rem",
                    height: "200px",
                    border: "1px solid rgb(223, 195, 38)",
                  }}
                >
                  <h3 class="card-header">2023,Nov</h3>
                  <div class="card-body">
                    <h5 class="card-title">Frontend Developer</h5>
                    <h6 className="mt-3">
                      Vincense Software Solutions,pvt ltd
                    </h6>
                    <p class="card-text mt-3">
                     Developed the landing page of BATTLE ASTRA
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div
                  class="card text-white bg-secondary m-5"
                  style={{
                    maxWidth: "35rem",
                    height: "200px",
                    border: "1px solid rgb(223, 195, 38)",
                  }}
                >
                  <h3 class="card-header">2024,Jan</h3>
                  <div class="card-body">
                    <h5 class="card-title">Freelance (MERN stack developer)</h5>
                    <h6 className="mt-3">
                      Remote
                    </h6>
                    <p class="card-text mt-3">
                    Developed Full stack E-commerce web application
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5  container">
          <div className="text-center">
            <h1 style={{ color: "rgb(225, 234, 242)" }}>
              Education{" "}
              <i
                class="fa-solid fa-building-columns"
                style={{ color: " rgb(223, 195, 38)" }}
              ></i>{" "}
            </h1>
          </div>

          <div
            style={{
              color: "rgb(225, 234, 242)",
              borderTop: "5px solid ",
              borderImage:
                "linear-gradient(to right, rgb(223, 195, 38), #019fb6) 1",
            }}
            className="mt-3 pt-4"
          >
          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1">
  <div className="col">
    <div
      className="card text-white bg-secondary m-5"
      style={{
        maxWidth: "35rem",
        height: "300px",
        border: "1px solid rgb(223, 195, 38)",
      }}
    >
      <img
        className="card-img"
        src={mrec}
        alt="Card image"
        style={{ width: "100%", height: "100%", opacity: "0.1", objectFit: "cover" }}
      />
      <div className="card-img-overlay d-flex flex-column justify-content-center">
        <h3 className="card-header" style={{ color: " rgb(223, 195, 38)", fontSize: "1.5rem" }}>2021 - 2025</h3>
        <div className="card-body">
          <h5 className="card-title" style={{ fontSize: "1.25rem" }}>B.Tech, Cse-Cs</h5>
          <h6 className="mt-3" style={{ fontSize: "1rem" }}>Malla Reddy Engineering College</h6>
          <h7 className="mt-3" style={{ fontSize: "1rem" }}>Hyderabad, Telangana</h7>
          <p className="card-text mt-3" style={{ fontSize: "0.875rem" }}>CGPA: 7.5</p>
        </div>
      </div>
    </div>
  </div>
  <div className="col">
    <div
      className="card text-white bg-secondary m-5"
      style={{
        maxWidth: "35rem",
        height: "300px",
        border: "1px solid rgb(223, 195, 38)",
      }}
    >
      <img
        className="card-img"
        src={narayana}
        alt="Card image"
        style={{ width: "100%", height: "100%", opacity: "0.1", objectFit: "cover" }}
      />
      <div className="card-img-overlay d-flex flex-column justify-content-center">
        <h3 className="card-header" style={{ color: " rgb(223, 195, 38)", fontSize: "1.5rem" }}>2019 - 2021</h3>
        <div className="card-body">
          <h5 className="card-title" style={{ fontSize: "1.25rem" }}>Intermediate, MPC</h5>
          <h6 className="mt-3" style={{ fontSize: "1rem" }}>Narayana Junior College</h6>
          <h6 className="mt-3" style={{ fontSize: "1rem" }}>Hyderabad, Telangana</h6>
          <p className="card-text mt-3" style={{ fontSize: "0.875rem" }}>Percentage: 92%</p>
        </div>
      </div>
    </div>
  </div>
  <div className="col">
    <div
      className="card text-white bg-secondary m-5"
      style={{
        maxWidth: "35rem",
        height: "300px",
        border: "1px solid rgb(223, 195, 38)",
      }}
    >
      <img
        className="card-img"
        src={vasavi}
        alt="Card image"
        style={{ width: "100%", height: "100%", opacity: "0.1", objectFit: "cover" }}
      />
      <div className="card-img-overlay d-flex flex-column justify-content-center">
        <h3 className="card-header" style={{ color: " rgb(223, 195, 38)", fontSize: "1.5rem" }}>2018 - 2019</h3>
        <div className="card-body">
          <h5 className="card-title" style={{ fontSize: "1.25rem" }}>SSC</h5>
          <h6 className="mt-3" style={{ fontSize: "1rem" }}>Vasavi High School</h6>
          <h6 className="mt-3" style={{ fontSize: "1rem" }}>Nirmal, Telangana</h6>
          <p className="card-text mt-3" style={{ fontSize: "0.875rem" }}>Percentage: 92%</p>
        </div>
      </div>
    </div>
  </div>
</div>


          </div>
        </div>

        <div className="mt-5  container">
          <div className="text-center">
            <h1 style={{ color: "rgb(225, 234, 242)" }}>
              Certifications{" "}
              <i
                class="fa-solid fa-certificate"
                style={{ color: " rgb(223, 195, 38)" }}
              ></i>{" "}
            </h1>
          </div>

          <div
            style={{
              color: "rgb(225, 234, 242)",
              borderTop: "5px solid ",
              borderImage:
                "linear-gradient(to right, rgb(223, 195, 38), #019fb6) 1",
            }}
            className="mt-3 pt-4"
          >
            <>
              <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={30}
                navigation={true}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode, Pagination, Navigation]}
                className="mySwiper"
                style={{ height: "350px" }}
              >
                <SwiperSlide style={{ borderRadius: "20px", height: "350px" }}>
                  <div
                    class="card shadow"
                    style={{
                      width: "18rem",
                      borderRadius: "20px",
                      height: "340px",
                    }}
                  >
                    <img src={react} class="card-img-top" alt="..." style={{height:"220px"}}/>
                    <div class="card-body">
                      <h6>Explore React.js Development</h6>
                      <h7 style={{ fontSize: "15px" }}>
                        - By Linkedin learning
                      </h7>
                      <br></br>
                      <a
                        className="mt-5 fs-6"
                        href="https://www.linkedin.com/learning/certificates/240017d72fb56a5784b99f04094ec31930197ef75015d611fa4251a31d41bfe3 "
                      >
                        {" "}
                        Show credential{" "}
                        <i class="fa-solid fa-up-right-from-square"></i>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide style={{ borderRadius: "20px", height: "350px" }}>
                  <div
                    class="card shadow"
                    style={{
                      width: "18rem",
                      borderRadius: "20px",
                      height: "340px",
                    }}
                  >
                    <img src={frontend} class="card-img-top" alt="..." style={{height:"220px"}} />
                    <div class="card-body">
                      <h6>Front-end Web Development</h6>
                      <h7 style={{ fontSize: "15px" }}>
                        - By Internshala trainings
                      </h7>
                      <br></br>
                      <a
                        className="mt-5 fs-6"
                        href="https://trainings.internshala.com/verify-certificate/%7B%7B$current_url%7D%7D  "
                      >
                        {" "}
                        Show credential{" "}
                        <i class="fa-solid fa-up-right-from-square"></i>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide style={{ borderRadius: "20px", height: "350px" }}>
                  <div
                    class="card shadow"
                    style={{
                      width: "18rem",
                      borderRadius: "20px",
                      height: "340px",
                    }}
                  >
                    <img src={dsa} class="card-img-top" alt="..." style={{height:"220px"}}/>
                    <div class="card-body">
                      <h6>Alpha(DSA with Java)</h6>
                      <h7 style={{ fontSize: "15px" }}>
                        - By APNA COLLEGE
                      </h7>
                      <br></br>
                      <h6
                        className="mt-2 fs-6"
                        
                      >
                        {" "}
                        credential id : 6624c05b76e20892d2040ca6{" "}
                      
                      </h6>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide style={{ borderRadius: "20px", height: "350px" }}>
                  <div
                    class="card shadow"
                    style={{
                      width: "18rem",
                      borderRadius: "20px",
                      height: "340px",
                    }}
                  >
                    <img src={react} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h6>Explore React.js Development</h6>
                      <h7 style={{ fontSize: "15px" }}>
                        - By Linkedin learning
                      </h7>
                      <br></br>
                      <a
                        className="mt-5 fs-6"
                        href="https://www.linkedin.com/learning/certificates/240017d72fb56a5784b99f04094ec31930197ef75015d611fa4251a31d41bfe3 "
                      >
                        {" "}
                        Show credential{" "}
                        <i class="fa-solid fa-up-right-from-square"></i>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide style={{ borderRadius: "20px", height: "350px" }}>
                  <div
                    class="card shadow"
                    style={{
                      width: "18rem",
                      borderRadius: "20px",
                      height: "340px",
                    }}
                  >
                    <img src={vincense} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h6>Explore React.js Development</h6>
                      <h7 style={{ fontSize: "15px" }}>
                        - By Linkedin learning
                      </h7>
                      <br></br>
                      <a
                        className="mt-5 fs-6"
                        href="https://www.linkedin.com/learning/certificates/240017d72fb56a5784b99f04094ec31930197ef75015d611fa4251a31d41bfe3 "
                      >
                        {" "}
                        Show credential{" "}
                        <i class="fa-solid fa-up-right-from-square"></i>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide style={{ borderRadius: "20px", height: "350px" }}>
                  <div
                    class="card shadow"
                    style={{
                      width: "18rem",
                      borderRadius: "20px",
                      height: "340px",
                    }}
                  >
                    <img src={v1} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h6>Explore React.js Development</h6>
                      <h7 style={{ fontSize: "15px" }}>
                        - By Linkedin learning
                      </h7>
                      <br></br>
                      <a
                        className="mt-5 fs-6"
                        href="https://www.linkedin.com/learning/certificates/240017d72fb56a5784b99f04094ec31930197ef75015d611fa4251a31d41bfe3 "
                      >
                        {" "}
                        Show credential{" "}
                        <i class="fa-solid fa-up-right-from-square"></i>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide style={{ borderRadius: "20px", height: "350px" }}>
                  <div
                    class="card shadow"
                    style={{
                      width: "18rem",
                      borderRadius: "20px",
                      height: "340px",
                    }}
                  >
                    <img src={v2} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h6>Explore React.js Development</h6>
                      <h7 style={{ fontSize: "15px" }}>
                        - By Linkedin learning
                      </h7>
                      <br></br>
                      <a
                        className="mt-5 fs-6"
                        href="https://www.linkedin.com/learning/certificates/240017d72fb56a5784b99f04094ec31930197ef75015d611fa4251a31d41bfe3 "
                      >
                        {" "}
                        Show credential{" "}
                        <i class="fa-solid fa-up-right-from-square"></i>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide style={{ borderRadius: "20px", height: "350px" }}>
                  <div
                    class="card shadow"
                    style={{
                      width: "18rem",
                      borderRadius: "20px",
                      height: "340px",
                    }}
                  >
                    <img src={react} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h6>Explore React.js Development</h6>
                      <h7 style={{ fontSize: "15px" }}>
                        - By Linkedin learning
                      </h7>
                      <br></br>
                      <a
                        className="mt-5 fs-6"
                        href="https://www.linkedin.com/learning/certificates/240017d72fb56a5784b99f04094ec31930197ef75015d611fa4251a31d41bfe3 "
                      >
                        {" "}
                        Show credential{" "}
                        <i class="fa-solid fa-up-right-from-square"></i>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide style={{ borderRadius: "20px", height: "350px" }}>
                  <div
                    class="card shadow"
                    style={{
                      width: "18rem",
                      borderRadius: "20px",
                      height: "340px",
                    }}
                  >
                    <img src={react} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h6>Explore React.js Development</h6>
                      <h7 style={{ fontSize: "15px" }}>
                        - By Linkedin learning
                      </h7>
                      <br></br>
                      <a
                        className="mt-5 fs-6"
                        href="https://www.linkedin.com/learning/certificates/240017d72fb56a5784b99f04094ec31930197ef75015d611fa4251a31d41bfe3 "
                      >
                        {" "}
                        Show credential{" "}
                        <i class="fa-solid fa-up-right-from-square"></i>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </>
          </div>
        </div>
        <div className="container cont mt-5">
          <button
            className="hover-1  ms-2 roboto-slab-rag"
            style={{
              height: "50px",
              borderRadius: "30px",
              width: "180px",
              border: "1px solid rgb(223, 195, 38)",
            }} download href={vasavi}
          >
            DOWNLOAD CV
          </button>
          <div class="container mt-5 " style={{ height: "300px" }}>
            <div class="card bg-dark text-white" style={{ height: "300px" }}>
              <img
                class="card-img"
                src={img}
                style={{ height: "300px" }}
                alt="Card image"
              />
              <div class="card-img-overlay p-5">
                <h5 class="card-title text-dark poetsen-one-regular reg mt-3">
                  Here's my{" "}
                  <span>
                 <NavLink to="https://github.com/vishnuminnu">   <button
                      className="  ms-2  "
                      style={{
                        height: "50px",
                        borderRadius: "30px",
                        width: "180px",
                        border: "1px solid rgb(223, 195, 38)",
                        backgroundColor: "#019fb6",
                      }}
                      
                    >
                      Github <i class="fa-brands fa-github"></i>
                    </button></NavLink>
                  </span>
                </h5>
                <h1 style={{ color: "rgb(223, 195, 38)" }} id="contact" className="poetsen-one-regular  ">
                  I love to code & create awesome projects
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container cont mt-5">
            <h1
              style={{ color: "rgb(223, 195, 38)", fontSize: "70px" }}
              className="jersey-20-regular"
            >
              Contact Me
            </h1>
            <h6 className="mt-5" style={{ color: "rgb(225, 234, 242)" }}>
              Below are the details to reach out to me!
            </h6>
            <div className="container">
            <div className="row mt-5 row-cols-1 row-cols-lg-4 row-cols-md-2">
  <div className="col mt-4 mt-md-0">
    <h2 style={{ }}>
      <i
        className="fa-solid fa-location-dot"
        style={{
          height: "100px",
          width: "100px",
          borderRadius: "50%",
          backgroundColor: "#019fb6",
          paddingTop: "35px",
          color: "rgb(223, 195, 38)" 
        }}
      ></i>
      <br />
      <span style={{ fontSize: "20px", marginTop: "10px",color:"whitesmoke" }}>
        ADDRESS
      </span>
      <br />
      <span style={{ fontSize: "15px", marginTop: "10px" ,color:"whitesmoke"}}>
        Hyderabad, Telangana
      </span>
    </h2>
  </div>
  <div className="col mt-4 mt-md-0">
    <h2 style={{ color: "rgb(223, 195, 38)" }}>
      <i
        className="fa-solid fa-phone"
        style={{
          height: "100px",
          width: "100px",
          borderRadius: "50%",
          backgroundColor: "#019fb6",
          paddingTop: "35px",
        }}
      ></i>
      <br />
      <span style={{ fontSize: "20px", marginTop: "10px",color:"whitesmoke" }}>
        CONTACT NUMBER
      </span>
      <br />
      <span style={{ fontSize: "15px", marginTop: "10px",color:"whitesmoke" }}>
        +91 8143126580
      </span>
    </h2>
  </div>
  <div className="col mt-4 mt-md-0">
    <h2 style={{ color: "rgb(223, 195, 38)" }}>
      <i
        className="fa-solid fa-envelope"
        style={{
          height: "100px",
          width: "100px",
          borderRadius: "50%",
          backgroundColor: "#019fb6",
          paddingTop: "35px",
        }}
      ></i>
      <br />
      <span style={{ fontSize: "20px", marginTop: "10px",color:"whitesmoke" }}>
       EMAIL ADDRESS
      </span>
      <br />
      <span style={{ fontSize: "15px", marginTop: "10px",color:"whitesmoke" }}>
       vishnuvardhanvollala@gmail.com
      </span>
    </h2>
  </div>
  <div className="col mt-4 mt-md-0">
    <h2 style={{ color: "rgb(223, 195, 38)" }}>
      <i
        className="fa-solid fa-circle-down"
        style={{
          height: "100px",
          width: "100px",
          borderRadius: "50%",
          backgroundColor: "#019fb6",
          paddingTop: "35px",
        }}
      ></i>
      <br />
      <span style={{ fontSize: "20px", marginTop: "10px" ,color:"whitesmoke"}}>
       DOWNLOAD CV
      </span>
      <br />
      <span style={{ fontSize: "15px", marginTop: "10px" ,color:"whitesmoke"}} id="message">
        resume
      </span>
    </h2>
  </div>
</div>

            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row justify-content-center mt-5">
            <div className="col-md-6 mt-5" style={{ width: "500px" }}>
              <h2
                className="text-center jersey-20-regular"
                style={{ color: "rgb(223, 195, 38)", fontSize: "50px" }}
              >
                Have a Question?
              </h2>
              <form className="mt-5" onSubmit={onSubmit}>
              <input type="hidden" name="access_key" value="b628f33d-0fbb-4d3b-86f9-3871b8523efa"/>
                <div className="form-group mt-3">
                  <div className="text-center">
                    <label
                      className="mb-2"
                      style={{ color: "rgb(225, 234, 242)", fontSize: "16px" }}
                      htmlFor="exampleFormControlTextarea1"
                    >
                      Full Name <span style={{ color: "red" }}> *</span>
                    </label>
                  </div>
                  <input
                    type="text"
                    className="form-control shadow-none"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    style={{ border: "1px solid rgb(223, 195, 38)" }}
                    name="name" required
                  />
                </div>
                <div className="d-inline-flex gap-3">
                  <div className="form-group mt-3 text-center">
                    <label
                      style={{ color: "rgb(225, 234, 242)" }}
                      className="mb-2"
                      for="inlineFormInputGroup"
                    >
                      Email <span style={{ color: "red" }}> *</span>
                    </label>
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          {" "}
                          <i
                            class="fa-solid fa-envelope pt-2"
                            style={{ height: "30px" }}
                          ></i>
                        </div>
                      </div>
                      <input
                        type="email"
                        class="form-control shadow-none"
                        id="inlineFormInputGroup"
                        name="email" required
                      />
                    </div>
                  </div>
                  <div className="form-group mt-3 text-center">
                    <label
                      style={{ color: "rgb(225, 234, 242)" }}
                      className="mb-2"
                      for="inlineFormInputGroup"
                    >
                      Phone Number <span style={{ color: "red" }}> *</span>
                    </label>
                    <div class="input-group mb-2">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <i
                            class="fa-solid fa-phone pt-2"
                            style={{ height: "30px" }}
                          ></i>
                        </div>
                      </div>
                      <input
                        type="text"
                        class="form-control shadow-none"
                        id="inlineFormInputGroup"
                        placeholder=""
                        name="number" required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group  mt-3">
                  <div className="text-center">
                    <label
                      className="mb-2"
                      style={{ color: "rgb(225, 234, 242)", fontSize: "16px" }}
                      htmlFor="exampleFormControlTextarea1"
                    >
                      Subject<span style={{ color: "red" }}> *</span>
                    </label>
                  </div>
                  <input
                    type="text"
                    className="form-control shadow-none"
                    id="exampleInputPassword1"
                    style={{ border: "1px solid rgb(223, 195, 38)" }}
                    name="subject" required
                  />
                </div>
                <div className="form-group mt-3">
                  <div className="text-center">
                    <label
                      className="mb-1"
                      style={{ color: "rgb(225, 234, 242)", fontSize: "16px" }}
                      htmlFor="exampleFormControlTextarea1"
                    >
                      Message<span style={{ color: "red" }}> *</span>
                    </label>
                  </div>
                  <textarea
                    className="form-control mt-2 shadow-none"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    style={{
                      resize: "none",
                      border: "1px solid rgb(223, 195, 38)",
                    }}
                    name="message" required
                  ></textarea>
                </div>
                <div className="text-center mt-4">
                  <button
                    type="submit"
                    className="btn "
                    style={{
                      width: "160px",
                      borderRadius: "20px",
                      backgroundColor: "#019fb6",
                      height: "45px",
                      border: "1px solid rgb(223, 195, 38)",
                    }}
                  >
                    Submit
                  </button>
                </div>
              </form>
               <span>{result}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
