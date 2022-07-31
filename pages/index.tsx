import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Second from "../components/Second";
import Third from "../components/Third";
import First from "../components/First";
import About from "../components/About";
import { Controller } from "react-scrollmagic";
import { useEffect, useState } from "react";
import styles from "../styles/Navbar.module.css";

const Home: NextPage = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [navInView, setNavInView] = useState(false);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
        if (position > 280) {
            setNavInView(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Head>
                <title>jchun | Home</title>
            </Head>
            {scrollPosition > 280 ? (
                <Navbar className={styles.navbar} />
            ) : navInView ? (
                <Navbar className={styles.hidden} />
            ) : (
                <div
                    style={{
                        position: "fixed",
                        top: "0",
                        left: 0,
                        right: 0,
                        zIndex: "2",
                    }}
                ></div>
            )}
            <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
                <First />
                <About />
                <Second />
                <Third />
            </Controller>
        </>
    );
};

export default Home;
