import Image from "next/image";
import styles from "./Accordion.module.css";
import arrowDownIcon from "../public/icons/chevron-down.svg";

const Accordion = () => {
    return (
        <div className={styles.accordion}>
            <div className={styles.item}>
                <p className={styles.number}>02</p>
                <p className={styles.text}>
                    How Long do i have to return my chair?
                </p>                
                
                <Image
                    src={arrowDownIcon}
                    alt="Arrow Down Icon"
                    className={styles.icon}
                />
                
                <div className={styles.hiddenBox}>
                    <p>
                        Sit laborum adipisicing sint ipsum. Quis deserunt do
                        nostrud id voluptate velit consectetur amet ullamco
                        magna. Commodo ipsum reprehenderit esse ex cupidatat
                        sunt ipsum sint sunt sit aute. Occaecat est duis in
                        nulla consequat aute deserunt ullamco laboris excepteur.
                        Velit labore ipsum cupidatat ut eu do exercitation ea
                        quis ea.
                    </p>
                    <ul>
                        <li>Officia nostrud eiusmod occaecat duis.</li>
                        <li>
                            Commodo ipsum reprehenderit esse ex cupidatat sunt.
                        </li>
                        <li>
                            Occaecat est duis in nulla consequat aute deserunt.
                        </li>
                        <li>
                            Velit labore ipsum cupidatat ut eu do exercitation.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Accordion;
