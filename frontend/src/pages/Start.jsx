import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
       <div className='bg-[url(https://mcdn.wallpapersafari.com/medium/70/54/gkfsc7.jpg)] bg-[length:auto_100%] bg-[position:bottom_center] bg-no-repeat h-screen pt-8 flex justify-between flex-col w-full bg-red-400'>
        <img className='w-10 ml-8 ' src="https://th.bing.com/th/id/OIP.fJFw1YX9NWL9-M4dSf10EAHaHa?w=187&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.svg/512px-Uber_logo_2018.svg.png"/>
         <div className='bg-white pb-7 py-4 px-4'>
           <h2 className='text-2xl font-bold'>Get Started with Uber</h2>
           <Link to='login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
         </div>
       </div>
    </div>
  )
}

export default Start;