import { JoinLayout } from "@/layouts";
import styles from "./sign-in.module.scss";
import Link from "next/link";
import { LoginForm } from "@/components/Auth";

export default function SignInPage() {
  return (
    <>
    <JoinLayout>
      <div className={styles.signIn}>
        <h2>Iniciar sesión</h2>
        <LoginForm />

        <div className={styles.actions}>
          <Link href="/join/sign-up">¿Aun no tienes una cuenta?</Link>

        </div>
      </div>
    </JoinLayout>
    </>
  )
}
