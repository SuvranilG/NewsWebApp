"use client";
import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  const { status,data } = useSession();
  const router=useRouter();

  // console.log(useSession());

  const handleSignOut = async () => {
    try {
      await signOut({callbackUrl:'/'}); 
      // router.push("/"); 
    } catch (error) {
      console.error("Error during sign out:", error);
    }
  };

  return (
    <>

      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          {data?.user.isAdmin=="true"&&<Link href="/write" className={styles.link}>
            Write
          </Link>}
          {/* <span className={styles.link} onClick={signOut({ redirect: false }).then(() => {
            router.push("/"); 
    }) }> */}
    <span className={styles.link} onClick={handleSignOut}>
      Logout
          </span>
        </>
      )}
      
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
