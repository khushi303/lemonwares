import React from 'react';
import Workjpnl from '../assets/images/png/workjpnl.png';
import Workkorane from '../assets/images/png/workkorane.png';
import Worknadine from '../assets/images/png/worknadine.png';
import Workleeve from '../assets/images/png/workleeve.png';
import Workjangro from '../assets/images/png/workjrango.png';
import Workcrypto from '../assets/images/png/workcrypto.png';

const Work = () => {
    return (
        <>
            <div className='container mx-auto xl:max-w-[1218px] xl:px-3 px-6'>
                <div className='flex flex-row flex-wrap justify-between pb-[19px]'>
                    <div data-aos="fade-right" className='lg:w-[50%] w-full'>
                        <h2 className='sm:text-[48px] text-[35px] ff_inter font-extrabold leading-[133.333%] tracking-[#18191F] lg:max-w-[445px]'>We serve over 100
                            Nigerian Websites</h2>
                        <p className='text-[18px] font-normal leading-[177.778%] text-[#18191F] ff_inter lg:max-w-[445px] mt-[8px]'>Connect LemonWares with your favourite tools that you use daily and keep things on track.</p>
                    </div>
                    <div className='lg:w-[45.8%] w-full lg:mt-0 mt-10'>
                        <div className='flex flex-row flex-wrap justify-between'>
                            <div data-aos="zoom-in" className='sm:w-[32%] w-[49%] flex items-center justify-center'>
                                <img src={Workjpnl} alt="Workjpnl" className='max-w-[120px] w-full' />
                            </div>
                            <div data-aos="zoom-in" className='sm:w-[32%] w-[49%] flex items-center justify-center'>
                                <img src={Workkorane} alt="Workkorane" className='max-w-[120px] w-full' />
                            </div>
                            <div data-aos="zoom-in" className='sm:w-[32%] w-[49%] sm:mt-0 mt-6 flex items-center justify-center'>
                                <img src={Worknadine} alt="Worknadine" className='max-w-[120px] w-full' />
                            </div>
                            <div data-aos="zoom-in" className='sm:w-[32%] w-[49%] sm:mt-[54px] mt-6 flex items-center justify-center'>
                                <img src={Workleeve} alt="Workleeve" className='max-w-[120px] w-full' />
                            </div>
                            <div data-aos="zoom-in" className='sm:w-[32%] w-[49%] sm:mt-[54px] mt-6 flex items-center justify-center'>
                                <img src={Workjangro} alt="Workjangro" className='max-w-[120px] w-full' />
                            </div>
                            <div data-aos="zoom-in" className='sm:w-[32%] w-[49%] sm:mt-[54px] mt-6 flex items-center justify-center'>
                                <img src={Workcrypto} alt="Workcrypto" className='max-w-[120px] w-full' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Work