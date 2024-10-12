import React, { useEffect } from "react";
import { useState } from "react";
import Button from "../button/Button";
import QualificationForm from "./QualificationForm";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function RegisterForm() {
  const studentReg = import.meta.env.VITE_APP_STUDENT_REGISTRATION_URL;
  const hobbiesUrl = import.meta.env.VITE_APP_HOBBIES_URL;
  const coursesUrl = import.meta.env.VITE_APP_COURSES_URL;
  const [hobbie, setHobbies] = useState([]);
  const [course, setCourse] = useState([]);
  const [courseData, setCourseData] = useState([{}]);
  const [formData, setFormData] = useState({
    hobbies: [{ studentID: 0, hobbie: "" }],
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    emailD: "",
    mobileNumber: "",
    gender: "",
    address: "",
    city: "",
    pincode: "",
    state: "",
    country: "",
    courseID: "",

    // qualifications
    classXBoard: "",
    classX11Board: "",
    graduationBoard: "",
    mastersBoard: "",
    classXPercent: "",
    class11Percentage: "",
    graduationPercentage: "",
    mastersPercentage: "",
    classXYearOfPassing: "",
    classX11YearOfPassing: "",
    graduationYearOfPasssing: "",
    mastersYearOfPasssing: "",
  });
  // const [qualData,setQualData]=useState()

  //handle data from child component qualification
  const handleDataFromQual = (QualData) => {
    setFormData({
      ...formData,
      classXBoard: QualData.classXBoard,
      classX11Board: QualData.classX11Board,
      graduationBoard: QualData.graduationBoard,
      mastersBoard: QualData.mastersBoard,
      classXPercent: QualData.classXPercent,
      class11Percentage: QualData.class11Percentage,
      graduationPercentage: QualData.graduationPercentage,
      mastersPercentage: QualData.mastersPercentage,
      classXYearOfPassing: QualData.classXYearOfPassing,
      classX11YearOfPassing: QualData.classX11YearOfPassing,
      graduationYearOfPasssing: QualData.graduationYearOfPasssing,
      mastersYearOfPasssing: QualData.mastersYearOfPasssing,
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // console.log(formData);

  const handleCheckboxChange = (e) => {
    const { name, value, checked, type } = e.target;
    // console.log("value is ", value);
    setFormData((prevData) => {
      if (name === "courses") {
        // Handling courses as an array
        return {
          ...prevData,
          courseID:
            type === "checkbox"
              ? checked
                ? value
                : prevData.courseID.filter((course) => course !== value)
              : value,
        };
      } else if (name === "hobbies") {
        // Handling hobbies as an array of objects
        return {
          ...prevData,
          hobbies: checked
            ? //just remove  = ...prevData.hobbies, inside the [...prevData.hobbies, { studentID: 0, hobbie: value }] to only pass selected hobby
              [{ studentID: 0, hobbie: value }]
            : prevData.hobbies.filter((hobby) => hobby.hobbie !== value),
        };
      } else {
        // Handle other form fields
        return {
          ...prevData,
          [name]: value,
        };
      }
    });
  };
  // console.log("selected courses", formData.courseID);
  // console.log(formData)
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(studentReg, formData)
      .then((response) => {
        console.log("success", response);
        toast.success("Student Successfully Registered");
        // console.log("submitted")
      })
      .catch((error) => {
        toast.error("Student Registration failed");
        console.log("failed", error);
      });
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(hobbiesUrl);
        const courses = await axios.get(coursesUrl);
        setCourseData(courses.data);
        const hobbieName = response.data.map((hobby) => hobby.hobbie);
        const Courses = courses.data.map((course) => course.courseID);
        setHobbies(hobbieName);
        setCourse(Courses);
        
      } catch {
        console.log("failed");
      }
    };
    getData();
  }, []);

  return (
    <>
      <div className="p-2 bg-cyan-600 ">
        <ToastContainer />
        <div className="register-form p-6">
          <h2 className="text-center text-xl font-bold mb-5">
            Register Student
          </h2>
          <form className=" flex flex-col gap-5 justify-evenly">
            <div className="flex flex-col gap-2">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder=" "
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Email</label>
              <input
                type="email"
                name="emailD"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={formData.emailD}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Mobile</label>
              <input
                type="tel"
                name="mobileNumber"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Gender</label>
              <select
                name="gender"
                value={formData.gender}
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="0">Male</option>
                <option value="1">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label>Address</label>
              <input
                type="text"
                name="address"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex  flex-col gap-2">
              <label>City</label>
              <input
                type="text"
                name="city"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Pincode</label>
              <input
                type="text"
                name="pincode"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={formData.pincode}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex justify-between">
              <div className="gap-5 flex flex-col ">
                <label>Hobbies:</label>
                {hobbie.map((hobby, index) => (
                  <div key={index}>
                    <input
                      type="checkbox"
                      name="hobbies"
                      value={hobby}
                      checked={formData.hobbies.some((h) => h.hobbie === hobby)}
                      onChange={(e) =>
                        handleCheckboxChange(e, formData.studentID)
                      }
                    />
                    <label className="px-5">{hobby}</label>
                  </div>
                ))}
              </div>

              <div className="gap-5 flex flex-col ">
                <label>Courses:</label>

                {courseData.map((course) => (
                  <div className="" key={course.courseID}>
                    <input
                      type="checkbox"
                      name="courses"
                      value={course.courseID}
                      checked={formData.courseID.includes(course.courseID)}
                      onChange={(e) => handleCheckboxChange(e)}
                    />
                    <label className="px-5">{course.courseName}</label>
                  </div>
                ))}
              </div>
            </div>

            <QualificationForm
              RecieveFormData={handleDataFromQual}
            ></QualificationForm>

            <div className="flex justify-center">
              <Button onClick={handleSubmit}>Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
