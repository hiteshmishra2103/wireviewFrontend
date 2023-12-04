import React from 'react'
import styles from '../styles/Slider.module.css'
import Slidecard from './Slidecard'
import ProductCard from './ProductCard'

const data = [
    {
        cateImg: <svg className={styles.icon} aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none"><rect x="8.93499" y="2.61919" width="12.4458" height="18.7616" rx="0.619195" stroke="currentColor" stroke-width="1.23839"></rect>
            < path d="M17.1703 15.5C17.1703 16.5092 16.2996 17.3808 15.1579 17.3808C14.0162 17.3808 13.1455 16.5092 13.1455 15.5C13.1455 14.4908 14.0162 13.6192 15.1579 13.6192C16.2996 13.6192 17.1703 14.4908 17.1703 15.5Z" stroke="currentColor" stroke- width="1.23839" ></path >
            <line x1="13.1455" y1="6.38081" x2="17.1703" y2="6.38081" stroke="currentColor" stroke-width="1.23839" stroke-linecap="round"></line>
            <line x1="13.1455" y1="9.38081" x2="17.1703" y2="9.38081" stroke="currentColor" stroke-width="1.23839" stroke-linecap="round"></line>
            <path d="M6.21053 4.5H2V16H6.21053M3.57895 19.5H6.21053" stroke="currentColor" stroke-width="1.23839" stroke-linecap="round"></path></svg >,
        cateName: 'Computer & Tablet',
    },
    {
        cateImg: <svg className={styles.icon} aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none"><path d="M18.5 23H6.5C6.10218 23 5.72064 22.842 5.43934 22.5607C5.15804 22.2794 5 21.8978 5 21.5V3.5C5 3.10218 5.15804 2.72064 5.43934 2.43934C5.72064 2.15804 6.10218 2 6.5 2H18.5C18.8978 2 19.2794 2.15804 19.5607 2.43934C19.842 2.72064 20 3.10218 20 3.5V21.5C20 21.8978 19.842 22.2794 19.5607 22.5607C19.2794 22.842 18.8978 23 18.5 23ZM6.5 3.5V21.5H18.5V3.5H6.5Z" fill="currentColor"></path>
            <path d="M14 20.75H11C10.8011 20.75 10.6103 20.671 10.4697 20.5303C10.329 20.3897 10.25 20.1989 10.25 20C10.25 19.8011 10.329 19.6103 10.4697 19.4697C10.6103 19.329 10.8011 19.25 11 19.25H14C14.1989 19.25 14.3897 19.329 14.5303 19.4697C14.671 19.6103 14.75 19.8011 14.75 20C14.75 20.1989 14.671 20.3897 14.5303 20.5303C14.3897 20.671 14.1989 20.75 14 20.75Z" fill="currentColor"></path>
            <path d="M17 18.5H8C7.80109 18.5 7.61032 18.421 7.46967 18.2803C7.32902 18.1397 7.25 17.9489 7.25 17.75C7.25 17.5511 7.32902 17.3603 7.46967 17.2197C7.61032 17.079 7.80109 17 8 17H17C17.1989 17 17.3897 17.079 17.5303 17.2197C17.671 17.3603 17.75 17.5511 17.75 17.75C17.75 17.9489 17.671 18.1397 17.5303 18.2803C17.3897 18.421 17.1989 18.5 17 18.5Z" fill="currentColor"></path></svg>
        ,
        cateName: 'Cellphones & Accessories'

    },
    {
        cateImg: <svg className={styles.icon} aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none"><path d="M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.24649 5 7.5 5C5.75351 5 4.16789 5.47686 3 6.25278V19.2528C4.16789 18.4769 5.75351 18 7.5 18C9.24649 18 10.8321 18.4769 12 19.2528M12 6.25278C13.1679 5.47686 14.7535 5 16.5 5C18.2465 5 19.8321 5.47686 21 6.25278V19.2528C19.8321 18.4769 18.2465 18 16.5 18C14.7535 18 13.1679 18.4769 12 19.2528" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>,
        cateName: 'Wireview Premium Watch'
    },
    {
        cateImg: <svg className={styles.icon} aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none"><rect x="3.60606" y="2.60606" width="13.1284" height="19.2744" rx="1.21212" stroke="currentColor" stroke-width="1.21212"></rect>
            <ellipse cx="6.07297" cy="5.07303" rx="1.02433" ry="1.02433" fill="currentColor"></ellipse>
            <ellipse cx="6.07297" cy="19.4136" rx="1.02433" ry="1.02433" fill="currentColor"></ellipse>
            <ellipse cx="14.2676" cy="5.07303" rx="1.02433" ry="1.02433" fill="currentColor"></ellipse>
            <ellipse cx="14.2676" cy="19.4136" rx="1.02433" ry="1.02433" fill="currentColor"></ellipse>
            <path d="M10.1703 17.971C12.2022 17.971 13.8493 16.3239 13.8493 14.292C13.8493 12.2601 12.2022 10.6129 10.1703 10.6129C8.13842 10.6129 6.49126 12.2601 6.49126 14.292C6.49126 16.3239 8.13842 17.971 10.1703 17.971Z" stroke="currentColor" stroke-width="1.21212"></path>
            <path d="M10.1703 8.75201C11.0707 8.75201 11.8007 8.02206 11.8007 7.12162C11.8007 6.22118 11.0707 5.49123 10.1703 5.49123C9.26985 5.49123 8.5399 6.22118 8.5399 7.12162C8.5399 8.02206 9.26985 8.75201 10.1703 8.75201Z" stroke="currentColor" stroke-width="1.21212"></path>
            <path d="M10.1703 15.9224C11.0707 15.9224 11.8007 15.1925 11.8007 14.292C11.8007 13.3916 11.0707 12.6616 10.1703 12.6616C9.26985 12.6616 8.5399 13.3916 8.5399 14.292C8.5399 15.1925 9.26985 15.9224 10.1703 15.9224Z" stroke="currentColor" stroke-width="1.21212"></path>
            <path d="M19.3892 14.7167C21.4379 13.1419 21.4379 10.7009 19.3892 9.1261" stroke="currentColor" stroke-width="1.21212" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M20.3112 17C23.8963 14.2441 23.8963 9.75591 20.3112 7" stroke="currentColor" stroke-width="1.21212" stroke-linecap="round" stroke-linejoin="round"></path></svg>,
        cateName: 'Audio and Video'
    },
    {
        cateImg: <svg className="icon" aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none"><path d="M21.9647 15.5343C21.9263 15.4804 21.8756 15.4363 21.8168 15.4058C21.7579 15.3753 21.6927 15.3593 21.6265 15.359H20.6536C20.6602 15.2923 20.6602 15.2252 20.6536 15.1586V6.03548C20.6537 5.76443 20.5475 5.50417 20.3578 5.31057C20.1681 5.11697 19.91 5.00546 19.639 5H4.4075C4.27152 5 4.13687 5.02678 4.01124 5.07882C3.88561 5.13086 3.77146 5.20713 3.6753 5.30329C3.57915 5.39944 3.50288 5.51359 3.45084 5.63922C3.3988 5.76485 3.37202 5.8995 3.37202 6.03548V15.146C3.36543 15.2127 3.36543 15.2798 3.37202 15.3465H2.42005C2.35316 15.346 2.28716 15.3617 2.2276 15.3921C2.16803 15.4226 2.11665 15.4669 2.07777 15.5213C2.0389 15.5757 2.01366 15.6387 2.0042 15.7049C1.99474 15.7711 2.00132 15.8386 2.02339 15.9018L2.54113 17.4341V17.4759C2.69809 17.8162 2.94963 18.1042 3.26574 18.3056C3.58185 18.507 3.9492 18.6132 4.32399 18.6116H19.7225C20.0924 18.6103 20.4544 18.5041 20.7663 18.3053C21.0782 18.1064 21.3272 17.8232 21.4845 17.4884V17.4466L22.044 15.9143C22.0625 15.8493 22.065 15.7807 22.0512 15.7145C22.0374 15.6484 22.0077 15.5865 21.9647 15.5343ZM4.20708 15.146V6.03548C4.20815 5.98266 4.22961 5.9323 4.26696 5.89495C4.30432 5.85759 4.35468 5.83613 4.4075 5.83506H19.639C19.6919 5.83613 19.7422 5.85759 19.7796 5.89495C19.8169 5.9323 19.8384 5.98266 19.8395 6.03548V15.146C19.8395 15.1992 19.8183 15.2502 19.7808 15.2878C19.7432 15.3253 19.6922 15.3465 19.639 15.3465H4.4075C4.35434 15.3465 4.30337 15.3253 4.26578 15.2878C4.2282 15.2502 4.20708 15.1992 4.20708 15.146ZM10.516 16.1815H13.5306V16.5573H10.516V16.1815ZM20.7204 17.1418C20.629 17.3285 20.487 17.4858 20.3106 17.5958C20.1342 17.7058 19.9304 17.7641 19.7225 17.764H4.32399C4.1161 17.7641 3.91236 17.7058 3.73595 17.5958C3.55953 17.4858 3.41753 17.3285 3.32609 17.1418L3.00042 16.1815H9.68092V16.9748C9.68092 17.0856 9.72491 17.1918 9.80321 17.2701C9.88151 17.3484 9.98771 17.3924 10.0984 17.3924H13.9481C14.0588 17.3924 14.165 17.3484 14.2433 17.2701C14.3216 17.1918 14.3656 17.0856 14.3656 16.9748V16.1815H21.0461L20.7204 17.1418Z" stroke="currentColor" stroke-width="0.869858"></path>
            <path d="M11.8938 7.1754H12.1527C12.2635 7.1754 12.3697 7.13141 12.448 7.0531C12.5263 6.9748 12.5702 6.8686 12.5702 6.75786C12.5702 6.64713 12.5263 6.54093 12.448 6.46262C12.3697 6.38432 12.2635 6.34033 12.1527 6.34033H11.8938C11.7831 6.34033 11.6769 6.38432 11.5986 6.46262C11.5203 6.54093 11.4763 6.64713 11.4763 6.75786C11.4763 6.8686 11.5203 6.9748 11.5986 7.0531C11.6769 7.13141 11.7831 7.1754 11.8938 7.1754Z" fill="black" stroke="currentColor" stroke-width="0.869858"></path></svg>,
        cateName: 'laptops'
    }
]
const Slider = () => {
    return (
        <div className={styles.productCarousel}>
            <button className={styles.preBtn}>
                <p>&lt;
                </p>
            </button>
            <button className={styles.nextBtn}>
                <p>
                    &gt;
                </p>
            </button>
            <div className={styles.productCarousel}>

            </div>
        </div>
    )
}

export default Slider