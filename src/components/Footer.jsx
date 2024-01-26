import React from 'react';
import Logo from '../assets/images/png/brandingimg.png';

const Footer = () => {
    return (
        <>
            <div className="bg-[#B00000] lg:pt-[64px] lg:pb-[80px] py-[60px]">
                <div className="container xl:max-w-[1245px] mx-auto lg:px-3 px-6">
                    <div className="flex flex-row justify-between flex-wrap">
                        <div className="lg:w-4/12 w-full">
                            <a href="">
                                <img
                                    src={Logo}
                                    alt="Logo"
                                    className="w-full h-[80px] max-w-[120.959px]"
                                />
                            </a>
                            <p className="pt-4 text-[#E6E6E6] ff_inter font-normal text-base !leading-[200%] ">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                                urna, porttitor rhoncus dolor purus non enim praesent elem
                            </p>
                        </div>
                        <div className="lg:w-7/12 w-full pt-9 lg:pt-0">
                            <div className="flex flex-row justify-between flex-wrap">
                                <div className="md:w-[18%] w-6/12">
                                    <ul className=" flex flex-col gap-6">
                                        <li className="text-white text-base !leading-[150%] font-bold ff_inter ">
                                            Service
                                        </li>
                                        <li>
                                            <a
                                                className="text-[#E6E6E6] hover:text-white transition-colors ease-linear duration-500 text-base !leading-[200%] pb-1 font-normal ff_inter relative after:absolute after:bg-white after:h-[0.5px] after:bottom-0 after:left-[9%] after:right-[91%] after:hover:right-[9%] after:transition-all after:ease-linear after:duration-500 "
                                                href=""
                                            >
                                                Domain
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-[#E6E6E6] hover:text-white transition-colors ease-linear duration-500 text-base !leading-[200%] pb-1 whitespace-nowrap font-normal ff_inter relative after:absolute after:bg-white after:h-[0.5px] after:bottom-0 after:left-[9%] after:right-[91%] after:hover:right-[9%] after:transition-all after:ease-linear after:duration-500 "
                                                href=""
                                            >
                                                Shared Hosting
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-[#E6E6E6] hover:text-white transition-colors ease-linear duration-500 text-base !leading-[200%] whitespace-nowrap pb-1 font-normal ff_inter relative after:absolute after:bg-white after:h-[0.5px] after:bottom-0 after:left-[9%] after:right-[91%] after:hover:right-[9%] after:transition-all after:ease-linear after:duration-500 "
                                                href=""
                                            >
                                                Cloud Hosting
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-[#E6E6E6] whitespace-nowrap hover:text-white transition-colors ease-linear duration-500 text-base !leading-[200%] pb-1 font-normal ff_inter relative after:absolute after:bg-white after:h-[0.5px] after:bottom-0 after:left-[9%] after:right-[91%] after:hover:right-[9%] after:transition-all after:ease-linear after:duration-500 "
                                                href=""
                                            >
                                                Private Hosting
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="md:w-[21%] w-6/12">
                                    <ul className="flex flex-col gap-6">
                                        <li className="text-white text-base !leading-[150%] font-bold ff_inter ">
                                            Hosting
                                        </li>
                                        <li>
                                            <a
                                                className="text-[#E6E6E6] hover:text-white transition-colors ease-linear duration-500 text-base !leading-[200%] whitespace-nowrap pb-1 font-normal ff_inter relative after:absolute after:bg-white after:h-[0.5px] after:bottom-0 after:left-[9%] after:right-[91%] after:hover:right-[9%] after:transition-all after:ease-linear after:duration-500 "
                                                href=""
                                            >
                                                Cheap Hosting
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-[#E6E6E6] hover:text-white transition-colors ease-linear duration-500 text-base !leading-[200%] whitespace-nowrap pb-1 font-normal ff_inter relative after:absolute after:bg-white after:h-[0.5px] after:bottom-0 after:left-[9%] after:right-[91%] after:hover:right-[9%] after:transition-all after:ease-linear after:duration-500 "
                                                href=""
                                            >
                                                Hosting Wordpress
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-[#E6E6E6] hover:text-white transition-colors ease-linear duration-500 text-base !leading-[200%] pb-1 font-normal ff_inter relative after:absolute after:bg-white after:h-[0.5px] after:bottom-0 after:left-[9%] after:right-[91%] after:hover:right-[9%] after:transition-all after:ease-linear after:duration-500 "
                                                href=""
                                            >
                                                Email Hosting
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-[#E6E6E6] hover:text-white transition-colors ease-linear duration-500 text-base !leading-[200%] pb-1 whitespace-nowrap font-normal ff_inter relative after:absolute after:bg-white after:h-[0.5px] after:bottom-0 after:left-[9%] after:right-[91%] after:hover:right-[9%] after:transition-all after:ease-linear after:duration-500 "
                                                href=""
                                            >
                                                Hosting Unlimited
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="md:w-[18%] w-6/12 pt-7 md:pt-0">
                                    <ul className="flex flex-col gap-6">
                                        <li className="text-white text-base !leading-[150%] font-bold ff_inter ">
                                            Company
                                        </li>
                                        <li>
                                            <a
                                                className="text-[#E6E6E6] hover:text-white transition-colors ease-linear duration-500 text-base !leading-[200%] pb-1 font-normal ff_inter relative after:absolute after:bg-white after:h-[0.5px] after:bottom-0 after:left-[9%] after:right-[91%] after:hover:right-[9%] after:transition-all after:ease-linear after:duration-500 "
                                                href=""
                                            >
                                                About
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-[#E6E6E6] hover:text-white transition-colors ease-linear duration-500 text-base !leading-[200%] pb-1 font-normal ff_inter relative after:absolute after:bg-white after:h-[0.5px] after:bottom-0 after:left-[9%] after:right-[91%] after:hover:right-[9%] after:transition-all after:ease-linear after:duration-500 "
                                                href=""
                                            >
                                                Career
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-[#E6E6E6] hover:text-white transition-colors ease-linear duration-500 text-base !leading-[200%] pb-1 font-normal ff_inter relative after:absolute after:bg-white after:h-[0.5px] after:bottom-0 after:left-[9%] after:right-[91%] after:hover:right-[9%] after:transition-all after:ease-linear after:duration-500 "
                                                href=""
                                            >
                                                Contact Us
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="md:w-[18%] w-6/12 pt-7 md:pt-0">
                                    <ul className="flex flex-col gap-6">
                                        <li className="text-white text-base !leading-[150%] font-bold ff_inter ">
                                            Help
                                        </li>
                                        <li>
                                            <a
                                                className="text-[#E6E6E6] hover:text-white transition-colors ease-linear duration-500 text-base !leading-[200%] pb-1 font-normal ff_inter relative after:absolute after:bg-white after:h-[0.5px] after:bottom-0 after:left-[9%] after:right-[91%] after:hover:right-[9%] after:transition-all after:ease-linear after:duration-500 "
                                                href=""
                                            >
                                                FAQ
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-[#E6E6E6] hover:text-white transition-colors ease-linear duration-500 text-base !leading-[200%] pb-1 font-normal ff_inter relative after:absolute after:bg-white after:h-[0.5px] after:bottom-0 after:left-[9%] after:right-[91%] after:hover:right-[9%] after:transition-all after:ease-linear after:duration-500 "
                                                href=""
                                            >
                                                Help support
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:pt-[104px] md:pt-[60px] pt-[40px]">
                        <p className="text-white ff_inter text-base !leading-[200%] font-normal ">
                            Built by Jeremiah with 🤍 in Lagos. Copyright 2021
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer