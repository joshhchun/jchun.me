import styles from "../styles/Navbar.module.css";

export default function Navbar(props: { className?: string }) {
    return (
        <div className={props.className}>
            <div
                className={styles.tab}
                style={{
                    ["--fadeoffset" as any]: 3.0,
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                }}
            >
                jchun
            </div>
            <div className={styles.tabs}>
                <div
                    className={styles.tab}
                    style={{ ["--fadeoffset" as any]: 3.0 }}
                    onClick={() => {
                        document.getElementById("first")?.scrollIntoView({
                            behavior: "smooth",
                        });
                    }}
                >
                    Projects
                </div>
                <div
                    className={styles.tab}
                    style={{ ["--fadeoffset" as any]: 4.0 }}
                    onClick={() => {
                        document.getElementById("second")?.scrollIntoView({
                            behavior: "smooth",
                        });
                    }}
                >
                    Skills
                </div>
                <div
                    className={styles.tab}
                    style={{ ["--fadeoffset" as any]: 5.0 }}
                >
                    Experience
                </div>
                <div
                    className={styles.tab}
                    style={{ ["--fadeoffset" as any]: 6.0 }}
                >
                    Blog
                </div>
            </div>
        </div>
    );
}
