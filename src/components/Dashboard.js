import React from 'react'

const Dashboard = () => {
  return (
      <div className='flex sm:flex-col ml-[35px] text-primary justify-between lg:ml-[187px] lg:mr-[242px] mt-[100px] sm:gap-5'>
          <div className='lg:w-[486px] h-[198px] sm:p-2 sm:gap-4 w-[358px] lg:h-[188px] shadow-sm rounded-[20px] flex flex-wrap  sm:justify-evenly sm:flex-row sm:flex-wrap lg:justify-around items-center'>
              
                  <div>
                      <span className='text-[14px] leading-[21px]'>Referral Earning</span>
                      <p className='text-black font-semibold text-[32px] leading-[48px]'>{'\u20B9'} 2,500</p>
                  </div>
                  <div>
                      <p className='text-[14px] leading-[21px]'>Total Referrals</p>
                      <p className='text-black font-semibold text-[32px] leading-[48px]'>7</p>
                  </div>
                  <div>
                      <p className='text-[14px] leading-[21px]'>Wallet Balance</p>
                      <p className='text-black font-semibold text-[32px] leading-[48px]'>{'\u20B9'} 500</p>
                  </div>
              
              <div className='bg-primary text-white text-center py-1 rounded-3xl w-[180px] h-[40px]'>Withdraw balance</div>
          </div>
          <div className='w-[358px]  lg:h-[108px]  '>
              <p className='text-[24px] mb-2 leading-[36px] font-semibold text-primary'>Your Referral Code</p>
              <div className='h-[60px] w-[358px]  bgrad  flex justify-center items-center'>
                  <p className=' w-[230px] h-[30px] font-medium tracking-[1.5em] text-[20px]'>EDCH54</p>
              </div>
          </div>
    </div>
  )
}

export default Dashboard