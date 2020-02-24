import Layout from "../components/MyLayout";
import Link from "next/link";
import Landing from "../components/LandingHeader";

// Add Post
function getPosts() {
  return [
    { id: "hello-nextjs", title: "Hello Next.js" },
    { id: "learn-nextjs", title: "Learn Next.js is awesome" },
    { id: "deploy-nextjs", title: "Deploy apps with ZEIT" }
  ];
}

// PostLink component
const PostLink = ({ post }) => (
  <li>
    <Link href="/p/[id]" as={`/p/${post.id}`}>
      <a>{post.title}</a>
    </Link>
    <style jsx>
      {`
        a {
          text-decoration: none;
          color: blue;
          font-family: "Arial";
        }

        a:hover {
          opacity: 0.6;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }
      `}
    </style>
  </li>
);

// Blog
export default function Home() {
  return (
    <Layout>
      <div className="landing">
        <Landing />
      </div>
      <h1>About Me</h1>
      <ul>
        {getPosts().map(post => (
          <li key={post.id}>
            <PostLink key={post.id} post={post} />
          </li>
        ))}
      </ul>
      <style jsx>
        {`
          h1 {
            font-family: "Arial";
          }

          ul {
            padding: 0;
          }

          li {
            list-style: none;
            margin: 5px 0;
          }
        `}
      </style>
    </Layout>
  );
}
