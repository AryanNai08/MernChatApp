import React, { useActionState, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import assets from '../assets/assets';

const ProfilePage = () => {

  const [selectedimg, setselectedimg] = useState(null);
  const navigate = useNavigate()
  const [name, setname] = useState("Martin johnson")
  const [bio, setbio] = useState("Hii Everyone,I am Using QuickChat")


  const handlesubmit=async (e)=>{
    e.preventDefault();
    navigate('/')
  }
  return (
    <div className='min-h-screen bg-cover bg-no-repeat flex items-center justify-center'>

      <div className='w-5/6 max-w-2xl backdrop-blur-2xl text-gray-300 border-2 border-gray-600 flex items-center justify-between max-sm:flex-col-reverse rounded-lg'>
        <form onSubmit={handlesubmit} className='flex flex-col gap-5 p-10 flex-1'>
          <h3 className='text-lg'>Profile details</h3>
          <label htmlFor="avatar" className='flex items-center gap-3 cursor-pointer'>
            <input id="avatar" onChange={(e) => setselectedimg(e.target.files[0])} type="file" accept='.png,.jpg,.jpeg' hidden />
            <img src={selectedimg ? URL.createObjectURL(selectedimg) : assets.avatar_icon} className={`w-12 h-12 ${selectedimg && 'rounded-full'}`} alt="" />
            upload profile image
          </label>

          <input onChange={(e)=>setname(e.target.value)} value={name} type="text" required placeholder='Your name' className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500' />

          <textarea  onChange={(e)=>setbio(e.target.value)} value={bio} className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500' rows={4} required ></textarea>

          <button type='submit' className='bg-gradient-to-r from-purple-400 to-violet-600 p-2 text-white text-lg cursor-pointer'>Save</button>
        </form>
        <img className='max-w-44 aspect-square rounded-full mx-10 max-sm:mt-10' src={assets.logo_icon} alt="" />
      </div>

    </div>
  )
}

export default ProfilePage
