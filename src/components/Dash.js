import React from 'react'

const Dash = () => {
  return (
      <div className='flex sm:pr-10 sm:my-10 text-primary justify-between lg:ml-[187px] ml-[35px] lg:mr-[242px] mt-10 lg:mt-[150px]'>
          <div>
              <p className='text-[16px] leading-6'>Your Referral Code</p>
              <div className='w-[153px] h-[50px] border-[1.5px] border-[#dfdfdf] flex items-center justify-center rounded-[10px] mt-2 '>
                  <p className='text-[16px] font-semibold text-black leading-6 tracking-[0.75em]'>EDCH54</p>
              </div>
          </div>
          <div>
              <div className='mt-2 rounded-[20px] flex items-center flex-col justify-center shadow-med w-[145px] h-[85px] '>
                  <p className='text-[14px]'>Wallet balance</p>
                  <p className='font-semibold text-[16px] text-black'> {'\u20B9'} 500</p>
              </div>
          </div>
    </div>
  )
}

export default Dash