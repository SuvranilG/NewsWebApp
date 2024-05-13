import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";
import { getCategoryData } from "../categoryList/CategoryList";

const getPopularData = async () => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_NEXTAUTH_URL+`/api/posts/popular?page=${1}}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const getEditorData = async () => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_NEXTAUTH_URL+`/api/posts/recent`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const Menu = async() => {
  const popularData = await getPopularData();
  // console.log(popularData);
  const editorData = await getEditorData();

  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <MenuPosts withImage={true} data={editorData} />
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={true} data={popularData}/>
    </div>
  );
};

export default Menu;
