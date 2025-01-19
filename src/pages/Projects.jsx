import { useState } from "react";
import ProjectCard from "../Components/ProjectCard";
import { motion } from "motion/react";

const Projects = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category);
  };

  const [projects, setProjects] = useState([]);
  const [openProjectId, setOpenProjectId] = useState(null);
  let selectedProject = projects.find((g) => g.id === openProjectId);

  const projectData = [
    {
      id: 1,
      name: "Accurate Software Integrators",
      imageUrl: "/images/visiting card logo.jpg",
      description:
        "We have developed our startup website utilizing ReactJS and Framer Motion for animations, ensuring a smooth, responsive, and fast-loading user experience. The design was crafted in Figma, and the site features a robust CMS for seamless backend integration.",
      toolsUsed: ["React, Framer-motion, Tailwind CSS"],

      liveLink: "https://accuratesoftwareandintegrators.com/",
    },
    {
      id: 2,
      name: "Maverick Turf",
      imageUrl: "/images/MT-LOGO.png",
      description:
        "This is a sample website developed for a turf facility in Coimbatore, hosted on a Cpanel subdomain. The site was created using React.js, with Tailwind CSS employed for styling, ensuring a responsive design that enhances user experience across various devices.",
      toolsUsed: ["React", "Tailwind CSS"],
      githubLink: "https://github.com/example/project1",
      liveLink: "https://sujith.ashwinsrivastava.com/",
    },
    {
      id: 3,
      name: "Portfolio",
      imageUrl: "/images/portfolio.webp",
      description:
        "This is my inaugural portfolio website, developed using React.js and Tailwind CSS. It features a responsive design that ensures optimal accessibility across mobile, tablet, and desktop devices, providing a seamless user experience.",
      toolsUsed: ["React", "Tailwind CSS"],

      liveLink: "https://sk-portfolio-blush.vercel.app/",
    },
  ];

  return (
    <div id="projects" className=" flex flex-col gap-10">
      <div className="shadow-lg  bg-[url('/images/Projects.jpg')] bg-cover bg-center bg-fixed  h-[400px] rounded-[100px] flex flex-col items-center justify-center gap-5">
        <h1 className=" lg:text-7xl text-5xl font-bold">PROJECTS</h1>
        <motion.img
          initial={{
            y: 0,
          }}
          whileHover={{
            y: 30,
          }}
          src="/images/down-arrow.png"
          className=" h-[50px] "
        />
      </div>

      <div className=" flex flex-col items-center justify-center gap-5">
        {" "}
        {projectData.map((data) => (
          <ProjectCard
            key={data.id}
            name={data.name}
            imageUrl={data.imageUrl}
            toolsUsed={data.toolsUsed}
            description={data.description}
            githubLink={data.githubLink}
            liveLink={data.liveLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
