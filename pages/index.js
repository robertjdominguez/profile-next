import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { headingAnimations, headingChildren } from "../styles/Lib";
import Arrow from "../styles/Arrow";
import { InView } from "react-intersection-observer";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Hero
        variants={headingAnimations}
        initial='hidden'
        animate='visible'
        exit='hidden'
      >
        <motion.div variants={headingChildren}>
          <motion.h1 variants={headingChildren}>
            I’m <span>Rob</span>, welcome to my site.
          </motion.h1>
          <motion.p variants={headingChildren}>
            I’m an <span>educator</span> and <span>developer</span> that likes
            to solve problems.
          </motion.p>
        </motion.div>
        <motion.img
          variants={headingChildren}
          src='https://pbs.twimg.com/profile_images/938781090038259712/-9u8MJrL_400x400.jpg'
        />
        {/* <motion.p variants={headingChildren}>Image...</motion.p> */}
        <Arrow />
      </Hero>
      <InView threshold={0.15} triggerOnce='true'>
        {({ inView, ref, entry }) => (
          <LearnMore
            ref={ref}
            variants={headingAnimations}
            initial='hidden'
            animate={inView ? "visible" : "hidden"}
            exit='hidden'
          >
            <h2>Learn more about what I do.</h2>
            <p>
              I like to build things and teach others. Sometimes I get to work
              on awesome projects and these passions overlap. Check out my
              development philosophy or read a bit about what I teach and work
              on throughout the day.
            </p>
            <div>
              <Link href='/development' scroll={false}>
                <button>Development</button>
              </Link>
              <Link href='/blog' scroll={false}>
                <button>Blog</button>
              </Link>
            </div>
          </LearnMore>
        )}
      </InView>
    </>
  );
}

const Hero = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  /* grid-gap: 10px; */
  margin-top: 10vh;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: none;
  padding-left: var(--padded-out);
  padding-right: var(--padded-out);
  max-width: var(--maxxed-out);
  min-height: 100vh;
  place-items: center center;
  h1 {
    font-weight: 600;
    font-size: var(--hero);

    span {
      font-weight: 900;
    }
  }

  img {
    border-radius: 50%;
    border: solid 2px var(--accent);
    height: auto;
    width: 50%;
  }

  p {
    margin-top: 0;
    font-size: var(--sub-heading);

    span {
      color: var(--accent);
    }
  }
`;

export const LearnMore = styled(motion.div)`
  display: flex;
  flex-direction: column;
  grid-gap: 40px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: none;
  padding-left: var(--padded-out);
  padding-right: var(--padded-out);
  max-width: var(--maxxed-out);
  min-height: 80vh;
  justify-items: center;

  h2 {
    font-weight: 600;
    font-size: var(--hero);
    margin-bottom: 0;
  }

  p {
    margin-top: 0;
    font-size: var(--sub-heading);
  }

  div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 20px;
    width: 100%;
    place-items: center center;

    button {
      background: transparent;
      border: solid 1px var(--accent);
      border-radius: 13px;
      color: var(--accent);
      width: 100%;
      min-height: 10vh;
      font-size: var(--sub-heading);
      font-family: "p22-underground", sans-serif;
      cursor: pointer;
      transition: ease-in-out 0.2s;

      :hover {
        background: var(--accent);
        color: var(--foreground);
        transform: translateY(-10px);
      }
    }
  }
`;
