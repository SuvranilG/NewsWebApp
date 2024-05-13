import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

export const getCategoryData = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_NEXTAUTH_URL+"/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CategoryList = async () => {
    const data = await getCategoryData();
  // console.log(data);
    // const data=[{"_id":{"$oid":"663874a182942ff033e44b1f"},"slug":"Entertainment","title":"Entertainment"}]
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data && data?.map((item) => (
          <Link
            href={`/blog?cat=${item.title}`}
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
