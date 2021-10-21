import Head from "next/head";
import styled from "styled-components";
import { motion } from "framer-motion";
import { headingAnimations } from "../styles/Lib";
import Marketing from "../components/work/Marketing";
import Projects from "../components/work/Projects";

// dummy data

const development = () => {
  return (
    <>
      <Head>
        <title>DominguezDev | Development Work</title>
      </Head>
      <ContentHeader
        variants={headingAnimations}
        initial='hidden'
        animate='visible'
        exit='hidden'
      >
        <h1>
          Cool things I <span>build</span>.
        </h1>
        <p>
          Whether it’s building <span>elegant personality filled</span> sites
          for businesses or abstracting voting theorems that would make any
          third-world authoritarian sweat, I enjoy working with clients to
          deliver{" "}
          <span>
            projects that are both highly functioning and highly engaging
          </span>
          .
        </p>
      </ContentHeader>
      <Marketing />
      <Projects />
    </>
  );
};

export default development;

export const ContentHeader = styled(motion.div)`
  display: flex;
  flex-direction: column;
  grid-gap: 40px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10vh;
  padding-left: var(--padded-out);
  padding-right: var(--padded-out);
  max-width: var(--maxxed-out);
  justify-items: center;

  h1 {
    font-weight: 600;
    font-size: var(--hero);
    margin-bottom: 0;

    span {
      color: var(--accent);
    }
  }

  p {
    margin: 0;
    font-size: var(--sub-heading);

    span {
      color: var(--accent);
    }
  }
`;
