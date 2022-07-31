import styles from "../styles/Home.module.css";
import { Scene } from "react-scrollmagic";
import { useInView } from "react-intersection-observer";

const skills = [
    {
        type: "Python / Django",
        level: 0.9,
        color: "rgba(156, 193, 230, 0.7)",
    },
    {
        type: "Javascript / Express / Next",
        level: 0.8,
        color: "rgba(136, 169, 202, 0.7)",
    },
    { type: "React", level: 0.8, color: "rgba(114, 142, 170, 0.7)" },
    { type: "Docker", level: 0.75, color: "rgba(91, 113, 136, 0.7)" },
    { type: "Java / Spring", level: 0.75, color: "rgba(73, 90, 109, 0.7)" },
];

const Second = () => {
    const [ref, inView] = useInView({
        threshold: 0.6,
    });
    return (
        <>
            <div ref={ref} id={"second"}>
                <Scene pin>
                    <div className={styles.background} id={styles.two}>
                        {inView && (
                            <div className={styles.secondSkillsPage}>
                                <div
                                    className={styles.middle}
                                    id={styles.middleTwo}
                                >
                                    Skills
                                </div>
                                <div className={styles.skills}>
                                    {skills.map((skill, index) => (
                                        <>
                                            <div className={styles.skill}>
                                                <div className={styles.name}>
                                                    {skill.type}
                                                </div>
                                                <div
                                                    className={
                                                        styles.levelContainer
                                                    }
                                                    style={{
                                                        ["--fadeoffset" as any]:
                                                            index,
                                                    }}
                                                >
                                                    <div
                                                        className={styles.level}
                                                        style={{
                                                            ["--level" as any]:
                                                                skill.level,
                                                            ["--color" as any]:
                                                                skill.color,
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </Scene>
            </div>
        </>
    );
};

export default Second;
