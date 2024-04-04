import React from 'react'

const Skillcard = ({skill}) => {
  return (
    
        <div className={`w-60 h-36 shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${skill.style}`}>
          <img src={skill.src} alt={skill.name} className='object-contain w-full h-[85%] overflow-hidden '/>
      <h3 className='text-white text-center'>{skill.name}</h3>
      </div>
    );
};

export default Skillcard