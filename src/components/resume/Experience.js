import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div className="flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px]">2021 - 2024</p>
        <h2 className="text-4xl font-bold">Experience</h2>
      </div>
      <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
      <ResumeCard
          title="Front End Developer Intern"
          subTitle="Coxtreme (April 2024)"
          location="VIRTUAL"
          des="Designed an admin dashboard template for a ride hailing app using FIGMA."
          des1="Worked closely with software enginners to build an admin dashboard portal for a ride hailing up to show the metrics,and visualize the data from the app."
        />
        <ResumeCard
          title="Web Developer Intern"
          subTitle="Moreton  Bay Regional Council (Feb 2024)"
          location="VIRTUAL"
          des="Initiated and contributed to developing a website feature, gaining valuable experience and enhancing problem-solving skills."
          des1="Worked closely with UX/UI designers to implement visually appealing and user-friendly interfaces."
          des2="Participated in regular code reviews to ensure code quality, maintainability, and adherence to best practices."
        />
        <ResumeCard
          title="Research Scientist"
          subTitle="CSIR Water Research Institute (Nov 2022- Nov 2023)"
          location="ACCRA"
          des="Implemented data analysis algorithms, contributing to improved efficiency in data processing during research projects."
          des1="Engaged in interdisciplinary research initiatives, gaining exposure to diverse perspectives and building effective communication skills within a scientific team.
          "
        />
      </div>
    </motion.div>
  );
};

export default Experience;
