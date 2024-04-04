import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour,projectFive } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="PROJECTS I HAVE WORKED ON"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="MOVIE APP"
          des=" A movie app connecting to the TMDB database which shows popular, upcoming and toprated movies and a search box for searching dynamically for movies."
          src={projectOne}
          githubLink="https://github.com/Treycie/Aptlify"

        />
        <ProjectsCard
          title="PORTFOLIO WEBSITE"
          des=" A portfolio Website with an admin dashboard where you can add, update, delete skills, projects, acheivements and experiences. "
          src={projectTwo}
          githubLink="https://github.com/Treycie/Apt-Portfolio"
        />
        <ProjectsCard
          title="E-COMMERCE WEBSITE"
          des=" An E-commerce website for buying and selling agro produce where a buyer or seller can add items to cart and checkout or upload products for sale respectively.
          "
          src={projectThree}
          githubLink="https://github.com/TeamApt-Mest/AgroApt/tree/dev"

        />
         <ProjectsCard
          title="RECIPE APP"
          des=" A recipe app where you can display a list of recipes and also add new recipes"
          src={projectFour}
          githubLink="https://github.com/ednaakpene/recipe-app"

        />
        <ProjectsCard
          title="TODO APP"
          des=" A todo app where you can add, delete and display a list of todos"
          src={projectFive}
          githubLink="https://github.com/ednaakpene/todo-app"

        />
      </div>
    </section>
  );
}

export default Projects