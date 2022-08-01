import styles from "../styles/Home.module.css";
import { Scene } from "react-scrollmagic";
import { useInView } from "react-intersection-observer";
import Navbar from "./Navbar";

const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.6,
    });
    return (
        <>
            <div ref={ref} id={"first"}>
                <Scene pin>
                    <div className={styles.background} id={styles.about}>
                        {inView && (
                            <>
                                <div
                                    className={styles.textWrapper}
                                    id={styles.aboutTextWrapper}
                                >
                                    <div className={styles.aboutContainer}>
                                        <div
                                            className={styles.middle}
                                            id={styles.middleAbouth1}
                                        >
                                            About Me
                                        </div>
                                        <div
                                            className={styles.middle}
                                            id={styles.middleAbout}
                                            style={{
                                                ["--fadeoffset" as any]: 3.0,
                                            }}
                                        >
                                            I am currently a Glenna R. Joyce
                                            Scholar and rising Junior at the
                                            University of Notre Dame. <br />
                                            <br />I originally came to Notre
                                            Dame as a Chemical Engineer on the
                                            pre-med track, but I quickly found
                                            my love for coding. From the moment
                                            I started coding (albeit my first
                                            language was MATLAB), I knew that it
                                            is what I wanted to do with my life.
                                            The ability to create something from
                                            nothing (minus the billions of
                                            transistors) fascinates me.
                                            <br />
                                            <br />I have professional
                                            development in backend development,
                                            but I am currently having fun with
                                            full-stack development and machine
                                            learning.
                                        </div>
                                    </div>
                                    <div
                                        className={styles.middleAboutEducation}
                                    >
                                        <div className={styles.middle}>
                                            Education
                                        </div>
                                        <div
                                            id={styles.bottom}
                                            style={{
                                                ["--fadeoffset" as any]: 3.0,
                                            }}
                                        >
                                            <br />
                                            University of Notre Dame
                                            <br />
                                            Bachelor of Science and Engineering
                                            | Computer Science
                                            <br />
                                            GPA: 3.92
                                        </div>
                                        <div
                                            id={styles.bottom}
                                            style={{
                                                top: "2rem",
                                                ["--fadeoffset" as any]: 3.0,
                                            }}
                                        >
                                            Dublin Scioto High School
                                            <br />
                                            GPA: 4.45
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </Scene>
            </div>
        </>
    );
};

export default About;
