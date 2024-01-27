import React from 'react';
import Cryptolearninvest from '../assets/images/png/cryptolearninvest.png';
import { Skycommas } from './Iconimg';
import Jpnlimg from '../assets/images/png/jpnl.png';
import Brandingimg from '../assets/images/png/branding.png';
import PinkComa from '../assets/images/png/pinkcoma.png';

const Stories = () => {
    return (
        <>
            <div id='blognews' className='container mx-auto xl:max-w-[1218px] xl:px-3 px-6 lg:my-[105px] sm:my-[60px] my-[40px]'>
                <div className='flex flex-row flex-wrap justify-center relative xl:pt-[56px] lg:pt-[40px] pt-[20px]'>
                    <div className='md:w-1/2 flex flex-col md:items-end '>
                        <div data-aos="fade-down" className='max-w-[445px]'>
                            <h2 className='xl:text-[48px] md:text-[34px] sm:text-[48px] text-[34px] ff_inter font-extrabold text-[#18191F] leading-[133.333%]'>Real Stories from Real Customers</h2>
                            <p className='text-[18px] font-normal text-[#18191F] leading-[177.778%]'>Get inspired by these stories.</p></div>
                        <div data-aos="fade-right">
                            <div className='md:max-w-[350px] w-full rounded-[8px] bg-white shadow-[0px_10px_20px_0px_rgba(41,41,42,0.07)] cursor-pointer sm:pt-[40px] sm:px-[32px] md:pb-[96px] sm:pb-[32px] p-[16px] mt-[24px] hover:shadow-[0px_10px_18px_0px_rgba(41,41,42,0.20)] transition-shadow duration-300 ease-linear'>
                                <img src={Cryptolearninvest} alt="Cryptolearninvest" className='max-w-[120px] w-full ml-[32px]' />
                                <div className='flex gap-[16px] items-start pt-[12px]'>
                                    <div>
                                        <Skycommas />
                                    </div>
                                    <div>
                                        <p className='text-[16px] ff_inter font-normal leading-[200%] text-black md:max-w-[254px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
                                        <p className='text-[18px] font-bold text-[#18191F] leading-[155.556%] ff_inter mt-[24px]'>Floyd Miles</p>
                                        <p className='text-[14px] font-medium leading-[171.429%] text-[#969BAB] ff_inter'>Vice President, CLI</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2 md:pl-[30px] md:mt-0 mt-[32px]'>
                        <div data-aos="fade-left">
                            <div className='sm:pt-[39px] sm:pb-[14px] sm:px-[32px] p-[16px] rounded-[8px] cursor-pointer bg-white md:max-w-[445px] shadow-[0px_10px_20px_0px_rgba(41,41,42,0.07)] hover:shadow-[0px_10px_18px_0px_rgba(41,41,42,0.20)] transition-shadow duration-300 ease-linear'>
                                <img src={Jpnlimg} alt="Jpnlimg" className='max-w-[78.873px] w-full ml-[32px]' />
                                <div className='flex items-start gap-[16px] mt-[15px]'>
                                    <div>
                                        <Skycommas />
                                    </div>
                                    <div>
                                        <p className='md:max-w-[349px] ff_inter text-[16px] font-normal leading-[200%] text-black mb-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
                                        <p className='ff_inter text-[18px] font-bold leading-[155.556%] text-[#18191F]'>Jane Cooper</p>
                                        <p className='ff_inter text-[14px] font-medium leading-[171.429%] text-[#969BAB]'>CEO, JPNL</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up">
                            <div className='md:max-w-[350px] rounded-[8px] sm:pt-[40px] sm:pb-[32px] sm:px-[32px] p-[16px] cursor-pointer shadow-[0px_10px_20px_0px_rgba(41,41,42,0.07)] hover:shadow-[0px_10px_18px_0px_rgba(41,41,42,0.20)] transition-shadow duration-300 ease-linear mt-[32px]'>
                                <img src={Brandingimg} alt="Brandingimg" className='ml-[32px] max-w-[120px] w-full' />
                                <div className='flex items-start gap-[16px] mt-[15px]'>
                                    <div>
                                        <Skycommas />
                                    </div>
                                    <div>
                                        <p className='max-w-[254px] ff_inter text-[18px] font-normal leading-[177.778%] text-black mb-[24px]'>LemonWares saved our time in Hosting my company page.</p>
                                        <p className='ff_inter text-[18px] font-bold leading-[155.556%] text-[#18191F]'>Kristin Watson</p>
                                        <p className='ff_inter text-[14px] font-medium leading-[171.429%] text-[#969BAB]'>Co-Founder, LeeveOn Branding</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='xl:max-w-[143px] lg:max-w-[100px] max-w-[80px] absolute xl:left-[5%] left-0 top-0'>
                        <img src={PinkComa} alt="PinkComa" className='w-full' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Stories