import styles from "../styles/Navbar.module.css";

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div
                className={styles.tab}
                style={{ ["--fadeoffset" as any]: 3.0, fontSize: "1.5rem" }}
            >
                jchun
            </div>
            <div className={styles.tabs}>
                <div
                    className={styles.tab}
                    style={{ ["--fadeoffset" as any]: 3.0 }}
                >
                    Projects
                </div>
                <div
                    className={styles.tab}
                    style={{ ["--fadeoffset" as any]: 4.0 }}
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
