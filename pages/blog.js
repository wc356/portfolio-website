// import Link from "next/link";
import theme from "../styles/theme";
import Link from "next/link";
import Layout from "../components/Layout";
import React from "react";
import blog from "../database/blog";
import { v4 as uuidv4 } from "uuid";

export default () => {
  const addPosts = () => {
    const posts = blog.map(post => (
      <div key={uuidv4()}>
        <Link href="/p/[title]" as={`/p/${post.title}`}>
          <li className="card" key={post.id}>
            <h1 className="title">{post.title}</h1>
            <p className="date">added Oct. 12 2019</p>
          </li>
        </Link>
        <style jsx>
          {`
            .card {
              display: block;
              cursor: pointer;
              height: 200px;
              width: 200px;
              border: ${theme.colors.gray} 1px solid;
              border-radius: 8px;
              padding: 20px;
              margin-bottom: 10px;
              word-break: break-word;
              transition: all 0.15s;
            }
            .card:hover {
              border: ${theme.colors.dark} 1px solid;
              transform: translateY(-6px);
            }
            .title {
              color: ${theme.colors.black};
              text-decoration: none;
              font-size: 16px;
              font-weight: 600;
            }
            .date {
              font-size: 14px;
              margin-top: 5px;
              color: ${theme.colors.black};
              font-weight: 400;
            }
          `}
        </style>
      </div>
    ));
    return posts;
  };

  // Layout
  return (
    <Layout>
      <div className="layout">
        <section>
          <ul className="cards">{addPosts()}</ul>
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
            padding-top: 70px;
            padding-left: 120px;
            padding-right: 30px;
            min-height: 100vh;
          }
          .cards {
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
