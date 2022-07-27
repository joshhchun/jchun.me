import styles from "../styles/Home.module.css";
import { Scene } from "react-scrollmagic";

const First = () => {
    return (
        <Scene pin>
            <div className={styles.background}>
                <div className={styles.textWrapper}>
                    <div className={styles.middle}>My name is Josh Chun</div>
                    <div
                        className={styles.middle}
                        id={styles.bottom}
                        style={{ ["--fadeoffset" as any]: 3.0 }}
                    >
                        {` I'm currently a student at the University of Notre Dame
                        studying Computer Science. An advocate for Web
                        Development, UNIX, Machine Learning, and pineapple on
                        pizza. `}
                    </div>
                </div>
                <div
                    className={styles.container}
                    style={{ ["--fadeoffset" as any]: 3.0 }}
                >
                    <div className={styles.chevron}></div>
                    <div className={styles.chevron}></div>
                    <div className={styles.chevron}></div>
                    <div className={styles.middle}>Scroll Down</div>
                </div>
            </div>
        </Scene>
    );
};

export default First;
