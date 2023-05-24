import React from 'react'
import Navbar from '../components/Navbar'
import Dashboard from '../components/Dashboard'
import Details from '../components/Details'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
      <div className='flex flex-col gap-y-8 '>
          
          <Navbar />
          <div className='absolute'>
              
            <div className=' fixed top-[90px] lg:ml-[187px] ml-[35px] text-[14px] leading-[21px] flex'>
              <span>UI/UX {'>'}</span>
              <Link to='/' className='ease-out'> Refer & Earn </Link>
              
          </div>
          </div>
          <Dashboard />
          <Details />
          <div className='ml-[35px] lg:ml-[187px] mt-6'>
              <nav className='text-primary text[16px] font-semibold leading-6 flex flex-col gap-3'>
                  <Link
                      to='./Friends'>Friends Who Enrolled</Link>
                  <Link to='/'>Terms & Conditions</Link>
              </nav>
          </div>
    </div>
  )
}

export default Home