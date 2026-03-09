import { animated } from "@react-spring/web";
import type { SpringValue } from "@react-spring/web";


type LoadingPaperProps = {
  y: SpringValue<number>;
  color: string;
};




export default function LoadingPaper({ y, color}: LoadingPaperProps) {

    return (
        <animated.div

        className="loading-paper"

        style={{
          transform: y.to(v => `translateY(${v}px)`),
          position: "fixed",
          top: "-100vh",
          width: "200vw",
          height: "200vh",
          zIndex: 900,
          pointerEvents: "none",
        }}
    />
    )
}