import React from 'react'
import sample from "../../../assets/images/fff.png"

export default function Courses({course,dept,context,img}) {
  return (
    <> 
        <div style={{height:'30rem'}} className='flex  md:w-1/4 flex-col rounded-3xl bg-gray-400  hover:bg-amber-300 transition-colors  '>
            <div className='flex flex-col items-center gap-2  p-5'> 
                <h1 className='text-2xl font-medium'> {course}</h1>
                <img className='rounded-3xl' src={img} alt="" />
            </div>

            <div className='flex items-center  flex-col h-auto p-4 bg-gray-300 w-auto  self-center rounded-br-3xl hover:text-orange-400 transition-all ease-in-out'>
                {/* <div className='flex justify-self-end bg-black h-12 w-14'></div> */}
                <h1 className='text-start text-xl font-bold'>{dept}</h1>
                <p className='italic'>{context}</p>
            </div>
        </div>
    </>
  )
}
