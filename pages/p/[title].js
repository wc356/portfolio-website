// import Markdown from "react-markdown";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { blogContent } from "../../data_storage/database";

export default () => {
  const router = useRouter();

  const handleBody = () => {
    const title = router.query.title;
    const body = blogContent.map(post => {
      if (post.title === title) {
        return <p>{post.body}</p>;
      }
    });
    return body;
  };

  return (
    <Layout>
      <div className="layout">
        <h1>{router.query.title}</h1>
        <p>{handleBody()}</p>
      </div>
      <style jsx>{`
        h1 {
          font-size: 40px;
          font-weight: 400;
          margin: 50px 0;
        }
        .layout {
          padding: 50px 230px;
          line-height: 1.5;
          background-color: rgb(239, 239, 239);
        }
        p {
          white-space: pre-wrap;
        }
      `}</style>
    </Layout>
  );
};
