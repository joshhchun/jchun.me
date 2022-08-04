import styles from "../styles/Home.module.css";
import { Scene } from "react-scrollmagic";
import { useInView } from "react-intersection-observer";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import Image from "next/image";

const First = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [ref, inView] = useInView({
        threshold: 0.4,
    });

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div ref={ref}>
            <Scene pin>
                <div className={styles.background} id={styles.one}>
                    {inView && (
                        <>
                            <div className={styles.textWrapper}>
                                <div className={styles.middle}>
                                    My name is Josh Chun
                                </div>
                                <div
                                    className={styles.middle}
                                    id={styles.bottom}
                                    style={{ ["--fadeoffset" as any]: 3.0 }}
                                >
                                    {` Studying Computer Science @ Notre Dame and an advocate for Web
                        Development, UNIX, Machine Learning, and pineapple on
                        pizza. `}
                                </div>
                                <div className={styles.tabs}>
                                    <div
                                        className={styles.tab}
                                        style={{
                                            ["--fadeoffset" as any]: 3.0,
                                        }}
                                        onClick={() => {
                                            try {
                                                document
                                                    .getElementById("first")
                                                    ?.scrollIntoView({
                                                        behavior: "smooth",
                                                    });
                                            } catch (error) {
                                                console.log(error);
                                            }
                                        }}
                                    >
                                        Projects
                                    </div>
                                    <div
                                        className={styles.tab}
                                        style={{
                                            ["--fadeoffset" as any]: 4.0,
                                        }}
                                        onClick={() => {
                                            document
                                                .getElementById("second")
                                                ?.scrollIntoView({
                                                    behavior: "smooth",
                                                });
                                        }}
                                    >
                                        Skills
                                    </div>
                                    <div
                                        className={styles.tab}
                                        style={{
                                            ["--fadeoffset" as any]: 5.0,
                                        }}
                                    >
                                        Experience
                                    </div>
                                    <div
                                        className={styles.tab}
                                        style={{
                                            ["--fadeoffset" as any]: 6.0,
                                        }}
                                    >
                                        Blog
                                    </div>
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
                        </>
                    )}
                    {/* </Image> */}
                </div>
            </Scene>
        </div>
    );
};

export default First;
