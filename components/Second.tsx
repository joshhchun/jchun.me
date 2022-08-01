import styles from "../styles/Home.module.css";
import { Scene } from "react-scrollmagic";
import { useInView } from "react-intersection-observer";

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

const skills = [
    {
        type: "Python Django",
        level: 0.9,
        color: "rgba(156, 193, 230, 0.7)",
    },
    {
        type: "Express.js / Next.js",
        level: 0.9,
        color: "rgba(136, 169, 202, 0.7)",
    },
    { type: "React.js", level: 0.82, color: "rgba(114, 142, 170, 0.7)" },
    { type: "Docker", level: 0.82, color: "rgba(91, 113, 136, 0.7)" },
    { type: "Java Spring Boot", level: 0.79, color: "rgba(73, 90, 109, 0.7)" },
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
                            <>
                                <div
                                    className={styles.middle}
                                    id={styles.middleTwo}
                                >
                                    Skills
                                </div>
                                <div className={styles.secondSkillsPage}>
                                    <div className={styles.skills}>
                                        <div>Languages</div>
                                        {languages.map((skill, index) => (
                                            <div
                                                className={styles.skill}
                                                key={index}
                                            >
                                                <div
                                                    className={styles.name}
                                                    key={skill.type}
                                                >
                                                    {skill.type}
                                                </div>
                                                <div
                                                    className={
                                                        styles.levelContainer
                                                    }
                                                    key={skill.color}
                                                >
                                                    <div
                                                        className={styles.level}
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
                                        ))}
                                    </div>
                                    <div className={styles.skills}>
                                        <div>Frameworks</div>
                                        {skills.map((skill, index) => (
                                            <div
                                                className={styles.skill}
                                                key={index}
                                            >
                                                <div
                                                    className={styles.name}
                                                    key={skill.type}
                                                >
                                                    {skill.type}
                                                </div>
                                                <div
                                                    className={
                                                        styles.levelContainer
                                                    }
                                                    id={styles.frameworks}
                                                    key={skill.color}
                                                >
                                                    <div
                                                        className={styles.level}
                                                        id={styles.frameworks}
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
                                        ))}
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

export default Second;
