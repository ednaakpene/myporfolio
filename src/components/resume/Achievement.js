import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div className="py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px]">2023-2024</p>
        <h2 className="text-4xl font-bold">Achievements</h2>
      </div>
      <div className="mt-14 w-full h-[400px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-20">
        <ResumeCard
          title="Winner of Portfolio Project Demo."
          subTitle="MEST AFRICA (March 2024)"
          location="ACCRA"
        />

        <ResumeCard
          title="Best Performing National Service Personnel."
          subTitle="CSIR-WRI Biomedical and Public Health Research Unit (Nov 2023)."
          location="ACCRA"
        />

        
      </div>
    </motion.div>
  );
};

export default Achievement;
