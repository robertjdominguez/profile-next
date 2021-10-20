import styled from "styled-components";
import Article from "./Article_2";
import { motion, AnimateSharedLayout } from "framer-motion";

const BlogPosts = ({ data }) => {
  return (
    <AnimateSharedLayout>
      <Gallery layout>
        {data.map((post, i) => (
          <Article post={post} i={i} posts={data} key={post.title} />
        ))}
      </Gallery>
    </AnimateSharedLayout>
  );
};

export default BlogPosts;

export const Gallery = styled(motion.div)`
  display: flex;
  flex-direction: column;
  min-height: 100%;

  h3 {
    margin-bottom: none;
    font-size: clamp(0.9rem, 1.4vw, 1.4rem);
  }
`;
