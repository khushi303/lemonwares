import React, { useState } from 'react';
import { Blacktick, RedTick } from './Iconimg';

const GetStarted = () => {
    const [toggle, setToggle] = useState(false);
    const [show, setShow] = useState(false)
    return (
        <>
            <div id='services' className='container mx-auto xl:max-w-[1121px] xl:px-3 px-6 lg:mt-[133px] sm:mt-[60px] mt-[50px]'>
                <div className='flex items-center justify-center flex-col'>
                    <h2 data-aos="fade-down" className='sm:text-[50px] text-[31px] font-semibold leading-[120%] text-black text-center max-w-[650px] lg:pb-[38px] pb-[25px]'>Ready to get started with
                        Lemon Wares?</h2>
                    <p data-aos="fade-down" className='text-[25px] font-normal leading-[100%] text-black text-center'>Choose the package that suits you</p>
                    <div data-aos="fade-down" className='lg:mt-[57px] mt-[30px] flex items-center lg:mb-[70px] mb-[32px]'>
                        <p className='text-[25px] font-normal leading-[100%] text-black pr-[31px]'>Monthly</p>
                        <div onClick={() => setToggle(!toggle)} className='w-[93px] cursor-pointer h-[50px] rounded-[73px] bg-[#B00000] px-[9px] py-[10px]'>
                            <div className={`${toggle ? "translate-x-[144%]" : "translate-x-0"} w-[30px] transition-transform duration-300 ease-linear h-[30px] rounded-[50%] bg-white`}></div>
                        </div>
                        <p className='text-[25px] font-normal leading-[100%] text-black pl-[26px]'>Yearly</p>
                        <button className='px-[8px] sm:block hidden py-[7px] bg-[#FFE87A] rounded-[8px] text-[10px] font-semibold text-black leading-[90%] ml-[17px]'>
                            20%  discount
                        </button>
                    </div>
                    <div data-aos="fade-down" className='flex flex-row flex-wrap max-w-[856px] w-full justify-center lg:mb-[84px] mb-[50px]'>
                        <div onClick={() => setShow(false)} className={`${show ? "border-[#C4C4C4]" : "border-[#B00000]"} w-[50%] transition-all duration-300 ease-linear border-b-[4px] border-solid pb-[6px] cursor-pointer`}>
                            <p className='text-[30px] font-semibold leading-[133.333%] text-center text-black'>Basic</p>
                        </div>
                        <div onClick={() => setShow(true)} className={`${show ? " border-[#B00000]" : "border-[#C4C4C4]"} w-[50%] transition-all duration-300 ease-linear border-b-[4px] border-solid pb-[6px] cursor-pointer`}>
                            <p className='text-[30px] font-semibold leading-[133.333%] text-center text-black'>Premium</p>
                        </div>
                    </div>
                    <div className='flex w-full flex-row flex-wrap sm:justify-between justify-center gap-[30p x]'>
                        <div data-aos="fade-right" className='xl:w-[28%] lg:w-[31%] sm:w-[48%] w-full  sm:block flex items-center justify-center'>
                            <div className='pl-[35px] pr-[27px] pt-[34px] pb-[48px] sm:max-w-[unset] max-w-[320px] group cursor-pointer border-[1.5px] border-solid border-[#f6e3e3ab] rounded-[15px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)_inset] hover:bg-[#c4c4c425] transition-all duration-300 ease-linear'>
                                <h3 className={`${show ? "text-[#B00000]" : "text-black"} text-[28px] font-semibold leading-[89.286%]`}>Starter</h3>
                                <p className='text-[12px] font-normal text-black leading-[150%] max-w-[237px] mt-[11px]'>with all your customers via all conversation channels in one central dashboard.</p>
                                {toggle ? (<div>{show ? (<p className='text-[#B00000] text-[42px] font-semibold leading-[76.19%] mt-[28px]'>$60.00</p>) : (<p className='text-black text-[42px] font-semibold leading-[76.19%] mt-[28px]'>$40:20</p>)}</div>) : (<div>{show ? (<p className='text-[#B00000] text-[42px] font-semibold leading-[76.19%] mt-[28px]'>$4.00</p>) : (<p className='text-black text-[42px] font-semibold leading-[76.19%] mt-[28px]'>$2:80</p>)}</div>)}
                                {toggle ? <p className='text-[14px] font-light text-black leading-[100%] mt-[11px] mb-[35px]'>Per year</p> : <p className='text-[14px] font-light text-black leading-[100%] mt-[11px] mb-[35px]'>Per month</p>}
                                {show ? <button className='text-[14px] group-hover:bg-[#B00000] transition-colors group-hover:text-white duration-300 ease-linear font-semibold leading-[228.571%] text-[#B00000] py-[9px] pl-[56px] pr-[60px] border-[2px] border-solid border-[#B00000] rounded-[12px]'>Choose this Plan</button> : <button className='text-[14px] group-hover:bg-black transition-colors group-hover:text-white duration-300 ease-linear font-semibold leading-[228.571%] text-black py-[9px] pl-[56px] pr-[60px] border-[2px] border-solid border-black rounded-[12px]'>Choose this Plan</button>}
                                <div className='flex flex-col gap-[15px] mt-[35px]'>
                                    <div className='flex gap-[24px] items-center'>
                                        {show ? (<RedTick />) : (<Blacktick />)}
                                        <p className='text-[16px] ff_inter font-bold leading-[146%] text-[#808080]'>2GB SSD</p>
                                    </div>
                                    <div className='flex gap-[24px] items-center'>
                                        {show ? (<RedTick />) : (<Blacktick />)}
                                        <p className='text-[16px] ff_inter font-bold leading-[146%] text-[#808080]'>10GB Bandwidth</p>
                                    </div>
                                    <div className='flex gap-[24px] items-center'>
                                        {show ? (<RedTick />) : (<Blacktick />)}
                                        <p className='text-[16px] ff_inter font-bold leading-[146%] text-[#808080]'>15 Email Accounts</p>
                                    </div>
                                    <div className='flex gap-[24px] items-center'>
                                        {show ? (<RedTick />) : (<Blacktick />)}
                                        <p className='text-[16px] ff_inter font-bold leading-[146%] text-[#808080]'>Unlimited Database</p>
                                    </div>
                                    <div className='flex gap-[24px] items-center'>
                                        {show ? (<RedTick />) : (<Blacktick />)}
                                        <p className='text-[16px] ff_inter font-bold leading-[146%] text-[#808080]'>4 Subdomains</p>
                                    </div>
                                    <div className='flex gap-[24px] items-center'>
                                        {show ? (<RedTick />) : (<Blacktick />)}
                                        <p className='text-[16px] ff_inter font-bold leading-[146%] text-[#808080]'>1 Parked Domain</p>
                                    </div>
                                    <div className='flex gap-[24px] items-center'>
                                        {show ? (<RedTick />) : (<Blacktick />)}
                                        <p className='text-[16px] ff_inter font-bold leading-[146%] text-[#808080]'>2 Websites</p>
                                    </div>
                                    <div className='flex gap-[24px] items-center'>
                                        {show ? (<RedTick />) : (<Blacktick />)}
                                        <p className='text-[16px] ff_inter font-bold leading-[146%] text-[#808080]'>Free SSL</p>
                                    </div>
                                    <div className='flex gap-[24px] items-center'>
                                        {show ? (<RedTick />) : (<Blacktick />)}
                                        <p className='text-[16px] ff_inter font-bold leading-[146%] text-[#808080]'>Softaculous</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" className='xl:w-[28%] lg:w-[31%] sm:w-[48%] w-full sm:mt-0 mt-6 sm:block flex items-center justify-center'>
                            <div className=' pl-[35px] pr-[27px] pt-[34px] pb-[48px] border-[1.5px] cursor-pointer group sm:max-w-[unset] max-w-[320px] border-solid border-[#C4C4C4] rounded-[15px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)_inset] hover:bg-[#c4c4c425] transition-all duration-300 ease-linear'>
                                <h3 className={`${show ? "text-[#B00000]" : "text-black"} text-[28px] font-semibold leading-[89.286%]`}>Standard</h3>
                                <p className='text-[12px] font-normal text-black leading-[150%] max-w-[237px] mt-[11px]'>with all your customers via all conversation channels in one central dashboard.</p>
                                {toggle ? (<div>{show ? (<p className='text-[#B00000] text-[42px] font-semibold leading-[76.19%] mt-[28px]'>$80.00</p>) : (<p className='text-black text-[42px] font-semibold leading-[76.19%] mt-[28px]'>$50:20</p>)}</div>) : (<div>{show ? (<p className='text-[#B00000] text-[42px] font-semibold leading-[76.19%] mt-[28px]'>$8.00</p>) : (<p className='text-black text-[42px] font-semibold leading-[76.19%] mt-[28px]'>$4:20</p>)}</div>)}
                                {toggle ? <p className='text-[14px] font-light text-black leading-[100%] mt-[11px] mb-[35px]'>Per year</p> : <p className='text-[14px] font-light text-black leading-[100%] mt-[11px] mb-[35px]'>Per month</p>}
                                {show ? <button className='text-[14px] group-hover:bg-[#B00000] transition-colors group-hover:text-white duration-300 ease-linear font-semibold leading-[228.571%] text-[#B00000] py-[9px] pl-[56px] pr-[60px] border-[2px] border-solid border-[#B00000] rounded-[12px]'>Choose this Plan</button> : <button className='text-[14px] group-hover:bg-black transition-colors group-hover:text-white duration-300 ease-linear font-semibold leading-[228.571%] text-black py-[9px] pl-[56px] pr-[60px] border-[2px] border-solid border-black rounded-[12px]'>Choose this Plan</button>}
                                <div className='flex flex-col gap-[15px] mt-[35px]'>
                                    <div className='flex gap-[24px] items-center'>
                                        {show ? (<RedTick />) : (<Blacktick />)}
                                        <p className='text-[16px] ff_inter font-bold leading-[146%] text-[#808080]'>2GB SSD</p>
                                    </div>
                                    <div className='flex gap-[24px] items-center'>
                                        {show ? (<RedTick />) : (<Blacktick />)}
                                        <p className='text-[16px] ff_inter font-bold leading-[146%] text-[#808080]'>10GB Bandwidth</p>
                                    </div>
                                    <div className='flex gap-[24px] items-center'>
                                        {show ? (<RedTick />) : (<Blacktick />)}
                                        <p className='text-[16px] ff_inter font-bold leading-[146%] text-[#808080]'>15 Email Accounts</p>
                                    </div>
                                    <div className='flex gap-[24px] items-center'>
                                        {show ? (<RedTick />) : (<Blacktick />)}
                                        <p className='text-[16px] ff_inter font-bold leading-[146%] text-[#808080]'>Unlimited Database</p>
                                    </div>
                                    <div className='flex gap-[24px] items-center'>
                                        {show ? (<RedTick />) : (<Blacktick />)}
                                        <p className='text-[16px] ff_inter font-bold leading-[146%] text-[#808080]'>4 Subdomains</p>
                                    </div>
                                    <div className='flex gap-[24px] items-center'>
                                        {show ? (<RedTick />) : (<Blacktick />)}
                                        <p className='text-[16px] ff_inter font-bold leading-[146%] text-[#808080]'>1 Parked Domain</p>
                                    </div>
                                    <div className='flex gap-[24px] items-center'>
                                        {show ? (<RedTick />) : (<Blacktick />)}
                                        <p className='text-[16px] ff_inter font-bold leading-[146%] text-[#808080]'>2 Websites</p>
                                    </div>
                                    <div className='flex gap-[24px] items-center'>
                                        {show ? (<RedTick />) : (<Blacktick />)}
                                        <p className='text-[16px] ff_inter font-bold leading-[146%] text-[#808080]'>Free SSL</p>
                                    </div>
                                    <div className='flex gap-[24px] items-center'>
                                        {show ? (<RedTick />) : (<Blacktick />)}
                                        <p className='text-[16px] ff_inter font-bold leading-[146%] text-[#808080]'>Softaculous</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-left" className='xl:w-[28%] lg:w-[31%] sm:w-[48%] w-full lg:mx-[unset] sm:mx-auto lg:mt-0 mt-6 sm:block flex items-center justify-center'>
                            <div className=' pl-[35px] pr-[27px] pt-[34px] pb-[48px] border-[1.5px] group cursor-pointer sm:max-w-[unset] max-w-[320px] border-solid border-[#C4C4C4] rounded-[15px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)_inset] hover:bg-[#c4c4c425] transition-all duration-300 ease-linear'>
                                <h3 className={`${show ? "text-[#B00000]" : "text-black"} text-[28px] font-semibold transition-colors duration-300 ease-linear leading-[89.286%]`}>Suprem</h3>
                                <p className='text-[12px] font-normal text-black leading-[150%] max-w-[237px] mt-[11px]'>with all your customers via all conversation channels in one central dashboard.</p>
                                {toggle ? (<div>{show ? (<p className='text-[#B00000] text-[42px] font-semibold leading-[76.19%] mt-[28px]'>$120.00</p>) : (<p className='text-black text-[42px] font-semibold leading-[76.19%] mt-[28px]'>$100:20</p>)}</div>) : (<div>{show ? (<p className='text-[#B00000] text-[42px] font-semibold leading-[76.19%] mt-[28px]'>$10.00</p>) : (<p className='text-black text-[42px] font-semibold leading-[76.19%] mt-[28px]'>$7:00</p>)}</div>)}
                                {toggle ? <p className='text-[14px] font-light text-black leading-[100%] mt-[11px] mb-[35px]'>Per year</p> : <p className='text-[14px] font-light text-black leading-[100%] mt-[11px] mb-[35px]'>Per month</p>}
                                {show ? <button className='text-[14px] group-hover:bg-[#B00000] transition-colors group-hover:text-white duration-300 ease-linear font-semibold leading-[228.571%] text-[#B00000] py-[9px] pl-[56px] pr-[60px] border-[2px] border-solid border-[#B00000] rounded-[12px]'>Choose this Plan</button> : <button className='text-[14px] group-hover:bg-black transition-colors group-hover:text-white duration-300 ease-linear font-semibold leading-[228.571%] text-black py-[9px] pl-[56px] pr-[60px] border-[2px] border-solid border-black rounded-[12px]'>Choose this Plan</button>}
                                <div className='flex flex-col gap-[15px] mt-[35px]'>
                                    <div className='flex gap-[24px] items-center'>
                                        {show ? (<RedTick />) : (<Blacktick />)}
                                        <p className='text-[16px] ff_inter font-bold leading-[146%] text-[#808080]'>2GB SSD</p>
                                    </div>
                                    <div className='flex gap-[24px] items-center'>
                                        {show ? (<RedTick />) : (<Blacktick />)}
                                        <p className='text-[16px] ff_inter font-bold leading-[146%] text-[#808080]'>10GB Bandwidth</p>
                                    </div>
                                    <div className='flex gap-[24px] items-center'>
                                        {show ? (<RedTick />) : (<Blacktick />)}
                                        <p className='text-[16px] ff_inter font-bold leading-[146%] text-[#808080]'>15 Email Accounts</p>
                                    </div>
                                    <div className='flex gap-[24px] items-center'>
                                        {show ? (<RedTick />) : (<Blacktick />)}
                                        <p className='text-[16px] ff_inter font-bold leading-[146%] text-[#808080]'>Unlimited Database</p>
                                    </div>
                                    <div className='flex gap-[24px] items-center'>
                                        {show ? (<RedTick />) : (<Blacktick />)}
                                        <p className='text-[16px] ff_inter font-bold leading-[146%] text-[#808080]'>4 Subdomains</p>
                                    </div>
                                    <div className='flex gap-[24px] items-center'>
                                        {show ? (<RedTick />) : (<Blacktick />)}
                                        <p className='text-[16px] ff_inter font-bold leading-[146%] text-[#808080]'>1 Parked Domain</p>
                                    </div>
                                    <div className='flex gap-[24px] items-center'>
                                        {show ? (<RedTick />) : (<Blacktick />)}
                                        <p className='text-[16px] ff_inter font-bold leading-[146%] text-[#808080]'>2 Websites</p>
                                    </div>
                                    <div className='flex gap-[24px] items-center'>
                                        {show ? (<RedTick />) : (<Blacktick />)}
                                        <p className='text-[16px] ff_inter font-bold leading-[146%] text-[#808080]'>Free SSL</p>
                                    </div>
                                    <div className='flex gap-[24px] items-center'>
                                        {show ? (<RedTick />) : (<Blacktick />)}
                                        <p className='text-[16px] ff_inter font-bold leading-[146%] text-[#808080]'>Softaculous</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GetStarted