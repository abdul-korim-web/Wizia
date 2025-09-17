import React from "react";
import Button from "@mui/material/Button";
import bg from "../../../public/image/bg.png"

const Hero = () => {
  return (
    <>
      <section className="herosection py-20 px-5 bg-[url('image/bg.png')] bg-no-repeat  bg-cover md:w-full  md:py-50 md:px-10 md:flex   ">
        <div className="flex flex-col space-y-[8px] md:w-1/2 md:flex md:flex-col w-full items-center md:items-start md:px-10">
          <h2 className="text-[#0FF1F6] text-[16px]  md:text-[24px]">AI SDRs (aiDRs)</h2>
          <h2 className=" italic  text-[40px] md:text-[64px] font-semibold ">More leads, <br /> less people.</h2>
          <p className="text-[18px]  text-gray-200 md:text-[20px] ml-5 md:w-[70%] md:ml-0">
            Train an aiDR on your ICP and messaging matrix. Activate it on a
            patch. It will send personalized sequences to every target contact.
          </p>
          <Button variant="contained" sx={{background:"#0FF1F6",color:"#002228", padding:"16px 18px", marginTop:"12px", borderRadius:"100px"}}>Sign Up for the Beta <i class="fa-solid fa-arrow-right pl-2 rotate-[-20deg]"></i>  </Button>
        </div>
      </section>
    </>
  );
};

export default Hero;
