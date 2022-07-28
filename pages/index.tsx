import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Second from "../components/Second";
import Third from "../components/Third";
import First from "../components/First";
import { Controller } from "react-scrollmagic";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>jchun | Home</title>
            </Head>
            <Navbar />
            <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
                <First />
                <Second />
                <Third />
            </Controller>
        </>
    );
};

export default Home;
