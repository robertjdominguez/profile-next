import Head from "next/head";
import styled from "styled-components";
import { motion } from "framer-motion";
import { headingAnimations } from "../../styles/Lib";
import { request, GraphQLClient } from "graphql-request";
import gql from "graphql-tag";
import BlogPosts from "../../components/blog/BlogPosts";

const blog = ({ data }) => {
  return (
    <>
      <Head>
        <title>DominguezDev | Blog</title>
      </Head>
      <ContentHeader
        className='container'
        variants={headingAnimations}
        initial='hidden'
        animate='visible'
        exit='hidden'
      >
        <h1>
          Cool things I <span>teach</span>.
        </h1>
        <p>
          I'm an educator and a director of education technology. My job is
          focused on working with students and teachers to use technology as
          efficiently as possible in the pursuit of learning outcomes. Because
          of that, there's lots of opportunities to mix my own passions with
          what I do daily. This is where I write about the lessons I've learned
          along the way.
        </p>
        <BlogPosts data={data} />
      </ContentHeader>
    </>
  );
};

export default blog;

export const ContentHeader = styled(motion.div)`
  display: flex;
  flex-direction: column;
  grid-gap: 40px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: none;
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
  }
`;

const client = new GraphQLClient(process.env.GRAPH_CMS_LINK);

export async function getStaticProps({ params }) {
  const query = gql`
    query AllPostsQuery {
      posts(orderBy: createdAt_DESC) {
        title
        hook
        slug
        createdAt
      }
    }
  `;
  const { posts } = await client.request(query);

  return {
    props: {
      data: posts,
    },
  };
}
