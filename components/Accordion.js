import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Accordion.module.css";
import arrowDownIcon from "../public/icons/chevron-down.svg";

const Accordion = () => {
    const [isOpen, setIsOpen] = useState([false, false, false]);
    console.log(isOpen);

    const openSectionHandler = (value) => {
        console.log(value);
        setIsOpen((prevState) => {
            const actualState = [...prevState];
            actualState[value] = !actualState[value];
            return actualState;
        });
    };

    return (
        <>
            <h2>Accordion</h2>
            <div className={styles.accordion}>
                <motion.div
                    layout
                    className={
                        isOpen[0]
                            ? `${styles.item} ${styles.open}`
                            : styles.item
                    }
                    onClick={() => openSectionHandler(0)}
                >
                    <p className={styles.number}>01</p>
                    <p className={styles.text}>
                        Where are these chairs assembled?
                    </p>

                    <Image src={arrowDownIcon} alt="Arrow Down Icon" />

                    <div className={styles.hiddenBox}>
                        <p>
                            Sit laborum adipisicing sint ipsum. Quis deserunt do
                            nostrud id voluptate velit consectetur amet ullamco
                            magna. Commodo ipsum reprehenderit esse ex cupidatat
                            sunt ipsum sint sunt sit aute. Occaecat est duis in
                            nulla consequat aute deserunt.
                        </p>
                        <ul>
                            <li>Officia nostrud eiusmod occaecat duis.</li>
                            <li>
                                Commodo ipsum reprehenderit esse ex cupidatat
                                sunt.
                            </li>
                            <li>
                                Occaecat est duis in nulla consequat aute
                                deserunt.
                            </li>
                            <li>
                                Velit labore ipsum cupidatat ut eu do
                                exercitation.
                            </li>
                        </ul>
                    </div>
                </motion.div>
                <motion.div
                    layout
                    className={
                        isOpen[1]
                            ? `${styles.item} ${styles.open}`
                            : styles.item
                    }
                    onClick={() => openSectionHandler(1)}
                >
                    <p className={styles.number}>02</p>
                    <p className={styles.text}>
                        How Long do i have to return my chair?
                    </p>
                    <Image src={arrowDownIcon} alt="Arrow Down Icon" />
                    <div className={styles.hiddenBox}>
                        <p>
                            Sit laborum adipisicing sint ipsum. Quis deserunt do
                            nostrud id voluptate velit consectetur amet ullamco
                            magna. Commodo ipsum reprehenderit esse ex cupidatat
                            sunt ipsum sint sunt sit aute. Occaecat est duis in
                            nulla consequat aute deserunt.
                        </p>
                        <ul>
                            <li>Officia nostrud eiusmod occaecat duis.</li>
                            <li>
                                Commodo ipsum reprehenderit esse ex cupidatat
                                sunt.
                            </li>
                            <li>
                                Occaecat est duis in nulla consequat aute
                                deserunt.
                            </li>
                            <li>
                                Velit labore ipsum cupidatat ut eu do
                                exercitation.
                            </li>
                        </ul>
                    </div>
                </motion.div>
                <motion.div
                    layout
                    className={
                        isOpen[2]
                            ? `${styles.item} ${styles.open}`
                            : styles.item
                    }
                    onClick={() => openSectionHandler(2)}
                >
                    <p className={styles.number}>03</p>
                    <p className={styles.text}>
                        Do you ship to countries outside the EU?
                    </p>
                    <Image src={arrowDownIcon} alt="Arrow Down Icon" />
                    <div className={styles.hiddenBox}>
                        <p>
                            Sit laborum adipisicing sint ipsum. Quis deserunt do
                            nostrud id voluptate velit consectetur amet ullamco
                            magna. Commodo ipsum reprehenderit esse ex cupidatat
                            sunt ipsum sint sunt sit aute. Occaecat est duis in
                            nulla consequat aute deserunt.
                        </p>
                        <ul>
                            <li>Officia nostrud eiusmod occaecat duis.</li>
                            <li>
                                Commodo ipsum reprehenderit esse ex cupidatat
                                sunt.
                            </li>
                            <li>
                                Occaecat est duis in nulla consequat aute
                                deserunt.
                            </li>
                            <li>
                                Velit labore ipsum cupidatat ut eu do
                                exercitation.
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default Accordion;
