import Layout from "../../components/Layout";
import blog from "../../database/blog";
import { useRouter } from "next/router";
import Link from "next/link";

export default () => {
  const router = useRouter();
  const title = router.query.title;

  const handleBody = () => {
    const body = blog.map(post => {
      if (post.title === title) {
        return (
          <>
            <div className="img">
              <img src={post.picPath} height="350" width="600" />
            </div>
            <p className="body" key={post.id}>
              {post.body}
            </p>
            <Link href="/blog">
              <a className="navlink">p r e v</a>
            </Link>
            <style jsx>
              {`
                .img {
                  display: block;
                }
                .body {
                  white-space: pre-wrap;
                  overflow-wrap: break-word;
                  margin: 40px 0;
                }
                .navlink {
                  padding: 10px;
                  font-size: 15px;
                  font-weight: 900;
                  text-decoration: none;
                  color: white;
                  background-color: dodgerblue;
                  border-radius: 10px;
                }
                .navlink:hover {
                  opacity: 0.5;
                }
                .navlink:visited {
                  color: white;
                }
                span {
                  font-size: 30px;
                  font-weight: 400;
                  margin-right: 5px;
                }
              `}
            </style>
          </>
        );
      }
    });
    return body;
  };

  return (
    <Layout>
      <div className="layout">
        <div className="body">
          <h1>{title}</h1>
          {handleBody()}
        </div>
      </div>
      <style jsx>{`
        h1 {
          font-size: 34px;
          font-weight: 600;
          padding: 10px;
        }
        .layout {
          padding: 50px 225px;
          line-height: 1.5;
          background-color: rgb(239, 239, 239);
          min-height: 100vh;
        }
        .body {
          background: white;
          padding: 60px;
          height: 100%;
          border-radius: 10px;
          box-shadow: LightGray 0px 0px 10px 0px;
        }
      `}</style>
    </Layout>
  );
};
