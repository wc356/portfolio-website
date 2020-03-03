// import Link from "next/link";
import theme from "../styles/theme";
import Link from "next/link";
import Layout from "../components/Layout";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { blogContent } from "../data_storage/database";

export default () => {
  const router = useRouter();
  const [active, setActive] = useState(false);

  const handleClick = e => {
    e.preventDefault();
    setActive(true);
  };

  // Add Post
  const addPosts = () => {
    const posts = blogContent.map(post => (
      <li className="post" key={post.id}>
        <PostLink post={post}></PostLink>
        <style jsx>
          {`
            .post {
              display: block;
              height: 200px;
              width: 200px;
              border: ${theme.colors.gray} 1px solid;
              border-radius: 10px;
              padding: 20px;
              margin-bottom: 10px;
              word-break: break-word;
            }
          `}
        </style>
      </li>
    ));
    return posts;
  };

  // PostLink Component
  const PostLink = ({ post }) => (
    <>
      <Link href="/p/[title]" as={`/p/${post.title}`}>
        <a>{post.title}</a>
      </Link>
      <p className="date">added Oct. 12 2019</p>
      <style jsx>
        {`
          a {
            color: ${theme.colors.black};
            text-decoration: none;
            font-size: 16px;
            font-weight: 600;
          }
          p {
            font-size: 14px;
          }
          .date {
            margin-top: 5px;
            color: ${theme.colors.black};
          }
        `}
      </style>
    </>
  );

  return (
    <Layout>
      <div className="layout">
        <section>
          <ul className="card">{addPosts()}</ul>
        </section>
      </div>
      <style jsx>
        {`
          h1 {
            color: black;
            font-size: 60px;
            font-weight: 400;
            margin-bottom: 20px;
          }
          .layout {
            padding-top: 60px;
            padding-left: 120px;
            padding-right: 30px;
            min-height: 100vh;
          }
          .card {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            margin-right: 90px;
            border-radius: 10px;
          }
        `}
      </style>
    </Layout>
  );
};
