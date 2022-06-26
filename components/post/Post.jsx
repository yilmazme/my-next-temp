import React from "react";
import styles from "./Post.module.scss";
import Link from "next/link";

function Post({ post }) {
  return (
    <Link href="posts/[id]" as={`/posts/${post.id}`}>
      <div className={styles.each}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    </Link>
  );
}

export default Post;
