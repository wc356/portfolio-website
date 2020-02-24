import { useRouter } from "next/router";
import Layout from "../components/Layout";

// Page Content
const Content = () => {
  const router = useRouter();
  return (
    <div>
      <h1>{router.query.title}</h1>
      <p>This is the blog post content.</p>
    </div>
  );
};

// Page Template
const Page = () => (
  <Layout>
    <Content />
  </Layout>
);

export default Page;
