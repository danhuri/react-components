import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <>
            <header className={styles.header}>
                <nav className={`${styles.navigation} ${styles.container}`}>
                    <div>LOGO</div>
                    <div>NAVIGATION</div>
                </nav>

                <div className={`${styles.container} ${styles.centered}`}>
                    <div className={styles.headerContainerInner}>
                        <h1>
                            A healty meal delivered to your door, every single
                            day.
                        </h1>
                        <p>
                            The smart 365-days-per-year food subscription that
                            will make you eat healty again. Tailored to your
                            personal tastes and nutritional needs.
                        </p>
                        <a href="#" class={styles.btn}>
                            Start eating well
                        </a>
                    </div>
                </div>
            </header>
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2>Some random heading</h2>
                    <p>
                        Incididunt ut laboris minim occaecat sint Lorem. Sit
                        sint aliqua occaecat elit mollit qui non nostrud
                        reprehenderit laboris nulla mollit. Deserunt est officia
                        excepteur laborum eiusmod magna veniam cupidatat. Sit
                        tempor aute sunt est occaecat velit ipsum consectetur ut
                        dolor commodo excepteur qui. Tempor id enim nisi dolor
                        exercitation quis in tempor.
                    </p>
                </div>
            </section>
        </>
    );
};

export default Hero;
