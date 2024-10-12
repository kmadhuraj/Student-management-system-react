import React from 'react'
import RegisterForm from "../sub-component/RegisterForm"
export default function RegisterPage() {
  return (
    <>
        <div className="flex flex-col gap-20 justify-evenly p-20 bg-cyan-900 lg:flex-row  ">
          <div className="flex flex-col gap-20 items-start">
            <div className="flex justify-center items-center md:items-start flex-col gap-10 mt-20  text-white font-medium  ">
              <h1 className="font-bold text-4xl text-center">Register Now</h1>
              <p className="w-2/3 ">
                There comes a pivotal moment in the life of any aspiring
                astronomer when the urge to explore the cosmos up close becomes
                irresistible, and it's finally time to purchase that first
                telescope. The thought of owning a personal window into the
                universe, where you can gaze at distant stars, planets, and
                galaxies from your own backyard, fills you with excitement and
                anticipation. You imagine setting up your own viewing station,
                carefully aligning the telescope, and eagerly awaiting the
                breathtaking sights that await—each twinkling star and glowing
                nebula bringing you one step closer to unraveling the mysteries
                of the night sky.
              </p>
            </div>

            <div className="text-white flex justify-evenly gap-6 lg:flex-row   flex-wrap">
              <div className="box-border h-32 w-32 p-4 border-2 bg-neutral-500 bg-opacity-30 rounded-lg">
                <h1 className="font-bold text-2xl ">100 Days</h1>
              </div>

              <div className="box-border h-32 w-32 p-4 border-2  bg-neutral-500 bg-opacity-30 rounded-lg">
                <h1 className="font-bold text-2xl">24 Hours</h1>
              </div>

              <div className="box-border h-32 w-32 p-4 border-2  bg-neutral-500 bg-opacity-30 rounded-lg">
                <h1 className="font-bold text-2xl">60 Minutes</h1>
              </div>

              <div className="box-border h-32 w-32 p-4 border-2  bg-neutral-500 bg-opacity-30 rounded-lg">
                <h1 className="font-bold text-2xl">15 Seconds</h1>
              </div>
            </div>
          </div>

          <div>
            <RegisterForm> </RegisterForm>
          </div>
        </div>
    </>
  )
}
