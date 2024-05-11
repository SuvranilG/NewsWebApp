"use client";
import { signIn, useSession } from "next-auth/react";
import styles from "./loginPage.module.css";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
    
  }

  const handleSignIn = async (provider) => {
    try {
      await signIn(provider, { callbackUrl: router.asPath }); // Pass the current path as the callback URL
    } catch (error) {
      console.error("Error during sign in:", error);
    }
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={() => {
          // signIn("google");
          handleSignIn("google")


        }}>
          Sign in with Google
        </div>
        <div className={styles.socialButton}>Sign in with Github</div>
        {/* <div className={styles.socialButton}>Sign in with Facebook</div> */}
      </div>
    </div>
  );
};

export default LoginPage;
