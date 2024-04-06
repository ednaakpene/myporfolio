import React from 'react';
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour,projectFive, projectSix } from "../../assets/index";
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
          globeLink="https://aptlify.vercel.app/"

        />
        <ProjectsCard
          title="PORTFOLIO WEBSITE"
          des=" A portfolio Website with an admin dashboard where you can add, update and delete skills, projects, achievements,blogs and experiences. "
          src={projectTwo}
          githubLink="https://github.com/Treycie/Apt-Portfolio"
          globeLink="https://apt-portfolio.vercel.app/"
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
          globeLink="https://recipe-app-nu-two.vercel.app/"

        />
        <ProjectsCard
          title="TODO APP"
          des=" A todo app where you can add, delete and display a list of todos"
          src={projectFive}
          githubLink="https://github.com/ednaakpene/todo-app"

        />
        <ProjectsCard
          title="A WORDLE GAME APP"
          des=" An online word puzzle game where players have to guess a secret five-letter word within six attempts. After each guess, the game provides feedback by coloring the letters of the guessed word to indicate if they are correct and in the right position (colored in green)
          or correct but in the wrong position (colored in yellow) or incorrect (colored in gray)"
          src={projectSix}
          githubLink="https://github.com/ednaakpene/Word-master-game"
          globeLink="https://word-master-game.vercel.app/"

        />
      </div>
    </section>
  );
}

export default Projects