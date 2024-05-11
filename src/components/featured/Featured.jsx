import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>“Headlines”, the place where truth resonates! <br /></b> Discover news, stories and innovative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/Cover2.jpg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Stay Informed with Reliable News</h1>
          <p className={styles.postDesc}>
          Welcome to HeadLines, the premier destination for up-to-date, accurate, and engaging news
          coverage. 
          </p>
            <br /><br />
          <b>Why Choose HeadLines?</b>
          <ul>
          <li>Timely Updates: We understand the importance of timely news. Our platform ensures you receive the
          latest stories as they unfold.</li>
          <li>In-depth Analysis: Beyond the headlines, we delve into the ‘why’ and ‘how’ of every story, providing
          you with a comprehensive understanding of the issues that matter.</li>
          <li>Diverse Perspectives: Hear from a multitude of voices with our opinion pieces and guest columns,
          fostering a well-rounded view of the world.</li>
          <li>Mobile-Friendly Design: Access news on-the-go with our responsive and user-friendly website,
          optimized for all devices.</li>
          </ul>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
