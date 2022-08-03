import styles from "../styles/Home.module.css";
import { Scene } from "react-scrollmagic";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const languages = [
    {
        type: "Python",
        level: 0.9,
        color: "rgba(156, 193, 230, 0.7)",
    },
    {
        type: "Javascript",
        level: 0.9,
        color: "rgba(136, 169, 202, 0.7)",
    },
    { type: "C", level: 0.9, color: "rgba(73, 90, 109, 0.7)" },
    {
        type: "Typescript",
        level: 0.81,
        color: "rgba(136, 169, 202, 0.7)",
    },
    { type: "Java", level: 0.79, color: "rgba(73, 90, 109, 0.7)" },
    { type: "C++", level: 0.79, color: "rgba(73, 90, 109, 0.7)" },
    {
        type: "PostgreSQL, MongoDB, MySQL",
        level: 0.79,
        color: "rgba(73, 90, 109, 0.7)",
    },
];

const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.6,
    });
    return (
        <>
            <div ref={ref} id={"first"}>
                <Scene pin>
                    {/* <div className={styles.background} id={styles.about}> */}
                    <div className={styles.background}>
                        <Image
                            src="/images/bigsur.jpg"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            quality={95}
                            z-index="-1"
                        />
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
                                            Who is Josh?
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
                                        {/* {languages.map((skill, index) => (
                                                <div
                                                    className={styles.skill}
                                                    key={index}
                                                >
                                                    <div
                                                        className={
                                                            styles.nameContainer
                                                        }
                                                    >
                                                        <div
                                                            className={
                                                                styles.name
                                                            }
                                                            key={skill.type}
                                                        >
                                                            {skill.type}
                                                        </div>
                                                    </div>
                                                    <div
                                                        className={
                                                            styles.levelContainer
                                                        }
                                                        key={skill.color}
                                                    >
                                                        <div
                                                            className={
                                                                styles.level
                                                            }
                                                            style={{
                                                                ["--level" as any]:
                                                                    skill.level,
                                                                ["--color" as any]:
                                                                    skill.color,
                                                                ["--fadeoffset" as any]:
                                                                    index,
                                                            }}
                                                            key={skill.level}
                                                        ></div>
                                                    </div>
                                                </div>
                                            ))} */}
                                        <div className={styles.aboutImage}>
                                            <div
                                                className={
                                                    styles.aboutImageContainer
                                                }
                                            >
                                                <img
                                                    style={{
                                                        maxWidth: "100%",
                                                        display: "block",
                                                        boxShadow:
                                                            "#000000 0px 0px 10px",
                                                        borderRadius: "10px",
                                                    }}
                                                    src="/images/game2.jpg"
                                                    alt="game2"
                                                ></img>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div
                                            className={styles.middle}
                                            id={styles.education}
                                        >
                                            Education
                                        </div>
                                        <div
                                            className={styles.middle}
                                            id={styles.middleEducation}
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
                                            className={styles.middle}
                                            id={styles.middleEducation}
                                            style={{
                                                ["--fadeoffset" as any]: 3.0,
                                            }}
                                        >
                                            Dublin Scioto High School
                                            <br />
                                            GPA: 4.45
                                        </div> */}
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
