import React ,{useState} from 'react'
import logo from '../assets/logo.png'
import account from '../assets/Account circle.png'
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [isOpen, setisOpen] = useState(false);

    const handleChange = () => {
        setisOpen(!isOpen);
    }

  return (
      <div className='relative '>
          <div className='fixed w-full h-[73px]'>
              
          <ul className='flex px-4 lg:px-[74px] lg:py-2 w-full justify-between'>
                  <li>
                      <Link to='/'>
                          
                        <img
                            className='w-[160px] lg:h-[63px] h-[45px]'
                            src={logo}
                            alt='logo' />
                      </Link>
              </li>
              <li className=''>
                  <button onClick={handleChange} className='flex items-center sm:h-[48px] sm:justify-center gap-2 p-2 mt-2 sm:bg-primary w-[165px] sm:text-white sm:rounded-[10px] sm:text-[16px]'>
                      <img className='sm:hidden w-[20px] h-[20px]' src={account} alt='user' />
                      <span className='lg:text-primary text-[18px] leading-[23px] lg:font-semibold sm:text-[16px]'>Username</span>
                      <span className='lg:font-semibold lg:text-primary scale-y-4 sm:text-[16px] '>v</span>
                  </button>
                  {isOpen && (
                      <ul className='text-primary text-[18px] leading-[22px] gap-3'>
                          <li>My Assignment</li>
                          <li>Chat with mentor</li>
                      </ul>
                  )}
              </li>
          </ul>
          </div>
    </div>
  )
}

export default Navbar