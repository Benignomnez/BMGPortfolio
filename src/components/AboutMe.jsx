import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import drflag from "../assets/drflag.png";
import pe1 from "../assets/sec-2-p-e-1.png";
import pe2 from "../assets/sec-2-p-e-2.png";
import Div from "./Div";

const AboutMe = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [100, 0], { clamp: false });
  const y2 = useTransform(scrollY, [0, 500], [0, -200], { clamp: false });
  return (
    <div
      id="about"
      className="w-full py-[50px] md:py-[100px] bg-white text-black relative overflow-hidden"
    >
      {/* BACKGROUND ELEMENTS START */}
      <span className="sec-2-bg-gradient" />
      <motion.img className="sec-2-p-e-1" style={{ y: y1 }} src={pe1} />
      <motion.img className="sec-2-p-e-2" style={{ y: y2 }} src={pe2} />
      {/* BACKGROUND ELEMENTS END */}

      <Wrapper>
        {/* HEADING START */}
        <Div className="text-[40px] md:text-[90px] leading-[52px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-[25px] md:mb-[40px] 2xl:mb-[60px] flex flex-col relative">
          <span>A Product Designer</span>
          <span className="flex items-center gap-2">
            <span>Based</span>
            <img
              src={drflag}
              alt=""
              className="w-[70px] md:w-[150px] 2xl:w-[190px] block mt-1 md:mt-2"
            />
            <span>Dominican Republic</span>
          </span>
        </Div>
        {/* HEADING END */}

        {/* PARAGRAPH START */}
        <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
          As a dedicated junior full-stack developer, I specialize in crafting
          scalable and maintainable web applications using cutting-edge
          technologies like React and TypeScript. My journey in the realm of web
          development has been guided by a relentless pursuit of technical
          excellence, aiming to meet industry-best practices. Leveraging a
          strong foundation in HTML, CSS, and JavaScript, I'm committed to
          delivering high-quality software solutions that stand the test of
          time.
        </Div>
        {/* PARAGRAPH END */}

        {/* PARAGRAPH START */}
        <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
          In my current role, I focus on building responsive and dynamic user
          interfaces with React, while ensuring backend stability with Node.js
          and Express. Utilizing TypeScript for type safety and better code
          quality, my aim is to create software that is not only functional but
          also robust and easy to maintain. As I continue to hone my skills, I
          am constantly exploring the latest tools and methodologies that can
          help me achieve my goal of becoming fluent in today's most in-demandS
          technologies.
        </Div>
        {/* PARAGRAPH END */}

        
      </Wrapper>
    </div>
  );
};

export default AboutMe;
