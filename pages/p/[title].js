import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

import Layout from "../../components/Layout";
import blog from "../../database/blog";
import theme from "../../styles/theme";

export default () => {
  const router = useRouter();
  const title = router.query.title;

  const handleBody = () =>
    blog.map((post) => {
      if (post.title === title) {
        return (
          <div className="container" key={uuidv4()}>
            <Link href="/blog">
              <div className="btn-wrapper">
                <a className="btn">BACK</a>
              </div>
            </Link>
            <div className="img-wrapper">
              <img src={post.picPath} />
            </div>
            <p className="body" key={post.id}>
              {post.body}
            </p>
            <style jsx>
              {`
                img {
                  height: auto;
                  width: 100%;
                }
                .container {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                }
                .btn-wrapper {
                  display: flex;
                  width: 100%;
                  position: sticky;
                  position: -web-sticky;
                  top: 4rem;
                }
                .btn {
                  display: inline-block;
                  position: relative;
                  left: -140px;
                  border-radius: 0 1.5rem 0 1.5rem;
                  letter-spacing: 1px;
                  padding: 1rem;
                  font-size: 15px;
                  font-weight: 900;
                  text-decoration: none;
                  color: white;
                  background-color: ${theme.colors.dark};
                  box-shadow: ${theme.colors.dark} 0px 0px 10px 0px;
                }
                .btn:hover {
                  background-color: ${theme.colors.pink};
                  transform: scale(1.08);
                }
                .btn:visited {
                  color: white;
                }

                .img-wrapper {
                  object-fit: cover;
                  max-width: 100%;
                }
                .body {
                  white-space: pre-wrap;
                  overflow-wrap: break-word;
                  margin: 40px 0;
                }
                @media screen and (max-width: 1024px) {
                  .background {
                    padding: 0;
                  }
                  .body {
                    padding: 0;
                    margin: 2rem 0;
                  }
                  .btn {
                    left: -130px;
                    padding: 0.5rem;
                    border-radius: 0 1em 0 1em;
                  }
                  @media only screen and (max-width: 992px) {
                    .btn-wrapper {
                      top: 3rem;
                    }
                    .btn {
                      left: -70px;
                    }
                  }
                }
              `}
            </style>
          </div>
        );
      }
    });

  return (
    <Layout>
      <div className="background">
        <div></div>
        <div className="body">
          <h1>{title}</h1>
          {handleBody()}
        </div>
      </div>
      <style jsx>{`
        h1 {
          font-size: 34px;
          font-weight: 600;
          margin-bottom: 1rem;
          text-align: center;
        }
        .background {
          display: flex;
          align-items: center;
          padding: 50px 210px;
          line-height: 1.8;
          background-color: rgb(239, 239, 239);
          min-height: 100vh;
          background-image: linear-gradient(
            0deg,
            ${theme.colors.dark} 0%,
            ${theme.colors["pink-link"]} 80%,
            white 100%
          );
        }
        .body {
          background: white;
          color: ${theme.colors.black};
          padding: 60px 100px;
          border-radius: 10px;
          box-shadow: LightGray 0px 0px 10px 0px;
          min-width: 10rem;
        }

        @media only screen and (max-width: 992px) {
          h1 {
            font-size: 1.5rem;
          }
          .background {
            padding: 2em;
          }
          .body {
            padding: 3em;
            min-width: 0;
          }
        }
      `}</style>
    </Layout>
  );
};
