"use client"
import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";
import { useRouter } from "next/navigation";
import { signIn,useSession } from "next-auth/react";
import Link from "next/link";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};


const SinglePage = async ({ params }) => {
  const { slug } = params;
  const { status } = useSession();
  const router = useRouter();

  const data = await getData(slug);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.user}>
            {data?.user?.image && (
              <div className={styles.userImageContainer}>
                <Image src={data.user.image} alt="" fill className={styles.avatar} />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data?.user.name}</span>
              <span className={styles.date}>{"Published on: "+data?.createdAt.slice(0,10)}</span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className={styles.imageContainer}>
            
            {data.img.includes('.mp4')?
              <iframe src={data.img} title="video" fill className={styles.image} />
             : 
              <Image src={data.img} alt="image" fill className={styles.image} /> 
             } 
          
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
         
          {(status === "unauthenticated")?(
            <div
            className={styles.blog}>
            <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data?.desc.slice(0,700)+"..."}}
          />
          {/* <div className={styles.socialButton} onClick={() => signIn("google")}>
          Sign in with Google
          </div> */}
        <button onClick={()=>router.push("/login")}>Sign In</button>
        </div>
          ):(
            <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data?.desc}}
          />
        )}          

          <div className={styles.comment}>
            <Comments postSlug={slug}/>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
