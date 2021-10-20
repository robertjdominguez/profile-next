import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import styled from "styled-components";
import Eye from "../../styles/Eye";
import Heart from "../../styles/Heart";

const DetailVariants = {
  hidden: {
    opacity: 0,
    transition: {
      // delay: 0.15,
      stiffness: 1,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      // delay: 0.15,
      stiffness: 1,
      velocity: 1,
    },
  },
};

const Article = ({ post, i, posts }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <Post onClick={toggleOpen} isOpen={isOpen} layout='position'>
      <General layout>
        {/* <PostDate layout post={post} posts={posts} i={i}>
          {new Date(post.createdAt).getFullYear()}
        </PostDate> */}
        <h3>{post.title}</h3>
        <Metrics layout>
          <Eye val={2590} />
          <Heart val={40} />
        </Metrics>
      </General>
      <AnimatePresence>
        {isOpen && (
          <Deets
            style={{ minHeight: `10vh` }}
            layout
            variants={DetailVariants}
            initial='hidden'
            animate='visible'
            exit='hidden'
          >
            <small>{post.hook}</small>
            <Link href={`/blog/${post.slug}`}>
              <button>Read More...</button>
            </Link>
          </Deets>
        )}
      </AnimatePresence>
    </Post>
  );
};

export default Article;

export const Post = styled(motion.article)`
  display: grid;
  background: ${(props) => (props.isOpen ? "var(--dark-grey)" : "transparent")};
  transition: ease-in-out 0.2s;
  padding: 1.5vh 10px;
  border-radius: 13px;
  cursor: pointer;
  overflow: hidden;
  min-height: 100%;
  margin-bottom: 1vh;

  :hover {
    background: var(--dark-grey);
  }
`;

export const Deets = styled(motion.div)`
  display: grid;
  button {
    background: var(--accent);
    border: solid 1px var(--accent);
    border-radius: 13px;
    color: var(--foreground);
    padding: 12px 50px;
    margin-top: 5vh;
    margin-bottom: 2vh;
    margin-right: 2vw;
    justify-self: end;
    font-family: "p22-underground", sans-serif;
    cursor: pointer;
    transition: ease-in-out 0.2s;
  }

  small {
    margin-top: 2vh;
    line-height: 1.7;
    margin-left: 14%;
    margin-right: 2vw;
  }
`;

export const PostDate = styled(motion.span)`
  opacity: ${(props) =>
    new Date(props.post.date).getFullYear() === props.posts[props.i - 1]?.date
      ? 0
      : 1};
`;

export const General = styled(motion.div)`
  display: flex;
  gap: 10%;
  align-items: center;
  width: 100%;
`;

export const Metrics = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-items: flex-end;
  gap: 20%;
  div {
    display: flex;
    gap: 20%;
    height: 22px;
    width: 100%;
    align-items: center;

    svg {
      height: 100%;
      width: auto;
    }

    p {
      font-size: 0.8rem;
      color: grey;
    }
  }
`;
