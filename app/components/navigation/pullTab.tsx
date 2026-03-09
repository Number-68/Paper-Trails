"use client";

import { animated, useSpring } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { useRouter } from "next/navigation";
import type { SpringValue, SpringRef } from "@react-spring/web"; 

type PullTabProps = {
  
  label: string;
  route: string;
  threshold?: number;
  color: string;
  viewportHeight: number;
  paperApi: SpringRef<{ y: number }>;

};

// todo: threshold is currently fixed. I want to make it dynamic to at least like... 30% of the page for different resolution sizes.
// also, for mobile, I want to make this switch from verical tabs to just... a pullout menu since i feel it wouldn't function properly with how mobile works? 
// but then again, find other possibilities. ez pz


export default function PullTab ( {label, route, threshold = 400, color, paperApi, viewportHeight}: PullTabProps) {
    const router = useRouter();

    //spring value for vertical movement
    const [{ y }, api] = useSpring(() => ({ y: 0}));

    
  //drag gesture logic
  const bind = useDrag(({ down, movement: [, my] }) => {
    const pull = Math.max(0, my); 

    if (down) {
      //dollow the cursorexactly while dragging
      api.start({ y: pull, immediate: true });
      paperApi.start({ y: pull - viewportHeight });
      return;

      
    }

    // On release: check threshold
    if (pull > threshold) {
      router.push(route);
      paperApi.start({ y: -viewportHeight });
      api.start({ y: 0 });
      return;
    }

    // todo: add some sort of loading screen? or something to show that loading is being done. looks flat right now.
    // Snap back if not enough pull
    // how it sohuld work? 
    // cover entire screen > wait for complete loading > animation pull back up.
    api.start({ y: 0 });
    paperApi.start({ y: -viewportHeight });

  });

    return (
        <animated.div
      {...bind()}
      className="tab-design paper-outline"
      style={{
        
        top: 0,
        transform: y.to(v => `translateY(${v - 240}px)`),
        touchAction: "none",
        width: 120,
        height: 300,// 60 pixels always visible
        borderRadius: "0 0 12px 12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "grab",
        userSelect: "none",
      }}
    >
      <div className="stitch-layer">
        <div className="tab-text-container">
          {label}

        </div>
        
      </div>
    </animated.div>

      
      
    )
}