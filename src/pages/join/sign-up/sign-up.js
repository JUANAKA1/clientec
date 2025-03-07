import Link from "next/link";
import { JoinLayout } from "@/layouts";
import styles from "./sign-up.module.scss";
import { RegisterForm } from "@/components/Auth";
import { Seo } from "@/components/Shared";

export default function SignUpPage() {
  return (
    <>
      <Seo title="Crear cuenta" />
      <JoinLayout>
        <div className={styles.signUp}>
          <h3>Crear cuenta</h3>
          <RegisterForm />

          <div className={styles.actions}>
            <Link href="/join/sign-in">Atras</Link>
          </div>
        </div>
      </JoinLayout>
    </>
  );
}
