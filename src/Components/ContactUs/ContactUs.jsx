import React from "react";
import ContactUsLogo from "../../assets/ContactUs assets/ContactUs.png";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

const ContactUs = () => {
  const footerItem = [
    <FaFacebook />,
    <FaInstagram />,
    <AiFillTwitterCircle />,
    <FaYoutube />,
  ];
  return (
    <>
      <div className="contactUs_part bg-[#fff8e1]">
        <div className="container m-auto">
          <div className="contactUs_part flex pb-24 pt-24">
            <div className="contactUs_left w-[60%]">
              <h1 className="justify-start font-Inika text-[64px] font-normal text-textPrimaryColor">
                Contact Us
              </h1>
              <p className="w-[480px] text-[20px] font-normal text-textPrimaryColor">
                Need to get in touch with us? Either fill out the form with your
                inquiry or find the department!
              </p>
              <picture>
                <img src={ContactUsLogo} alt={ContactUsLogo} />
              </picture>
              <div className="pt-11">
                <ul className="flex">
                  {footerItem.map((item) => (
                    <li>
                      <a
                        href=""
                        className="pr-6 text-3xl text-[#484848] transition-all ease-linear hover:text-[#FF9900]"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="pt-3 text-[20px] font-medium text-textPrimaryColor">
                Copyright 2024 Dscode | All rights reserved
              </p>
            </div>
            <div className="contactUs_right w-[40%] pt-28">
              <form className="mb-6 flex flex-col">
                <label>
                  <input
                    type="text"
                    placeholder="Name"
                    class="h-[62px] w-[413px] rounded-full pl-6 text-xl font-normal drop-shadow-xl"
                  />
                </label>

                <label className="pt-5">
                  <input
                    type="text"
                    placeholder="Email"
                    class="h-[62px] w-[413px] rounded-full pl-6 text-xl font-normal drop-shadow-xl"
                  />
                </label>

                <label className="pt-7">
                  <textarea
                    type="text"
                    placeholder="Your Message..."
                    class="h-[161px] w-[413px] rounded-lg pl-6 pt-6 align-top text-xl font-normal drop-shadow-xl"
                  ></textarea>
                </label>
              </form>
              <div>
                <button className="h-[69px] w-[417px] rounded-full bg-[#FFC468] text-2xl font-normal">
                  Contact us now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
