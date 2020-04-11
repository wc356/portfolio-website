import Layout from "../../components/Layout";
import blog from "../../database/blog";
import { useRouter } from "next/router";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import theme from "../../styles/theme";

export default () => {
  const router = useRouter();
  const title = router.query.title;

  const handleBody = () =>
    blog.map((post) => {
      if (post.title === title) {
        return (
          <div className="container" key={uuidv4()}>
            <div className="img-wrapper">
              <img src={post.picPath} height="350" width="600" />
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
                .img-wrapper {
                  object-fit: cover;
                  max-width: 100%;
                }
                .body {
                  white-space: pre-wrap;
                  overflow-wrap: break-word;
                  margin: 40px 0;
                }
                span {
                  font-size: 30px;
                  font-weight: 400;
                  margin-right: 5px;
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
        <div>
          <Link href="/blog">
            <a className="btn">BACK</a>
          </Link>
        </div>
        <div className="body">
          <h1>{title}</h1>
          {handleBody()}
        </div>
      </div>
      <style jsx>{`
        h1 {
          font-size: 34px;
          font-weight: 600;
          margin-bottom: 40px;
          text-align: center;
        }
        .background {
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
          height: 100%;
          border-radius: 10px;
          box-shadow: LightGray 0px 0px 10px 0px;
          min-width: 30rem;
        }
        .btn {
          display: block;
          position: fixed;
          left: 10rem;
          top: 10rem;
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
      `}</style>
    </Layout>
  );
};
