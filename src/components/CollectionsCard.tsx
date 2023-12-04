import React from 'react'
import styles from '../styles/Collections.module.css'
import Image from 'next/image';

const CollectionsCard = ({ Name, quantity, imgUrl, alt }) => {
    return (
        <div className={styles.header__product__card__container}>
            <div className={styles.header__product__card}>
                <Image src={imgUrl} className={styles.collectionsImage} alt={alt} />
                <div className={styles.intro}>
                    <h2 className={styles.collectionsHeader}>{Name}</h2>
                    <p className={styles.quantity}>{quantity} products</p>
                </div>
            </div>
        </div>
    )
}

export default CollectionsCard