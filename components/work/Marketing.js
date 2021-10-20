import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { headingAnimations } from "../../styles/Lib";

const Marketing = () => {
  return (
    <MarketingHeader
      variants={headingAnimations}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      <Info
        variants={headingAnimations}
        initial='hidden'
        animate='visible'
        exit='hidden'
      >
        <h2>Fast Frameworks</h2>
        <p>
          I love working with front-end libraries like React. Great new
          frameworks like Gatsby and Next.js are creating the next era of
          incredibly fast sites that are literally anticipating users' needs and
          shifting infrastructure serverless.
        </p>
      </Info>
      <img src='/gauge.svg' />
      <Info
        variants={headingAnimations}
        initial='hidden'
        animate='visible'
        exit='hidden'
      >
        <h2>Intuitive UI's</h2>
        <p>
          It’s one thing for a site to function, but it’s another level of
          enjoyment when a user is comfortable and actually wants to be there. I
          take the time to develop an aesthetically pleasing and functional
          layout that targets users and drives them towards content.
        </p>
      </Info>
      <img src='/wire.svg' />
      <Info
        variants={headingAnimations}
        initial='hidden'
        animate='visible'
        exit='hidden'
      >
        <h2>Continued Support</h2>
        <p>
          Nobody likes being left high and dry. I work with clients to establish
          a clear understanding of what the final product will be. From the
          first phone call to the final handoff, everything is laid out clearly.
        </p>
      </Info>
      <img src='/chat.svg' />
    </MarketingHeader>
  );
};

export default Marketing;

export const MarketingHeader = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 40px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: none;
  place-items: start center;
  padding-left: var(--padded-out);
  padding-right: var(--padded-out);
  max-width: var(--maxxed-out);
  justify-items: center;
  img {
    width: 50%;
    height: auto;
  }
`;

export const Info = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 40vh;

  h2 {
    margin-top: 0;
  }
`;
