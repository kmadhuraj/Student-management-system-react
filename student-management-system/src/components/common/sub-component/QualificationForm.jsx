import React, { useState } from "react";

export default function QualificationForm({RecieveFormData}) {
  const[QualFormData,setFormData]=useState({
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
  const handleChange=(e)=>{
    const newQualification={
        ...QualFormData,
        [ e.target.name]: e.target.value,
     
    };
    setFormData(newQualification)
    RecieveFormData(newQualification);
  };
  // console.log(formData)

 
  return (
    <>
    <div className="flex justify-center">
      <div className="flex gap-8 flex-col  md:flex-row ">
        {/* <div className="flex flex-col gap-8">
          <label className="text-lg font-semibold block" htmlFor="">Examination</label>
          <label className="block" htmlFor="">Class X</label>
          <label className="block" htmlFor="">Class X11</label> 
          <label className="block" htmlFor="">Graduation</label>
          <label className="block" htmlFor="">Master</label>
        </div> */}

        <div className="flex flex-col   md:w-auto  gap-2">
        <label  className="text-lg font-semibold" htmlFor="">Board</label> 
        <label className="block" htmlFor="">Class X</label>
          <input value={QualFormData.classXBoard} onChange={handleChange}  name="classXBoard" className="flex w-32 sm:w-72 md:w-32 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  type="text" />
          <label className="block" htmlFor="">Class X11</label>
          <input value={QualFormData.classX11Board} onChange={handleChange} name="classX11Board" className="flex w-32 sm:w-72  md:w-32  rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" />
          <label className="block" htmlFor="">Graduation</label>
          <input  value={QualFormData.graduationBoard} onChange={handleChange} name="graduationBoard"  className="flex w-32 sm:w-72  md:w-32  rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" />
          <label className="block" htmlFor="">Masters</label>
          <input value={QualFormData.mastersBoard} onChange={handleChange} name="mastersBoard" className="flex w-32 sm:w-72  md:w-32  rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" />
        </div>

        <div className="flex flex-col gap-2">
        <label  className="text-lg font-semibold" htmlFor="">Percentage</label>
        <label className="block" htmlFor="">Class X</label>
          <input value={QualFormData.classXPercent} onChange={handleChange} name="classXPercent" className="flex w-32 sm:w-72  md:w-32  rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="number" />
          <label className="block" htmlFor="">Class X11</label>
          <input  value={QualFormData.class11Percentage} onChange={handleChange} name="class11Percentage" className="flex w-32 sm:w-72  md:w-32 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="number" />
          <label className="block" htmlFor="">Graduation</label>
          <input value={QualFormData.graduationPercentage} onChange={handleChange} name="graduationPercentage" className="flex w-32 sm:w-72  md:w-32 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="number" />
          <label className="block" htmlFor="">Masters</label>
          <input value={QualFormData.mastersPercentage} onChange={handleChange} name="mastersPercentage" className="flex w-32 sm:w-72  md:w-32 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="number"  />
        </div>

        <div className="flex flex-col gap-2">
        <label  className="text-lg font-semibold" htmlFor="">Year of passing</label>
        <label className="block" htmlFor="">Class X</label>
          <input value={QualFormData.classXYearOfPassing} onChange={handleChange} name="classXYearOfPassing" className="flex w-32 sm:w-72  md:w-32 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="number"  />
          <label className="block" htmlFor="">Class X11</label>
          <input value={QualFormData.classX11YearOfPassing} onChange={handleChange} name="classX11YearOfPassing" className="flex w-32 sm:w-72  md:w-32 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="number" />
          <label className="block" htmlFor="">Graduation</label>
          <input value={QualFormData.graduationYearOfPasssing} onChange={handleChange} name="graduationYearOfPasssing" className="flex w-32 sm:w-72  md:w-32 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="number" />
          <label className="block" htmlFor="">Masters</label>
          <input value={QualFormData.mastersYearOfPasssing} onChange={handleChange} name="mastersYearOfPasssing" className="flex w-32 sm:w-72  md:w-32 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="number" />
        </div>
      </div>
      </div>
    </>
  );
}
