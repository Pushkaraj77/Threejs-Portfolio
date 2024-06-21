import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
    variants={fadeIn("right", "spring", 0.5* index, 0.75)}
    className="w-full green-pink-gradient p-[1px]
    rounded-[20px] shadow-card"
    >
      <div
      options={{
        max:45,
        scale: 1,
        speed: 450
      }}
      className="bg-tertiary rounded-[20px] py-5 px-12
        min-h-[280px] flex flex-col justify-evenly 
        items-center"
      >
        <img src={icon} alt={title}
         className="w-16 h-16 object-contain"/>
         <h3 className="text-white text-[20px]
         font-bold text-center">{title}</h3>
      </div>
    </motion.div>

  </Tilt>
)
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl
        leading-[30px]"
      >
        I am a proficient MERN stack developer with a strong foundation in
        MongoDB, Express.js, React, and Node.js. I recently completed a
        six-month internship where I gained hands-on experience in building
        full-stack web applications, collaborating with cross-functional teams,
        and honing my problem-solving skills. My technical expertise extends to
        Next.js, which I use to create robust, server-side rendered
        applications, enhancing performance and SEO. Additionally, I am
        well-versed in TypeScript, enabling me to write more maintainable and
        error-free code. My solid understanding of JavaScript forms the backbone
        of my development capabilities, ensuring dynamic and interactive web
        experiences.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
