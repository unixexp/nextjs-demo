import Link from "next/link";
import Image from "next/image";

import styles from "./logo.module.scss";

export default function Logo() {
    
    return (
        <div className={styles.logo}>
            <div className={styles["logo__img"]}>
                <Image
                        width="968"
                        height="398"
                        src="/img/logo.svg"
                        alt="logo"
                    />
            </div>
            <div className={styles["logo__link-wrapper"]}>
                <Link href="/products/guitars/acoustic">
                    <a className={styles["logo__link"]}>Acoustic guitars</a>
                </Link>
            </div>
        </div>
    );

}