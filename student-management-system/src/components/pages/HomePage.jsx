import React, { Component, useEffect, useState } from "react";
import College from "../../assets/images/close-up.jpg";
import Navbar from "../header/Navbar";
import Button from "../common/button/Button";
import Feature from "../common/sub-component/Feature";
import Courses from "../common/sub-component/Courses";
// import RegisterForm from "../common/sub-component/RegisterForm";
import Me from "../../../src/assets/images/me.jpg";
import Ce from "../../../src/assets/images/civile.jpg";
import Cse from "../../assets/images/cse.jpg";
import axios from "axios";
import RegisterPage from "../common/sub-component/RegisterPage";
export default function HomePage() {
  const MyStyle = {
    backgroundImage: `url(${College})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "130vh",
    width: "100%",
  };
  const [courseName, setCourseName] = useState([]);
  const CoursesUrl = import.meta.env.VITE_APP_COURSES_URL;

  useEffect(() => {
    const FetchImages = async () => {
      try {
        const Courses = await axios.get(CoursesUrl);
        // console.log(Courses);

        setCourseName(Courses.data.map((item) => item.courseName));
        console.log("courses is ", courseName);
      } catch {
        console.log("failed to fetch courses");
      }
    };
    FetchImages();
  }, []);

  return (
    <>
        <Navbar></Navbar>
      <div className="flex flex-col gap-20">
        <div style={MyStyle} className="flex justify-center items-center">
          <div className="flex flex-col justify-center  text-center items-center gap-11 ">
            <h5 className="text-2xl font-medium">
              {" "}
              BEST ONLINE EDUCATION SERVICE IN THE WORLD{" "}
            </h5>
            <h1 className="text-5xl font-bold">ONE STEP AHEAD THIS SEASON</h1>

            <div className="flex flex-col md:flex-row gap-4">
              <Button>LEARN MORE</Button>
              <Button>COURSES</Button>
            </div>
          </div>
        </div>

        <div className=" flex flex-col gap-24 ">
          <div className="flex justify-center">
            <div className="flex text-center flex-col gap-4">
              <h1 className="text-4xl font-bold">Awesome Feature</h1>
              <p className="text-xl italic ">
                Replenish man have thing gathering lights yielding shall you
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center md:flex-row md:justify-center gap-5">
            <Feature>
              <h1 className="text-xl font-bold">Scholarship Facility</h1>
              <p className="font-mono ">
                One make creepeth, man bearing theira firmament won't great
                heaven
              </p>
            </Feature>

            <Feature>
              <h1 className="text-xl font-bold">Sell Online Course</h1>
              <p className="font-mono ">
                One make creepeth, man bearing theira firmament won't great
                heaven
              </p>
            </Feature>

            <Feature>
              <h1 className="text-xl font-bold">Global Certification</h1>
              <p className="font-mono ">
                One make creepeth, man bearing theira firmament won't great
                heaven
              </p>
            </Feature>
          </div>
        </div>

        <div className="flex justify-center flex-col">
          <div className="flex text-center  flex-col">
            <h1 className="text-4xl font-bold">Our Courses</h1>
            <p className="italic  text-xl">
              Replenish man have thing gathering lights yielding shall you
            </p>
          </div>

          <div className="flex flex-col  items-center md:flex-row gap-10 justify-evenly mt-20 ">
            <Courses
              course={"B Tech"}
              context={
                "Focuses on computing, programming, algorithms, and software development. Graduates work in IT, software, data science, and cybersecurity."
              }
              dept={courseName[1]}
              img={Cse}
            ></Courses>

            <Courses
              course={"M Tech"}
              context={
                "Covers design and maintenance of mechanical systems, including engines and machines. Careers are in automotive, aerospace, and manufacturing industries."
              }
              dept={courseName[2]}
              img={Ce}
            ></Courses>

            <Courses
              course={"B Tech"}
              context={
                "Advanced study in infrastructure design, construction, and urban planning. Graduates lead projects in construction, transportation, and environmental engineering."
              }
              dept={courseName[3]}
              img={Me}
            ></Courses>
          </div>
        </div>

        <RegisterPage/>
        
      </div>
    </>
  );
}
