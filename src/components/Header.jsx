import React, { useState } from 'react';
import Logo from '../assets/images/png/logo.png';
import { Tel } from './Iconimg';

const Header = () => {
    const [nav, setNav] = useState(true);
    if (nav === false) {
        document.body.classList.add("max-lg:overflow-hidden")

    } else {
        document.body.classList.remove("max-lg:overflow-hidden")
    }
    return (
        <>
            <div className='container mx-auto xl:max-w-[1239px] xl:px-3 px-6'>
                <div className='flex items-center justify-between lg:mt-[41px] md:mt-[25px] mt-[16px] xl:mr-[77px]'>
                    <div className='flex items-center xl:gap-[138px] gap-[70px]'>
                        <div className='flex xl:gap-[65px] gap-[35px] items-center w-full'>
                            <a href="#">
                                <img src={Logo} alt="Logo" className='!max-w-[90.811px] h-[60px] w-full' />
                            </a>
                            <a href="#services" className='text-[15px] lg:block hidden font-semibold text-black no-underline whitespace-nowrap after:absolute relative after:transition-all after:duration-300 after:ease-linear after:h-[2px] after:rounded-[10px] after:bg-[#B00000] after:left-[11%] after:right-[89%] hover:after:right-[11%] after:bottom-[-4px]'>Our Services</a>
                        </div>
                        <div className='flex items-center xl:gap-[33px] gap-[15px]'>
                            <a href="#about" className='lg:block hidden text-[15px] font-semibold text-black no-underline after:absolute relative after:transition-all after:duration-300 after:ease-linear after:left-[11%] after:right-[89%] hover:after:right-[11%] after:h-[2px] after:rounded-[10px] after:bg-[#B00000] after:bottom-[-4px]'>About</a>
                            <a href="#blognews" className='lg:block hidden text-[15px] font-semibold text-black no-underline after:absolute relative after:transition-all after:duration-300 after:ease-linear after:left-[11%] after:right-[89%] hover:after:right-[11%] after:h-[2px] after:rounded-[10px] after:bg-[#B00000] after:bottom-[-4px]'>Blog&News</a>
                            <a href="#contact" className='lg:block hidden text-[15px] font-semibold text-black no-underline after:absolute relative after:transition-all after:duration-300 after:ease-linear after:left-[11%] after:right-[89%] hover:after:right-[11%] after:h-[2px] after:rounded-[10px] after:bg-[#B00000] after:bottom-[-4px]'>Contact</a>
                        </div>
                    </div>
                    <div className='flex items-center gap-[30px]'>
                        <a href="#account" className='lg:block hidden text-[15px] font-semibold text-black no-underline after:absolute relative after:transition-all after:duration-300 after:ease-linear after:left-[11%] after:right-[89%] hover:after:right-[11%] after:h-[2px] after:rounded-[10px] after:bg-[#B00000] after:bottom-[-4px]'>Account</a>
                        <div className='w-[1px] h-[19px] bg-[#DAD8D8] hidden lg:block'></div>
                        <a href="tel:2349067322844" className='hidden lg:flex gap-[6px] items-center'>
                            <Tel />
                            <p className='lg:block hidden text-[16px] font-semibold text-black hover:text-[#B00000] transition-colors duration-300 ease-linear leading-[285%]'>+2349067322844</p>
                        </a>
                    </div>
                    <ul className={`${nav ? "left-[-100%]" : "left-0"} lg:hidden flex max-lg:fixed max-lg:top-0 max-lg:h-full max-lg:w-full max-lg:z-[7] bg-white max-lg:transition-all max-lg:duration-300 max-lg:ease-linear max-lg:min-h-screen flex-col gap-6 items-center justify-center`}>
                        <a href="#services" onClick={() => setNav(!nav)} className='text-[15px] font-semibold text-black no-underline whitespace-nowrap  after:absolute relative after:transition-all after:duration-300 after:ease-linear after:left-[11%] after:right-[89%] hover:after:right-[11%] after:h-[2px] after:rounded-[10px] after:bg-[#B00000] after:bottom-[-4px]'>Our Services</a>
                        <a href="#about" onClick={() => setNav(!nav)} className='text-[15px] font-semibold text-black no-underline  after:absolute relative after:transition-all after:duration-300 after:ease-linear after:left-[11%] after:right-[89%] hover:after:right-[11%] after:h-[2px] after:rounded-[10px] after:bg-[#B00000] after:bottom-[-4px]'>About</a>
                        <a href="#blognews" onClick={() => setNav(!nav)} className='text-[15px] font-semibold text-black no-underline  after:absolute relative after:transition-all after:duration-300 after:ease-linear after:left-[11%] after:right-[89%] hover:after:right-[11%] after:h-[2px] after:rounded-[10px] after:bg-[#B00000] after:bottom-[-4px]'>Blog&News</a>
                        <a href="#contact" onClick={() => setNav(!nav)} className='text-[15px] font-semibold text-black no-underline  after:absolute relative after:transition-all after:duration-300 after:ease-linear after:left-[11%] after:right-[89%] hover:after:right-[11%] after:h-[2px] after:rounded-[10px] after:bg-[#B00000] after:bottom-[-4px]'>Contact</a>
                        <a href="#account" onClick={() => setNav(!nav)} className='text-[15px] font-semibold text-black no-underline  after:absolute relative after:transition-all after:duration-300 after:ease-linear after:left-[11%] after:right-[89%] hover:after:right-[11%] after:h-[2px] after:rounded-[10px] after:bg-[#B00000] after:bottom-[-4px]'>Account</a>
                        <a href="tel:2349067322844" className='flex gap-[6px] items-center'>
                            <Tel />
                            <p className='text-[16px] font-semibold text-black leading-[285%] hover:text-[#B00000] transition-colors duration-300 ease-linear'>+2349067322844</p>
                        </a>
                    </ul>
                    <div onClick={() => setNav(!nav)} className='lg:hidden w-[27px] h-[21px] relative z-[7] flex justify-between flex-col'>
                        <span className={`${nav ? '' : "rotate-[50deg] translate-y-[15px]"} bg-[#B00000] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}></span>
                        <span className={`${nav ? '' : "hidden"} bg-[#B00000] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}></span>
                        <span className={`${nav ? '' : "rotate-[-50deg] translate-y-[-50%]"} bg-[#B00000] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;