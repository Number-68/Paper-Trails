"use client";

import PullTab from "./pullTab";

import { useSpring } from "@react-spring/web";
import LoadingPaper from "./loadingPaper";
import { useEffect } from "react";






export default function pullNav() {


    const [{ y }, api] = useSpring(() => ({
    y: 0,
    }));

    useEffect(() => {
        api.start({ y: -window.innerHeight });
    }, []);
    


    // todo: idea. make sure the pull tab brings down a long paper to cover the screen. 
    // as the pull condition is successful, it will close down, and then come back up. 
    // as the page comes back up, the thing underneath will be loaded kinda like curtains
    // to a theatre...
    return (
        <nav className="paper-nav">
            <PullTab label="Home" route="/" color="#c7ae8e" y={y} api={api}/>
            <PullTab label="Test" route="/testDirection" color="#c7ae8e" y={y} api={api}/>
            <PullTab label="alvin" route="/testDirection" color="#c7ae8e" y={y} api={api}/>
       
            <LoadingPaper y={y} color="#fff" />
        </nav>
        
    )

}
