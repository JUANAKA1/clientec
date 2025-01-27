import { JoinLayout } from "@/layouts";
import styles from "./sign-in.module.scss";

export default function SignInPage() {
  return (
    <>
    <JoinLayout>
      <div className={styles.signIn}>
        <h2>iniciar sesion</h2>
      </div>
    </JoinLayout>
    </>
  )
}
