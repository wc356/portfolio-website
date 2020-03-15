import Layout from "../../components/Layout";
import projects from "../../database/projects";
import { useRouter } from "next/router";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

export default () => {
  const router = useRouter();
  const title = router.query.project;

  const handleBody = () => {
    const body = projects.map(proj => {
      if (proj.project === title) {
        return (
          <div key={uuidv4()}>
            <div className="img">
              <img src={proj.picPath} height="350" width="600" />
            </div>
            <p className="body">{proj.body}</p>
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
          </div>
        );
      }
    });
    return body;
  };

  return (
    <Layout>
      <div className="layout">
        <div className="body">
          <h1 className="title">{title}</h1>
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
        .title {
          display: block;
        }
      `}</style>
    </Layout>
  );
};
