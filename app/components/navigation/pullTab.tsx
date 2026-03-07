"use client";

import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { useRouter } from "next/navigation";


type PullTabProps = {
    label: string;
    route: string;
    threshold?: number;
};


export default function PullTab ( {label, route, threshold = 120}: PullTabProps) {
    const router = useRouter();

    //spring value for vertical movement
    const [{ y }, api] = useSpring(() => ({ y: 0}));

    
  // Drag gesture logic
  const bind = useDrag(({ down, movement: [, my] }) => {
    const pull = Math.max(0, my); // prevent upward drag

    if (down) {
      // Follow the finger exactly while dragging
      api.start({ y: pull, immediate: true });
      return;
    }

    // On release: check threshold
    if (pull > threshold) {
      router.push(route);
      api.start({ y: 0 });
      return;
    }

    // Snap back if not enough pull
    api.start({ y: 0 });
  });

    return (
        
        <animated.div
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