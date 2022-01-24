import styles from "./Carousel.module.css";

const Carousel = () => {
    return (
        <div className={styles.carousel}>
            <img 
                src="/images/maria.jpg"
                alt="Picture of Maria de Almeida"
                className={styles.picture}
            />
            <blockquote className={styles.blockquote}>
                <p className={styles.text}>
                    "Nulla esse minim commodo proident magna aliquip veniam do consequat incididunt. 
                    Est dolore laboris tempor incididunt irure adipisicing aute nostrud eu anim duis 
                    adipisicing labore reprehenderit."
                </p>
                <p className={styles.author}>Maria de Almeida</p>
                <p className={styles.job}>
                    Senior Product Manager at EDP Comercial
                </p>
            </blockquote>
            <button className={`${styles.btn} ${styles.left}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.arrows} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button className={`${styles.btn} ${styles.right}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.arrows} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
            <div className={styles.dots}>
                <button className={`${styles.dot} ${styles.active}`}>&nbsp;</button>
                <button className={styles.dot}>&nbsp;</button>
                <button className={styles.dot}>&nbsp;</button>
                <button className={styles.dot}>&nbsp;</button>
            </div>
        </div>
    );
};

export default Carousel;
