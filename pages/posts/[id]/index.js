import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function EachPost({ post }) {
  // get quey params
  //   const router = useRouter();
  //   const id = router.query.id;
  return (
    <div>
      Post {post.id}
      <h3>{post.title}</h3>
      <Link href="/">Go Back</Link>
    </div>
  );
}
// export const getServerSideProps = async (context) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);

//   const post = await res.json();

//   return {
//     props: { post },
//   };
// };
export const getStaticProps = async (context) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);

  const post = await res.json();

  return {
    props: { post },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  const posts = await res.json();

  const ids = posts.map((post) => post.id);
  const paths = ids.map((id) => ({
    params: { id: id.toString() },
  }));
  return {
    paths,
    fallback: false,
    // paths: { params: {id:'1', id:'2'} },
  };
};
export default EachPost;
