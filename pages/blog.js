// import Link from "next/link";
import React from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

import Layout from "../components/Layout";
import theme from "../styles/theme";
import blog from "../database/blog";

export default () => {
  const addPosts = () => {
    const posts = blog.map((post) => (
      <Link href="/p/[title]" as={`/p/${post.title}`}>
        <li className="card" key={post.id}>
          <h1 className="title">{post.title}</h1>
          <p className="date">{post.date}</p>
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
                margin: 10px;
                word-break: break-word;
                transition: all 0.15s;
                background: white;
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
        </li>
      </Link>
    ));
    return posts;
  };

  // Layout
  return (
    <Layout>
      <div className="layout">
        <ul className="cards">{addPosts()}</ul>
      </div>
      <style jsx>
        {`
          .layout {
            padding-top: 70px;
            padding-left: 120px;
            padding-right: 30px;
            min-height: 100vh;
            background-image: linear-gradient(
              0deg,
              ${theme.colors.dark} 0%,
              ${theme.colors["pink-link"]} 80%,
              white 100%
            );
          }
          .cards {
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
          }
        `}
      </style>
    </Layout>
  );
};
