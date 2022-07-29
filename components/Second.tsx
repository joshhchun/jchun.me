import styles from "../styles/Home.module.css";
import { Scene } from "react-scrollmagic";
import { useInView } from "react-intersection-observer";
import SkillBar from "react-skillbars";
import Navbar from "./Navbar";

const skills = [
    { type: "Java", level: 100 },
    { type: "React", level: 85 },
    { type: "Javascript", level: 75 },
    { type: "Spring", level: 50 },
    { type: "Docker", level: 25 },
    { type: "HTML", level: 20 },
    { type: "NoSQL", level: 0 },
];

const Second = () => {
    const [ref, inView] = useInView({
        threshold: 0.6,
    });
    return (
        <>
            {/* {inView && <Navbar />} */}
            <div ref={ref}>
                <Scene pin>
                    <div className={styles.background} id={styles.two}>
                        {inView && (
                            <SkillBar
                                skills={skills}
                                height={60}
                                animationThreshold={0.1}
                            />
                            // <div
                            //     className={styles.middle}
                            //     id={styles.middleTwo}
                            // >
                            //     Skills
                            // </div>
                        )}
                    </div>
                </Scene>
            </div>
        </>
    );
};

export default Second;
