import React from 'react';
import Link from 'next/link'

import styles from '/styles/global.module.css';

type HomeCardProps = {
    urlLink?: string,
    externalLink?: boolean,
    children: React.ReactNode
}

const HomeCard = ({ urlLink, externalLink, children }: HomeCardProps) => {
    if (externalLink) {
        return (
            <a className={styles.card} target="_blank" href={`${urlLink}`}>
                {children}
            </a>
        );
    }

    return (
        <Link href={`${urlLink}`}>
            <a className={styles.card}>
                {children}
            </a>
        </Link>
    );
};

export default HomeCard;