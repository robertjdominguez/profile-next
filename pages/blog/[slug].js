import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";
import { GraphQLClient } from "graphql-request";
import gql from "graphql-tag";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { headingAnimations } from "../../styles/Lib";

const components = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        showLineNumbers={true}
        style={dracula}
        language={match[1]}
        PreTag='div'
        children={String(children).replace(/\n$/, "")}
        {...props}
      />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

const Post = ({ post }) => {
  return (
    <Body
      variants={headingAnimations}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      <h1>{post.title}</h1>
      <ReactMarkdown
        components={components}
        rehypePlugins={[rehypeRaw]}
        children={post.body}
      />
    </Body>
  );
};

export default Post;

const Body = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  max-width: var(--maxxed-out);
  padding: var(--padded-out);

  p {
    line-height: 1.8;
  }
`;

const client = new GraphQLClient(process.env.GRAPH_CMS_LINK);

export async function getStaticProps({ params }) {
  const query = gql`
    query MyQuery($slug: String!) {
      post(where: { slug: $slug }) {
        title
        hook
        body
        createdAt
      }
    }
  `;
  const { post } = await client.request(query, {
    slug: params.slug,
  });

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const { posts } = await client.request(`
          {
            posts {
              slug
              title
              body
            }
          }
        `);

  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}
