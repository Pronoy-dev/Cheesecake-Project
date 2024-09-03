import React from "react";
import menucardImg01 from "../../assets/Menu/menuCardImg01.png";
import menucardImg02 from "../../assets/Menu/menuCardImg02.png";
import menucardImg03 from "../../assets/Menu/menuCardImg03.png";
import { FaStar } from "react-icons/fa";
import { PiCurrencyDollarBold } from "react-icons/pi";

const Menu = () => {
  const allMenuCard = [
    {
      id: 1,
      Img: menucardImg01,
      title: "Blueberry Cheesecake",
      details: "Blueberry love, cheesecake delight!",
      dollrIcon: <PiCurrencyDollarBold />,
      Rs: "9.00",
    },
    {
      id: 2,
      Img: menucardImg02,
      title: "Biscoff Cheesecake",
      details: "Biscoff adores cheesecake magic",
      dollrIcon: <PiCurrencyDollarBold />,
      Rs: "11.00",
    },
    {
      id: 3,
      Img: menucardImg03,
      title: "Chocolate Cheesecake",
      details: "Cherish Chocolate, relish cheesecake magic!",
      dollrIcon: <PiCurrencyDollarBold />,
      Rs: "10.00",
    },
  ];
  return (
    // menu part start
    <>
      <div className="container bg-[#FFF8E1] p-10 ">
        {/* title part  */}
        <div>
          <h3 className="text-title_color text-[64px] font-custom_Inika text-center font-normal leading-[83px]  ">
            Our Menu
          </h3>
        </div>
        {/* title part  */}

        {/* menu card main */}

        <div className=" flex justify-evenly items-center mt-9">
          {/* menu card ======= */}
          {allMenuCard?.map((item) => (
            <div
              className="w-[355px] pl-5 pr-9 pt-[33px] pb-8 shadow-xl text-center rounded-[41px] hover:shadow-2xl hover:shadow-[#4D422C] duration-300  "
              key={item.id}
            >
              {/* picture ========== */}
              <picture>
                <img src={item.Img} alt={item.Img} />
              </picture>
              {/* card title ============= */}
              <h4 className="text-[#1D2729] text-left font-custom_Inika font-bold text-[25px] leading-8 mt-5 ">
                {item.title}
              </h4>
              {/* card details ================ */}
              <p className="text-[#555555] text-left font-custom_recursive font-normal text-[13px] leading-8">
                {item.details}
              </p>

              <div className="flex text-[#6A4028] justify-between items-center mt-6 ">
                <div className="flex items-center">
                  <span className="font-custom_inter font-bold text-[18px] leading-5 text-[#53A623] mb-[-2px] mr-[-2px] ">
                    {item.dollrIcon}
                  </span>
                  <span className="font-custom_inter font-bold text-[21px] leading-6 ">
                    {item.Rs}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  {[...new Array(5)].map((item, index) => (
                    <FaStar />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* menu card  */}
      </div>
    </>
  );
};

export default Menu;
