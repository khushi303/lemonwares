import React from 'react';
import Womenimg from '../assets/images/png/womencard.png';
import Redvector1 from '../assets/images/png/redvector1.png';
import Redvector2 from '../assets/images/png/redvector2.png';
import Redvector3 from '../assets/images/png/redvector3.png';

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <ul data-aos="fade-right"
        className="inline-flex mb-0 flex-wrap lg:pt-[80px] sm:pt-[50px] pt-[40px] flex-row after:absolute relative after:h-[1px] after:bottom-0 after:z-[2] after:left-[1%] after:right-[1%] after:bg-[#E5E5E5]"
        role="tablist"
      >
        <li className='pb-1 relative'>
          <a className={`${openTab === 1 ? "text-[#B00000]" : "text-[rgba(214,212,212,0.88)]"} text-[15px] font-semibold leading-normal transition-all duration-300 ease-linear`}
            onClick={e => {
              e.preventDefault();
              setOpenTab(1);
            }}
            data-toggle="tab"
            href="#link1"
            role="tablist"
          >Hosting</a>
          <div className={`${openTab === 1 ? "bg-[#B00000]" : ""} absolute h-[1px] transition-all duration-300 ease-linear bottom-0 left-[7%] right-[10%] z-[4]`}></div>
        </li>
        <li className='ml-[23px] pb-1 relative'>
          <a className={`${openTab === 2 ? "text-[#B00000]" : "text-[rgba(214,212,212,0.88)]"} text-[15px] font-semibold leading-normal transition-all duration-300 ease-linear`}
            onClick={e => {
              e.preventDefault();
              setOpenTab(2);
            }}
            data-toggle="tab"
            href="#link2"
            role="tablist"
          >Domain</a>
          <div className={`${openTab === 2 ? "bg-[#B00000]" : ""} absolute h-[1px] transition-all duration-300 ease-linear bottom-0 left-[7%] right-[10%] z-[4]`}></div>
        </li>
        <li className='ml-[18px] pb-1 relative'>
          <a className={`${openTab === 3 ? "text-[#B00000]" : "text-[rgba(214,212,212,0.88)]"} text-[15px] font-semibold leading-normal transition-all duration-300 ease-linear`}
            onClick={e => {
              e.preventDefault();
              setOpenTab(3);
            }}
            data-toggle="tab"
            href="#link3"
            role="tablist"
          >SEO</a>
          <div className={`${openTab === 3 ? "bg-[#B00000]" : ""} absolute h-[1px] transition-all duration-300 ease-linear bottom-0 left-[7%] right-[10%] z-[4]`}></div>
        </li>
        <li className='ml-[15px] pb-1 relative'>
          <a className={`${openTab === 4 ? "text-[#B00000]" : "text-[rgba(214,212,212,0.88)]"} text-[15px] font-semibold leading-normal transition-all duration-300 ease-linear`}
            onClick={e => {
              e.preventDefault();
              setOpenTab(4);
            }}
            data-toggle="tab"
            href="#link4"
            role="tablist"
          >Email</a>
          <div className={`${openTab === 4 ? "bg-[#B00000]" : ""} absolute h-[1px] transition-all duration-300 ease-linear bottom-0 left-[7%] right-[10%] z-[4]`}></div>
        </li>
      </ul>
      <div className="relative flex flex-col">
        <div className={openTab === 1 ? "block" : "hidden"} id="link1">
          <div className='flex flex-row flex-wrap'>
            <div data-aos="fade-right" className='lg:w-1/2 w-full pt-[26px]'>
              <h2 className='lg:text-[64px] sm:text-[60px] text-[38px] font-bold leading-[121.094%] text-[#2E2E2E] lg:max-w-[600px]'>Premium Web Hosting for your Website</h2>
              <p className='text-[16px] font-normal ff_inter leading-[175%] tracking-[0.8px] lg:max-w-[448px] text-[#808080] lg:mt-[34px] lg:mb-[60px] my-5'>Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.</p>
              <div className='flex sm:gap-[24px] gap-[16px]'>
                <button className='sm:py-[12px] sm:px-[13.5px] p-[10px] text-[14px] font-normal leading-[171.429%] text-white rounded-[8px] bg-[#B00000] border border-solid border-[#B00000] shadow-[0px_0px_64px_0px_rgba(176,0,0,0.30)] whitespace-nowrap hover:shadow-[0px_2px_20px_0px_rgba(176,0,0,0.30)] transition-shadow duration-300 ease-linear'>Create an Account</button>
                <button className='sm:py-[12px] sm:px-[17.5px] py-[10px] px-[14.3px] text-[14px] font-normal leading-[171.429%] hover:shadow-[0px_2px_30px_0px_rgba(0,0,0,0.30)] transition-all duration-300 ease-linear text-black rounded-[8px] bg-transparent border border-solid border-black'>Choose your plan</button>
              </div>
            </div>
            <div data-aos="fade-left" className='lg:w-1/2 w-full flex lg:justify-end lg:mt-0 mt-10'>
              <div className='relative max-w-[501px] sm:ml-[26px] sm:mr-[25px] mx-[10px]'>
                <img src={Womenimg} alt="Womenimg" className='w-full sm:h-[504px] h-[400] object-cover object-center translate-y-[-9px]' />
                <img src={Redvector1} alt="Redvector1" className='sm:w-[72px] w-[55px] absolute sm:right-[-25px] right-[-10px] bottom-[50px]' />
                <img src={Redvector2} alt="Redvector2" className='sm:w-[40px] w-[27px] absolute sm:right-[-25px] right-[-10px] top-[63px]' />
                <img src={Redvector3} alt="Redvector3" className='sm:w-[40px] w-[27px] absolute sm:left-[-26px] left-[-10px] bottom-[34%]' />
              </div>
            </div>
          </div>
        </div>
        <div className={openTab === 2 ? "block" : "hidden"} id="link2">
          <div className='flex flex-row flex-wrap'>
            <div className='lg:w-1/2 w-full pt-[26px]'>
              <h2 className='lg:text-[64px] sm:text-[60px] text-[38px] font-bold leading-[121.094%] text-[#2E2E2E] lg:max-w-[600px]'>Premium Web Domain for your Website</h2>
              <p className='text-[16px] font-normal ff_inter leading-[175%] tracking-[0.8px] lg:max-w-[448px] text-[#808080] lg:mt-[34px] lg:mb-[60px] my-5'>Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.</p>
              <div className='flex sm:gap-[24px] gap-[16px]'>
                <button className='sm:py-[12px] sm:px-[13.5px] p-[10px] text-[14px] font-normal leading-[171.429%] text-white rounded-[8px] bg-[#B00000] border border-solid border-[#B00000] shadow-[0px_0px_64px_0px_rgba(176,0,0,0.30)] whitespace-nowrap hover:shadow-[2px_6px_12px_0px_rgba(176,0,0,0.30)] transition-shadow duration-300 ease-linear'>Create an Account</button>
                <button className='sm:py-[12px] sm:px-[17.5px] py-[10px] px-[14.3px] text-[14px] font-normal leading-[171.429%] hover:shadow-[0px_2px_30px_0px_rgba(0,0,0,0.30)] transition-shadow duration-300 ease-linear text-black rounded-[8px] bg-transparent border border-solid border-black'>Choose your plan</button>
              </div>
            </div>
            <div className='lg:w-1/2 w-full flex lg:justify-end lg:mt-0 mt-10'>
              <div className='relative max-w-[501px] sm:ml-[26px] sm:mr-[25px] mx-[10px]'>
                <img src={Womenimg} alt="Womenimg" className='w-full sm:h-[504px] h-[400] object-cover object-center translate-y-[-9px]' />
                <img src={Redvector1} alt="Redvector1" className='sm:w-[72px] w-[55px] absolute sm:right-[-25px] right-[-10px] bottom-[50px]' />
                <img src={Redvector2} alt="Redvector2" className='sm:w-[40px] w-[27px] absolute sm:right-[-25px] right-[-10px] top-[63px]' />
                <img src={Redvector3} alt="Redvector3" className='sm:w-[40px] w-[27px] absolute sm:left-[-26px] left-[-10px] bottom-[34%]' />
              </div>
            </div>
          </div>
        </div>
        <div className={openTab === 3 ? "block" : "hidden"} id="link3">
          <div className='flex flex-row flex-wrap'>
            <div className='lg:w-1/2 w-full pt-[26px]'>
              <h2 className='lg:text-[64px] sm:text-[60px] text-[38px] font-bold leading-[121.094%] text-[#2E2E2E] lg:max-w-[600px]'>Premium Web SEO for your Website</h2>
              <p className='text-[16px] font-normal ff_inter leading-[175%] tracking-[0.8px] lg:max-w-[448px] text-[#808080] lg:mt-[34px] lg:mb-[60px] my-5'>Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.</p>
              <div className='flex sm:gap-[24px] gap-[16px]'>
                <button className='sm:py-[12px] sm:px-[13.5px] p-[10px] text-[14px] font-normal leading-[171.429%] text-white rounded-[8px] bg-[#B00000] border border-solid border-[#B00000] shadow-[0px_0px_64px_0px_rgba(176,0,0,0.30)] whitespace-nowrap hover:shadow-[2px_6px_12px_0px_rgba(176,0,0,0.30)] transition-shadow duration-300 ease-linear'>Create an Account</button>
                <button className='sm:py-[12px] sm:px-[17.5px] py-[10px] px-[14.3px] text-[14px] font-normal leading-[171.429%] hover:shadow-[0px_2px_30px_0px_rgba(0,0,0,0.30)] transition-shadow duration-300 ease-linear text-black rounded-[8px] bg-transparent border border-solid border-black'>Choose your plan</button>
              </div>
            </div>
            <div className='lg:w-1/2 w-full flex lg:justify-end lg:mt-0 mt-10'>
              <div className='relative max-w-[501px] sm:ml-[26px] sm:mr-[25px] mx-[10px]'>
                <img src={Womenimg} alt="Womenimg" className='w-full sm:h-[504px] h-[400] object-cover object-center translate-y-[-9px]' />
                <img src={Redvector1} alt="Redvector1" className='sm:w-[72px] w-[55px] absolute sm:right-[-25px] right-[-10px] bottom-[50px]' />
                <img src={Redvector2} alt="Redvector2" className='sm:w-[40px] w-[27px] absolute sm:right-[-25px] right-[-10px] top-[63px]' />
                <img src={Redvector3} alt="Redvector3" className='sm:w-[40px] w-[27px] absolute sm:left-[-26px] left-[-10px] bottom-[34%]' />
              </div>
            </div>
          </div>
        </div>
        <div className={openTab === 4 ? "block" : "hidden"} id="link4">
          <div className='flex flex-row flex-wrap'>
            <div className='lg:w-1/2 w-full pt-[26px]'>
              <h2 className='lg:text-[64px] sm:text-[60px] text-[38px] font-bold leading-[121.094%] text-[#2E2E2E] lg:max-w-[600px]'>Premium Web Email for your Website</h2>
              <p className='text-[16px] font-normal ff_inter leading-[175%] tracking-[0.8px] lg:max-w-[448px] text-[#808080] lg:mt-[34px] lg:mb-[60px] my-5'>Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.</p>
              <div className='flex sm:gap-[24px] gap-[16px]'>
                <button className='sm:py-[12px] sm:px-[13.5px] p-[10px] text-[14px] font-normal leading-[171.429%] text-white rounded-[8px] bg-[#B00000] border border-solid border-[#B00000] shadow-[0px_0px_64px_0px_rgba(176,0,0,0.30)] whitespace-nowrap hover:shadow-[2px_6px_12px_0px_rgba(176,0,0,0.30)] transition-shadow duration-300 ease-linear'>Create an Account</button>
                <button className='sm:py-[12px] sm:px-[17.5px] py-[10px] px-[14.3px] text-[14px] font-normal leading-[171.429%] hover:shadow-[0px_2px_30px_0px_rgba(0,0,0,0.30)] transition-shadow duration-300 ease-linear text-black rounded-[8px] bg-transparent border border-solid border-black'>Choose your plan</button>
              </div>
            </div>
            <div className='lg:w-1/2 w-full flex lg:justify-end lg:mt-0 mt-10'>
              <div className='relative max-w-[501px] sm:ml-[26px] sm:mr-[25px] mx-[10px]'>
                <img src={Womenimg} alt="Womenimg" className='w-full sm:h-[504px] h-[400] object-cover object-center translate-y-[-9px]' />
                <img src={Redvector1} alt="Redvector1" className='sm:w-[72px] w-[55px] absolute sm:right-[-25px] right-[-10px] bottom-[50px]' />
                <img src={Redvector2} alt="Redvector2" className='sm:w-[40px] w-[27px] absolute sm:right-[-25px] right-[-10px] top-[63px]' />
                <img src={Redvector3} alt="Redvector3" className='sm:w-[40px] w-[27px] absolute sm:left-[-26px] left-[-10px] bottom-[34%]' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const HeaderTab = () => {
  return (
    <>
      <div id='account' className='container mx-auto xl:max-w-[1239px] xl:px-3 px-6'>
        <Tabs />
      </div>
    </>
  )
}

export default HeaderTab