"use client";

import PullTab from "./pullTab";
import LoadingPaper from "./loadingPaper";

import { useSpring } from "@react-spring/web";
import { useEffect, useState } from "react";


export default function PullNav() {
    const [viewportHeight, setViewportHeight] = useState(0);

    useEffect(() => {
        setViewportHeight(window.innerHeight);
    }, []);

    const [{ y: paperY }, paperApi] = useSpring(() => ({
        y: 0,
        config: {
            tension: 250,
            friction: 20,
            mass: 0.25,
        }
    }));


    useEffect(() => {
    if (viewportHeight > 0) {
      paperApi.start({ y: -viewportHeight });
    }
  }, [viewportHeight]);


  




    if (viewportHeight === 0) return null;
    
    // todo: idea. make sure the pull tab brings down a long paper to cover the screen. 
    // as the pull condition is successful, it will close down, and then come back up. 
    // as the page comes back up, the thing underneath will be loaded kinda like curtains
    // to a theatre...
    return (
        <>

            <LoadingPaper y={paperY} color="#c7ae8e" />
            <nav className="paper-nav">
                <PullTab label="Home" route="/" color="#c7ae8e" paperApi={paperApi} viewportHeight={viewportHeight} />
                <PullTab label="Test" route="/testDirection" color="#c7ae8e" paperApi={paperApi} viewportHeight={viewportHeight} />
                <PullTab label="alvin" route="/testDirection" color="#c7ae8e" paperApi={paperApi} viewportHeight={viewportHeight} />
            </nav>

            
        </>

        
        
    )

}
