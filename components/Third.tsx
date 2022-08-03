import styles from "../styles/Home.module.css";
import { Scene } from "react-scrollmagic";
import { useInView } from "react-intersection-observer";
import Navbar from "./Navbar";
import Image from "next/image";

const Third = () => {
    const [ref, inView] = useInView({
        threshold: 0.6,
    });
    return (
        <>
            <div ref={ref}>
                <Scene pin>
                    {/* <div className={styles.background} id={styles.three}> */}
                    <div className={styles.background}>
                        <Image
                            src="/images/laguna.jpg"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            quality={95}
                            z-index="-1"
                        />
                        {inView && (
                            <div className={styles.textWrapper}>
                                <div className={styles.middle}>Hiiiii</div>
                            </div>
                        )}
                    </div>
                </Scene>
            </div>
        </>
    );
};

export default Third;
