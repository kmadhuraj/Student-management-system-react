import React from 'react'
import { Children } from 'react'
export default function Button({children,onClick}) {
    
  return (
   <>
    <button onClick={onClick} className=' w-52 h-13 p-3 bg-green-500 rounded-md uppercase font-bold hover:bg-slate-50 hover:border-black border-2 border-transparent transition duration-400 ease-in-out ...' >
        {children}
    </button>
   </>
  )
}
