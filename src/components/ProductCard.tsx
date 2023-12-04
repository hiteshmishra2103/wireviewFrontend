import React from 'react'
import Image from 'next/image'
import styles from '../styles/ProductCard.module.css'
import Button from './Button'
import eye from '../../public/ProductCardSlider/eye-line.svg'
import Link from 'next/dist/client/link'
import { useSetRecoilState } from 'recoil';
import cartQuantityState from '../store/atoms/cart';
import { useRouter } from 'next/router'
import { useState } from 'react';
import addToCartFn from '@/lib/utils/addToCart'

const ProductCard = ({ imgUrl, name, price, id }) => {
    const setCartQuantity = useSetRecoilState(cartQuantityState);
    const [addToCart, setAddToCart] = useState(false)
    const router = useRouter();
    const quantity = 1;
    return (
        <>
            {
                addToCart && <div class="notification">
                    ✅ Added to Cart </div>
            }
            <div className={styles.productCardContainer}>

                <div className={styles.imageContainer}>
                    <Image src={imgUrl} className={styles.Img} width={100} height={100} />
                </div>

                <div className={styles.quickViewContainer}>
                    <Image src={eye} className={styles.quickView} />
                </div>

                <div className={styles.cardInfo} onClick={() => {
                    router.push(`/product/${id}`)
                }}>
                    <div className={styles.vendor}>
                        <p>
                            Wireview Electronics</p>
                    </div>
                    <Link href={`/product/${id}`}>
                        <h2 className={styles.productName}>
                            {name}
                        </h2>
                    </Link>
                    <div className={styles.productPrice}>
                        <p>From </p>
                        ${price}
                    </div>
                </div>


                <div className={styles.addToCartCompare}>
                    <div className={styles.addToCartIcon} onClick={
                        () => {
                            addToCartFn(id, price, setCartQuantity, setAddToCart, quantity)
                        }
                    }>


                        <Button text="Add to Cart" >
                            Add to cart
                        </Button>


                    </div>
                    {/* <div className={styles.compareIconContainer}>

<Image src={compareicon} className={styles.compareIcon} />
</div> */}
                </div>
            </div >

        </>
    )
}

export default ProductCard