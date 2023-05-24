import React from 'react'
import Navbar from '../components/Navbar'
import Dash from '../components/Dash'
import Enrolled from '../components/Enrolled'
import { Link } from 'react-router-dom'

const Friends = () => {
  return (
      <div className='flex flex-col lg:gap-y-8'>
          <Navbar />
          <div className='absolute'>
              
            <div className='fixed ml-[35px] top-[60px] lg:top-[90px] lg:ml-[187px] text-[14px] leading-[21px] flex'>
                <span>UI/UX {'>'}</span>
                <Link to='/' className='ease-out'> Refer & Earn {'>'}</Link>
                <span> Friends Referred</span>
                
            </div>
          </div>
          <div className='lg:hidden font-semibold ml-[35px] text-[16px] leading-6 text-primary mt-24'>
              <Link
                  className="flex items-center cursor-pointer"
                  to='/'>
                <span className='font-extrabold lg:text-3xl'>&larr;</span> 
                <span className="ml-1">go back</span>
              </Link>
          </div>
          <Dash />
          <Enrolled />
          <div className='sm:mt-[500px] mt-10 text-primary text[16px] font-semibold leading-6 lg:ml-[187px] ml-[35px]'>
              <Link>Terms & Conditions</Link>
          </div>
    </div>
  )
}

export default Friends