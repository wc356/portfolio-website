import Link from "next/link";
import Layout from "../components/Layout";
import { blogContent } from "../data_storage/database";

export default () => {
  // Add Post
  const addPosts = () => {
    const posts = blogContent.map(post => (
      <>
        <li className="post" key={post.id}>
          <PostLink key={post.id} post={post} />
        </li>
        <style jsx>
          {`
            .post {
              display: flex-box;
              width: 800px;
              background-color: white;
              padding: 40px;
              margin-bottom: 10px;
              box-shadow: LightGray 0px 0px 10px 0px;
            }
          `}
        </style>
      </>
    ));
    return posts;
  };

  // PostLink Component
  const PostLink = ({ post }) => (
    <>
      <Link href="/p/[title]" as={`/p/${post.title}`}>
        <a className="nav-link">{post.title}</a>
      </Link>
      <style jsx>
        {`
          .nav-link {
            text-decoration: none;
          }
        `}
      </style>
    </>
  );

  return (
    <Layout>
      <div className="layout">
        {console.log(typeof addPosts())}
        <h1>Tech_Blog</h1>
        <section>
          <ul>{addPosts()}</ul>
        </section>
      </div>
      <style jsx>
        {`
          h1 {
            font-size: 50px;
            font-weight: 500;
            margin-bottom: 30px;
          }
          .layout {
            padding-top: 50px;
            padding-left: 120px;
            line-height: 1.5;
            background-color: rgb(239, 239, 239);
          }
          .nav-link {
            text-decoration: none;
          }
        `}
      </style>
    </Layout>
  );
};
