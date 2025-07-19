import React, { useState } from 'react'
import assets from '../assets/assets';

const LoginPage = () => {
  const [currentstate, setcurrentstate] = useState("Sign Up");
  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [bio, setbio] = useState("");
  const [isdatasubmitted, setisdatasubmitted] = useState(false);

  const onSubmitHandler = (event) => {
 event.preventDefault(); 

    if (currentstate === "Sign Up" && !isdatasubmitted) {
      setisdatasubmitted(true)
      return;
    }
  }



  return (
    <div className='min-h-screen bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl'>

      {/* left */}
      <img src={assets.logo_big} alt="" className='w-[min(30vw,250px)]' />
      {/* right */}
      <form action="" onSubmit={onSubmitHandler} className='border-2 bg-white/8 text-white border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg'>
        <h2 className='font-medium text-2xl flex justify-between items-center'>
          {currentstate}

          {isdatasubmitted && <img onClick={() => setisdatasubmitted(false)} src={assets.arrow_icon} alt="" className='w-5 cursor-pointer' />}

        </h2>


        {currentstate === "Sign Up" && !isdatasubmitted && (
          <input type="text" placeholder='Full Name' onChange={(e) => setfullname(e.target.value)} value={fullname} className='p-2 border border-gray-500 rounded-md focus:outline-none' required />
        )}

        {!isdatasubmitted && (
          <>
            <input type="email" onChange={(e) => setemail(e.target.value)} value={email} placeholder='Email Address' required className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500' />

            <input type="password" onChange={(e) => setpass(e.target.value)} value={pass} placeholder='Password' required className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500' />
          </>
        )}

        {
          currentstate === "Sign Up" && isdatasubmitted && (
            <textarea onChange={(e) => setbio(e.target.value)} value={bio} className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-indigo-500' placeholder='enter you bio...' required></textarea>
          )
        }

        <button type='submit' className='py-3 bg-gradient-to-r from-purple-400 to-violet-600 text-white rounded-md cursor-pointer'> {currentstate === "Sign Up" ? "Create Account" : "Login Now"}

        </button>

        <div className='flex items-center gap-2 text-sm text-gray-500'>
          <input type="checkbox" />
          <p>Agree to the terms of use & privacy policy.</p>
        </div>

        <div className='flex flex-col gap-2'>
          {currentstate === "Sign Up" ? (
            <p className='text-sm text-gray-600 '>Already have an acount? <span onClick={() => { setcurrentstate("Login"); setisdatasubmitted(false) }} className='font-medium text-violet-500 cursor-pointer'>Login Here</span></p>
          ) : (
            <p className='text-sm text-gray-600 '>Create an account <span onClick={() => setcurrentstate("Sign Up")} className='font-medium text-violet-500 cursor-pointer'>Click Here</span></p>
          )}
        </div>
      </form>

    </div>
  )
}

export default LoginPage
