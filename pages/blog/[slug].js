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
import Eye from "../../styles/Eye";
import Heart from "../../styles/Heart";
import Head from "next/head";

function createDate(postDate) {
  let d = new Date(postDate);
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(d);
}

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
    <>
      <Head>
        <title>DominguezDev - Blog | {post.title}</title>
        <meta
          property='og:url'
          content={`https://dominguezdev.com/blog/${post.slug}`}
        />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:creator' content='@_RobDominguez' />
        <meta property='og:title' content={`${post.title}`} />
        <meta property='og:description' content={`${post.hook}`} />
        <meta property='og:image' content={`${post.image.url}`} />
      </Head>
      <Body
        variants={headingAnimations}
        initial='hidden'
        animate='visible'
        exit='hidden'
      >
        <h1>{post.title}</h1>
        <Time>{createDate(post.createdAt)}</Time>
        <Metrics layout>
          <Eye slug={post.slug} methodChoice='POST' />
          {/* <Heart val={40} /> */}
        </Metrics>
        <ReactMarkdown
          components={components}
          rehypePlugins={[rehypeRaw]}
          children={post.body}
        />
      </Body>
    </>
  );
};

export default Post;

const Body = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10vh;
  max-width: var(--maxxed-out);
  padding-left: var(--padded-out);
  padding-right: var(--padded-out);

  h3 {
    font-size: var(--blog-heading);
  }

  p {
    line-height: 1.8;
  }

  ul,
  ol {
    line-height: 1.8;
  }

  a {
    text-decoration: none;
    color: var(--foreground);
    transition: ease-in-out 0.2s;
    border-bottom: solid 2px var(--accent);

    :hover {
      color: var(--accent);
    }
  }

  img {
    width: 100%;
    height: auto;
  }
`;

const Time = styled.h3`
  font-weight: 400 !important;
  font-size: 0.9rem !important;
  margin-top: 0 !important;
`;

export const Metrics = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-items: flex-end;
  gap: 20%;
  width: 200px;
  margin-bottom: 5vh;
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

const client = new GraphQLClient(process.env.GRAPH_CMS_LINK);

export async function getStaticProps({ params }) {
  const query = gql`
    query MyQuery($slug: String!) {
      post(where: { slug: $slug }) {
        title
        hook
        body
        createdAt
        slug
        image {
          url
        }
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
