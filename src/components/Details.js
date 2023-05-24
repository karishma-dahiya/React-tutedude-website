import React from 'react';
import group from '../assets/Group.png';
import rupee from '../assets/₹.png';
import balance from '../assets/Account balance wallet.png'
import offer from '../assets/bxs_offer.png';
import coupon from '../assets/Vector (3).png'


const Details = () => {
    return (
      
            
        <div className='lg:w-[764px] lg:h-[332px] mt-8 flex flex-col  gap-y-4 ml-[35px] lg:ml-[187px] '>   
            <h1 className='text-primary text-[24px] font-semibold leading-9'>How does it work ?</h1>
            <div className='flex flex-wrap justify-between details gap-y-6 '>      
                <div className='flex lg:w-[355.5px] h-[72px]'>
                    <span className='h-[65px] w-[65px] bg-[#f5f5f5] rounded-full flex items-center justify-center '>
                        <span className='h-[16px] w-[32px]' >    
                        <img 
                            src={group} alt='group' />
                        </span>
                    </span>
                    <div>
                        <p className=' w-[151px] h-[24px] text-[16px] font-semibold text-black leading-6'>Invite your friends</p>
                        <p className=' w-[270px] h-[48px] text-[16px] font-normal text-lgray leading-6'>Share the link tutedude.com with your friends</p>
                    </div>
                </div> 
                <div className='flex lg:w-[355.5px] h-[72px]  gap-4'>
                    <span className='h-[65px] w-[65px] bg-[#f5f5f5] rounded-full flex justify-center items-center '>
                        <img
                           
                            src={coupon} alt='coupon' />
                    </span>
                    <div>
                        <p className=' text-[16px] font-semibold text-black leading-6'>Friend prchases any course</p>
                        <p className=' text-[16px] font-normal text-lgray leading-6'>Using your REFERRAL CODE in the payments page</p>
                    </div>
                </div> 
                <div className='flex lg:w-[355.5px] h-[72px]'>
                    <span className='h-[65px] w-[65px] bg-[#f5f5f5] rounded-full flex items-center justify-center '>
                        <span  >
                            
                        <img
                            src={rupee} alt='rupee' />
                        </span>
                    </span>
                    <div>
                        <p className=' text-[16px] font-semibold text-black leading-6'>You get ₹ 200 as referral money</p>
                        <p className=' text-[16px] font-normal text-lgray leading-6'>On total purchase the friend makes, into your wallet</p>
                    </div>
                </div> 
                <div className='flex lg:w-[355.5px] h-[72px]'>
                    <span className='h-[65px] w-[65px] bg-[#f5f5f5] rounded-full flex justify-center items-center '>
                        <img
                            className='h-[26px] w-[26px]' 
                            src={offer} alt='offer' />
                    </span>
                    <div>
                        <p className=' text-[16px] font-semibold text-black leading-6'>Your Friend gets ₹ 200 Off </p>
                        <p className=' text-[16px] font-normal text-lgray leading-6'>On his overall fee on successful purchase using your referral code </p>
                    </div>
                </div>
                <div className='flex lg:w-[355.5px] h-[72px]'>
                    <span className='h-[65px] w-[65px] bg-[#f5f5f5] rounded-full flex justify-center items-center '>
                        <img
                            className='h-[24px] w-[26px]' 
                            src={balance} alt='wallet' />
                    </span>
                    <div>
                        <p className=' text-[16px] font-semibold text-black leading-6'>Transfer money from wallet</p>
                        <p className=' text-[16px] font-normal text-lgray leading-6'>When the wallet balance reaches
    ₹200 or more, you can withdraw it</p>
                    </div>
                </div>   
            </div>
            
        </div>
      
  )
}

export default Details