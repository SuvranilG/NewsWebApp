import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";
import { getCategoryData } from "../categoryList/CategoryList";

const MenuCategories = async () => {
  const fetchedData=await getCategoryData();
  const randomNum=Math.random()*10;
  let data;
  try {
    data=fetchedData.slice(randomNum,randomNum+9)
    
  } catch (error) {
    data=fetchedData.slice(randomNum,randomNum-9)
    
  }
  // console.log(data);
  return (
    <div className={styles.categoryList}>


      {
        data?.map((item)=><Link
        href={`/blog?cat=${item.title}`}
        className={`${styles.categoryItem}`}>
        {`${item.title}`}
      </Link>)
      }


      {/* <Link href="/blog" className={`${styles.categoryItem} ${styles.fashion}`}>
        Fashion
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.food}`}>
        Food
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.travel}`}>
        Travel
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.culture}`}>
        Culture
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.coding}`}>
        Coding
      </Link> */}
    </div>
  );
};

export default MenuCategories;
