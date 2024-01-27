import React from "react";
import { Whatsappsvg } from "./Iconimg";
import RedImg1 from "../assets/images/png/redimg1.png";
import RedImg2 from "../assets/images/png/redimg2.png";
import RedImg3 from "../assets/images/png/redimg3.png";

const GetInTouch = () => {
    return (
        <>
            <div id="contact" className="lg:pt-[106px] lg:pb-[110px] sm:py-[60px] py-[40px]">
                <div className="container mx-auto xl:max-w-[1296px] xl:px-3 px-6 ">
                    <div data-aos="zoom-in" className="rounded-[16px] relative flex flex-col items-center justify-center sm:pt-[80px] sm:pb-[88px] py-[50px] px-3 sm:ml-[15px] sm:mr-[25px] bg-[#F7FAFE]">
                        <h2 className="text-[#2E2E2E] ff_poppins font-semibold lg:text-[64px] sm:text-[43px] text-[22px] leading-[137.5%] text-center sm:mb-[40px] mb-[20px] lg:max-w-[1024px] ">
                            We're here to make your website awesome.
                        </h2>
                        <div>
                            <a
                                className="px-[16px] pt-3 pb-[11px] bg-[#B00000] hover:shadow-[0_3px_20px_rgba(176,0,0,.40)] transition-all ease-linear duration-500 rounded-lg inline-flex items-start justify-center gap-[9px] text-white ff_poppins text-sm !leading-[171.429%] font-normal"
                                href="https://web.whatsapp.com/"
                                target="blank"
                            >
                                <Whatsappsvg /> Get in touch with us
                            </a>
                        </div>
                        <img
                            src={RedImg1}
                            alt="RedImg1"
                            className="absolute sm:right-[-25px] right-0 bottom-[30px] w-full sm:max-w-[72px] max-w-[25px] "
                        />
                        <img
                            src={RedImg2}
                            alt="RedImg2"
                            className="absolute w-full sm:max-w-[40px] max-w-[20px] top-0 left-[31%] "
                        />
                        <img
                            src={RedImg3}
                            alt="RedImg3"
                            className="absolute bottom-[30%] sm:left-[-15px] left-0 w-full max-w-[25px]"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default GetInTouch;