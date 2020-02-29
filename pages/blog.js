import Link from "next/link";
import Layout from "../components/Layout";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { blogContent } from "../data_storage/database";

export default () => {
  const router = useRouter();
  const [active, setActive] = useState(false);

  // Add Post
  const addPosts = () => {
    const posts = blogContent.map(post => (
      <li className="post" key={post.id}>
        <PostLink post={post} />
        <style jsx>
          {`
            .post {
              display: flex-box;
              background-color: white;
              padding: 20px;
              margin-bottom: 10px;
              box-shadow: LightGray 0px 0px 10px 0px;
              border-radius: 10px;
              min-width: 100px;
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
        <a>{post.title} </a>
      </Link>
      <p className="date">added: Oct. 12 2019 </p>
      <style jsx>
        {`
          a {
            font-weight: 600;
            text-decoration: none;
          }
          a:visited {
            color: Black;
          }
          .date {
            margin-top: 5px;
            color: gray;
          }
        `}
      </style>
    </>
  );

  return (
    <Layout>
      <div className="layout">
        <section className="card-wrapper">
          <div className="card">
            <ul>{addPosts()}</ul>
          </div>
          <div className="card card--right">
            <div className="blog-content">
              <h1>TITLE</h1>
              <p>BODY</p>
            </div>
          </div>
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
            padding-top: 50px;
            padding-left: 120px;
            padding-right: 30px;
            background-color: rgb(239, 239, 239);
            min-height: 100vh;
          }
          .card-wrapper {
            display: flex;
          }
          .card {
            display: block;
            align-items: flex-start;
            height: 100%;
            width: 50%;
            padding: 5px;
          }
          .card--right {
            width: 50%;
            min-width: 300px;
          }
          .blog-content {
            display: block;
            height: 630px;
            width: 100%;
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: LightGray 0px 0px 10px 0px;
          }
        `}
      </style>
    </Layout>
  );
};
