import React from 'react'
import { skillsdata} from '../../constants/index.js';
import SkillCard from "../skills/skillcard.jsx";

const Skills = () => {
    return (
      <>
      <div id='skills-section'>
        <h1 className='flex justify-center text-4xl font-bold text-white p-12'>My Skills</h1>
      <div className='flex justify-center p-10'>
      <div className='grid grid-cols-4 gap-12'>
         {
          skillsdata.map((skill, index) => (<SkillCard key ={index} skill ={skill}/>))
         }
      </div>
      </div>
      </div>
      </>
    );
}

export default Skills