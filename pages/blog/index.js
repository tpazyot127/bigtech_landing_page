import BlogList from "@/components/BlogList/BlogList";
import BlogPagination from "@/components/BlogPagination/BlogPagination";
import LayoutBlog from "@/layouts/LayoutBlog";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Polygon Capital - Venture capital funds</title>
        <meta name="description" content="" />
      </Head>

      <LayoutBlog pageTitle={"Blog & Article"} item={"Blog"}>
        <BlogList />

        <BlogPagination />
      </LayoutBlog>
    </>
  );
}
