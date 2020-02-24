import Layout from "../components/Layout";
import Link from "next/link";

// Add Post
const getPosts = () => [
  {
    id: "challenges of self-taught",
    title: "Challenges of Self-Taught Developers (rant)"
  },
  { id: "loops", title: "Looping through objects" },
  { id: "reflections", title: "Current Reflections" }
];

// PostLink Component
const PostLink = ({ post }) => (
  <Link href="/p/[id" as={`/p/${post.id}`}>
    <a>{post.title}</a>
  </Link>
);

export default function Blog() {
  return (
    <Layout>
      <div className="layout">
        <h1>Tech_Blog</h1>
        <p>This is the blog homepage</p>
        <section>
          <ul>
            {getPosts().map(post => (
              <li key={post.id}>
                <PostLink key={post.id} post={post} />
              </li>
            ))}
          </ul>
        </section>
      </div>
      <style jsx>
        {`
          h1 {
            font-size: 50px;
            margin-bottom: 50px;
          }
          .layout {
            padding-top: 50px;
            padding-left: 100px;
          }
        `}
      </style>
    </Layout>
  );
}
