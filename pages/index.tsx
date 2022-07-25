import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
    return (
        <div className={styles.background}>
            <Navbar />
            <div className={styles.textWrapper}>
                <div className={styles.middle} fade-offset="1.2">
                    My name is Josh Chun
                </div>
                <div
                    className={styles.middle}
                    id={styles.bottom}
                    style={{ ["--fadeoffset" as any]: 3.0 }}
                >
                    I'm currently a student at the University of Notre Dame
                    studying Computer Science. An advocate for Web Development,
                    UNIX, Machine Learning, and pineapple on pizza.
                </div>
            </div>
        </div>
    );
};

export default Home;
