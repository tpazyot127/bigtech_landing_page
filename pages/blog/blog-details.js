import BlogCommentForm from "@/components/BlogDetails/BlogCommentForm";
import BlogComments from "@/components/BlogDetails/BlogComments";
import BlogDetails from "@/components/BlogDetails/BlogDetails";
import LayoutBlog from "@/layouts/LayoutBlog";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Polygon Capital - Venture capital funds</title>
        <meta name="description" content="" />
      </Head>

      <LayoutBlog pageTitle={"Blog Details"} item={"BLOG DETAILS"}>
        <BlogDetails />

        <BlogComments />

        <BlogCommentForm />
      </LayoutBlog>
    </>
  );
}
