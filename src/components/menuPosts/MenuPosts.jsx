import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css"

const MenuPosts =async ({ withImage,data}) => {
  // console.log("MenuPosts");
  // console.log(data);
  return (
    <div className={styles.items}>
{
  data && data.posts.map((item) =>
    <Link href={`/posts/${item.slug}`} className={styles.item} key={item.id}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src={item.img||'/p1.jpeg'} alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} `}>{item.catSlug}</span>
          <h3 className={styles.postTitle}>
            {item.title.slice(0,100)+"..."}
          </h3>
          <div className={styles.detail}>
            {/* <span className={styles.username}>John Doe</span> */}
            <b className={styles.date}> {item.createdAt.slice(0,10)}</b>
          </div>
        </div>
      </Link>
  )
}

      {/* <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Fashion
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link> */}


    </div>
  );
};

export default MenuPosts;
