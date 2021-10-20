import { useState } from "react";
import styled from "styled-components";
import ProjectSlide from "./ProjectSlide";
import { motion, AnimateSharedLayout } from "framer-motion";
import { headingAnimations } from "../../styles/Lib";

const data = [
  {
    title: `Lit Chicken`,
    description: `Information about the site...blah, blah, blah.`,
    url: `http://litchicken.org`,
    img: `/chicken-brag.png`,
  },
  {
    title: `Status Code Game`,
    description: `Information about the site...blah, blah, blah.`,
    url: `http://litchicken.org`,
    img: `/code-brag.png`,
  },
  {
    title: `Summer at Altamont`,
    description: `Information about the site...blah, blah, blah.`,
    url: `http://litchicken.org`,
    img: `/summer-brag.png`,
  },
];

const Projects = () => {
  return (
    <Gallery
      variants={headingAnimations}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      <h2>My recent builds</h2>
      <p>
        These sites top the list of my recent work. Each of them was built using
        different stacks but all are excellent examples of the types of sites I
        enjoy creating.
      </p>
      <AnimateSharedLayout>
        <ProjectGallery
          variants={headingAnimations}
          initial='hidden'
          animate='visible'
          exit='hidden'
        >
          {data.map((project) => (
            <ProjectSlide project={project} key={`${project.img}`} />
          ))}
        </ProjectGallery>
      </AnimateSharedLayout>
    </Gallery>
  );
};

export default Projects;

const Gallery = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-top: 10vh;

  h2 {
    font-size: var(--hero);
    text-align: center;
    margin-bottom: none;
    padding-left: var(--padded-out);
    padding-right: var(--padded-out);
  }

  p {
    font-size: var(--sub-heading);
    max-width: 700px;
    align-self: center;
    margin-top: none;
    padding-left: var(--padded-out);
    padding-right: var(--padded-out);
  }
`;

export const ProjectGallery = styled(motion.div)`
  display: flex;
  /* gap: 40px; */
  width: 100%;
  gap: 40px;
  padding: 40px;
  overflow-x: scroll;
  /* justify-items: center; */
`;
