import React from 'react';
import { Timer, Settings, Gallery, Headphone } from './Iconimg';

const CardsSvg = () => {
    return (
        <>
            <div className='container mx-auto xl:max-w-[1308px] xl:px-3 px-6'>
                <div className='flex flex-row flex-wrap justify-between xl:pl-[40px] xl:pr-[50px]'>
                    <div data-aos="fade-down" className='xl:w-[21.7%] md:w-[46%] group cursor-pointer flex items-center justify-end flex-col'>
                        <Timer />
                        <h3 className='text-[20px] font-bold text-black text-center mt-[12px] mb-[4px]'>99.9% Uptime</h3>
                        <p className='text-[12px] font-light text-black text-center'>We Keep Your Web build Online 24x7x365.
                            Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.</p>
                    </div>
                    <div data-aos="fade-down" className='xl:w-[21.7%] group cursor-pointer md:w-[46%] flex items-center justify-center flex-col xl:mt-0 mt-6'>
                        <Settings />
                        <h3 className='text-[20px] font-bold text-black text-center mt-[12px] mb-[4px] whitespace-nowrap'>Blazing Fast Web Hosting</h3>
                        <p className='text-[12px] font-light text-black text-center'>We Keep Your Web build Online 24x7x365.
                            Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.</p>
                    </div>
                    <div data-aos="fade-down" className='xl:w-[21.7%] group cursor-pointer md:w-[46%] flex items-center justify-center flex-col xl:mt-0 mt-6'>
                        <Gallery />
                        <h3 className='text-[20px] font-bold text-black text-center mt-[12px] mb-[4px]'>Free SSL Certificates</h3>
                        <p className='text-[12px] font-light text-black text-center'>We Keep Your Web build Online 24x7x365.
                            Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.</p>
                    </div>
                    <div data-aos="fade-down" className='xl:w-[21.7%] group cursor-pointer md:w-[46%] flex items-center justify-center flex-col xl:mt-0 mt-6'>
                        <Headphone />
                        <h3 className='text-[20px] font-bold text-black text-center mt-[12px] mb-[4px]'>24x7 Friendly Support</h3>
                        <p className='text-[12px] font-light text-black text-center'>We Keep Your Web build Online 24x7x365.
                            Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardsSvg