import React from "react";
import Link from "next/link";

import Layout from "../components/Layout";
import theme from "../styles/theme";
import blog from "../database/blog";

export default () => {
  const addPosts = () => {
    const mapReverse = (arr, fn) => {
      return arr.reduceRight((result, el) => {
        result.push(fn(el));
        return result;
      }, []);
    };

    return mapReverse(blog, (post) => (
      <Link key={post.id} href="/p/[title]" as={`/p/${post.title}`}>
        <li className="card">
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
                box-shadow: white 0 0 0.5rem 0;
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
  };

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
