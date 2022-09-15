import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import styles from "./logo.module.scss";

export default function Logo() {
    
    const [ active, setActive ] = useState(0);

    const classList = [styles.logo]
    if (active)
        classList.push(styles["logo--active"])

    return (
        <div className={classList.join(" ")}>
            <div className={styles["logo__img"]} onClick={() => active ? setActive(0) : setActive(1)}>
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