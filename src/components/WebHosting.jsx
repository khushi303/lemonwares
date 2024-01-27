import React from 'react';
import Panelimg from '../assets/images/png/panelimg.png';
import Imunifyimg from '../assets/images/png/imunify360.png';
import Litespeed from '../assets/images/png/litesspeed.png';
import Softcolous from '../assets/images/png/softcolous.png';
import Wordpress from '../assets/images/png/wordpress.png';
import Cloudfare from '../assets/images/png/cloudfare.png';

const WebHosting = () => {
    return (
        <>
            <div id='about' className='container mx-auto xl:max-w-[1308px] xl:px-3 px-6 lg:pt-[78px] lg:pb-[118px] sm:py-[60px] py-[40px]'>
                <div className='flex flex-row flex-wrap justify-between'>
                    <div className='lg:w-[49%] w-full'>
                        <h2 data-aos="fade-right" className='xl:text-[48px] lg:text-[38px] sm:text-[48px] text-[35px] font-extrabold ff_inter leading-[133.333%] text-[#18191F] mb-[20px]'>True Cloud Web  Hosting</h2>
                        <p data-aos="fade-right" className='text-[18px] font-normal text-[#18191F] leading-[177.778%] ff_inter lg:max-w-[573px]'>
                            True Cloud Web Hosting All of the hosting packages we offer are deployed instantly on our SSD powered cloud. We don’t use dedicated servers that operate on single pieces of hardware. Our entire infrastructure is built to be reliable, secure, and scalable.

                        </p>
                    </div>
                    <div className='lg:w-[46%] w-full lg:mt-0 mt-7'>
                        <div className='flex flex-row flex-wrap pt-[18px] justify-between'>
                            <div data-aos="zoom-in" className='sm:w-[26.5%] w-[47%] flex items-center justify-center'>
                                <img src={Panelimg} alt="Panelimg" className='sm:max-w-[140.714px] w-full' />
                            </div>
                            <div data-aos="zoom-in" className='sm:w-[26.5%] w-[47%] flex items-center justify-center'>
                                <img src={Imunifyimg} alt="Imunifyimg" className='sm:max-w-[125.424px] w-full' />
                            </div>
                            <div data-aos="zoom-in" className='sm:w-[26.5%] w-[47%] sm:mt-0 mt-6 flex items-center justify-center'>
                                <img src={Litespeed} alt="Litespeed" className='sm:max-w-[125px] w-full' />
                            </div>
                            <div data-aos="zoom-in" className='sm:w-[26.5%] w-[47%] sm:mt-[42px] mt-6 flex items-center justify-center'>
                                <img src={Softcolous} alt="Softcolous" className='sm:max-w-[172px] w-full' />
                            </div>
                            <div data-aos="zoom-in" className='sm:w-[26.5%] w-[47%] sm:mt-[42px] mt-6 flex items-center justify-center'>
                                <img src={Wordpress} alt="Wordpress" className='sm:max-w-[168px] w-full' />
                            </div>
                            <div data-aos="zoom-in" className='sm:w-[26.5%] w-[47%] sm:mt-[42px] mt-6 flex items-center justify-center'>
                                <img src={Cloudfare} alt="Cloudfare" className='sm:max-w-[143px] w-full' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WebHosting