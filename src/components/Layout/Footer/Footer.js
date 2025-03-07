import { Container, Image, Button } from "semantic-ui-react";
import styles from "./Footer.module.scss";
import Link from "next/link";

export function Footer() {
    return (
        <div className={styles.footer}>
            <Container>
                <div className={styles.columns}>
                    <div>
                        <Link href="/">
                            <Image src="/images/logo.png" alt="Gaming" />
                        </Link>
                    </div>
                    <div>
                        <ul>
                            <Link href="#">Términos y condiciones </Link>
                            <Link href="#">Politica de privacidad </Link>
                            <Link href="#">Contacto </Link>
                            <Link href="#">FAQs </Link>
                        </ul>
                    </div>
                    <div className={styles.social}>
                        <Button as="a" href="#" circular color="facebook" icon="facebook" />
                        <Button as="a" href="#" circular color="twitter" icon="twitter" />
                        <Button as="a" href="#" circular color="instagram" icon="instagram" />
                        <Button as="a" href="#" circular color="youtube" icon="youtube" />
                    </div>
                </div>
                <div className={styles.copyright}>
                        <span>© 2025 Gaming. Todos los derechos reservados </span> 
                </div>
            </Container>

        </div>
    );
}