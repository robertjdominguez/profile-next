import styled from "styled-components";
import { motion } from "framer-motion";

const ProjectSlide = ({ project }) => {
  return (
    <Slide
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      key={`${project.img}`}
      src={`${project.img}`}
    />
  );
};

export default ProjectSlide;

const Slide = styled(motion.img)`
  /* border-radius: 13px; */
  width: 50%;
  height: auto;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 90%;
  }
`;
