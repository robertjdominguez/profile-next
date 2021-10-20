import Link from "next/link";
import { GraphQLClient } from "graphql-request";
import gql from "graphql-tag";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Post = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <ReactMarkdown rehypePlugins={[rehypeRaw]} children={post.body} />
    </div>
  );
};

export default Post;

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
