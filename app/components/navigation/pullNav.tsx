"use client";

import PullTab from "./pullTab";
import LoadingPaper from "./loadingPaper";

import { useSpring } from "@react-spring/web";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";


export default function PullNav() {
    const [viewportHeight, setViewportHeight] = useState(0);
    const pathname = usePathname();



    // todo: fix later; lint error. calling setState synchonously within an effect can trigger cascading renders. 
    // change it later, not having good time debugging this.
    useEffect(() => {
        setViewportHeight(window.innerHeight);
    }, []);

    const [{ y: paperY }, paperApi] = useSpring(() => ({
        y: 0,
        config: {
            tension: 300,
            friction: 20,
            mass: 1.25,
        }
    }));
    // todo: is it possible to... like... add some sort of timing? can i add like 1 second transition so that it can kinda like...
    // at least show 1 second of loading screen just in case someone has really good connection? 

    useEffect(() => {
    if (viewportHeight > 0) {
      paperApi.start({ y: -viewportHeight });
    }
  }, [pathname, viewportHeight]);



  




    if (viewportHeight === 0) return null;
    
    // todo: idea. make sure the pull tab brings down a long paper to cover the screen. 
    // as the pull condition is successful, it will close down, and then come back up. 
    // as the page comes back up, the thing underneath will be loaded kinda like curtains
    // to a theatre...




    // todo: make logic to make sure tabs aren't selectable when you're on its page. 
    // either we can make it disappear or we can make it just like... grayed out or something like that.

    return (
        <>

            <LoadingPaper y={paperY} color="#c7ae8e" />
            
            <nav className="paper-nav">
                <PullTab label="Home" route="/" color="#c7ae8e" paperApi={paperApi} viewportHeight={viewportHeight} />
                <PullTab label="Test" route="/testDirection" color="#7cbda4" paperApi={paperApi} viewportHeight={viewportHeight} />
                <PullTab label="Alvin" route="/testDirection" color="#dc6c6c" paperApi={paperApi} viewportHeight={viewportHeight} />

            </nav>

            
        </>

        
        
    )

}
