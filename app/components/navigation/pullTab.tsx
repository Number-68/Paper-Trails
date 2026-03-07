"use client";

import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { useRouter } from "next/navigation";


type PullTabProps = {
    label: string;
    route: string;
    threshold?: number;
};

// todo: threshold is currently fixed. I want to make it dynamic to at least like... 30% of the page for different resolution sizes.
// also, for mobile, I want to make this switch from verical tabs to just... a pullout menu since i feel it wouldn't function properly with how mobile works? 
// but then again, find other possibilities. ez pz


export default function PullTab ( {label, route, threshold = 400}: PullTabProps) {
    const router = useRouter();

    //spring value for vertical movement
    const [{ y }, api] = useSpring(() => ({ y: 0}));

    
  //drag gesture logic
  const bind = useDrag(({ down, movement: [, my] }) => {
    const pull = Math.max(0, my); // prevent upward drag

    if (down) {
      //dollow the cursorexactly while dragging
      api.start({ y: pull, immediate: true });
      return;
    }

    // On release: check threshold
    if (pull > threshold) {
      router.push(route);
      api.start({ y: 0 });
      return;
    }

    // todo: add some sort of loading screen? or something to show that loading is being done. looks flat right now.
    // Snap back if not enough pull
    api.start({ y: 0 });
  });

    return (
        
        <animated.div 
            className="paper-outline"
            {...bind()}
            style={{
                transform: y.to((v) => `translateY(${v}px)`),
                touchAction: "none",
                width: 120,
                height: 40,
                background: "papayawhip",
                borderRadius: "0 0 12px 12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "grab",
                boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
                userSelect: "none",
            }}
        >
        {label}
        </animated.div>
    )
}