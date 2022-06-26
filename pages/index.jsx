import Head from "next/head";
import Image from "next/image";
import Post from "../components/post/Post";
import styles from "../styles/pages/Index.module.scss";

export default function Home({ results }) {
  console.log(results[0]);
  return (
    <div className={styles.container}>
      <h2>All Posts</h2>
      <div className={styles.postsContainer}>
        {results.map((each) => {
          return <Post key={each.id} post={each} />;
        })}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");

  const results = await res.json();

  return {
    props: { results },
  };
};
