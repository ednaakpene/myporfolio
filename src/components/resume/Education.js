import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] " >2015 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="WEB DEVELOPMENT"
            subTitle="MEST AFRICA (Feb 2024 - April 2024)"
            location="ACCRA"
          />
          <ResumeCard
            title="SOFTWARE ENGINEERING
            "
            subTitle="ALX AFRICA (May 2023- Present)"
            location="VIRTUAL"
          />
          <ResumeCard
            title="BSC BIOCHEMISTRY"
            subTitle="KNUST (Aug 2018 - Nov 2022)"
            location="KUMASI"
          />
          <ResumeCard
            title="WASSCE"
            subTitle="HOLY CHILD SCHOOL (Sep 2015 - June 2018)"
            location="CAPECOAST"
          />
        </div>

      
    </motion.div>
  );
}

export default Education