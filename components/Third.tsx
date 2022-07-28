import styles from "../styles/Home.module.css";
import { Scene } from "react-scrollmagic";
import { useInView } from "react-intersection-observer";

const Third = () => {
    const [ref, inView] = useInView({
        threshold: 0.6,
    });
    return (
        <div ref={ref}>
            <Scene pin>
                <div className={styles.background} id={styles.three}>
                    {inView && (
                        <div className={styles.textWrapper}>
                            <div className={styles.middle}>Hiiiii</div>
                        </div>
                    )}
                </div>
            </Scene>
        </div>
    );
};

export default Third;
