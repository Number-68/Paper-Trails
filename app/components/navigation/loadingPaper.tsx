import { animated } from "@react-spring/web";
import type { SpringValue } from "@react-spring/web";


type LoadingPaperProps = {
  y: SpringValue<number>;
  color: string;
};




export default function LoadingPaper({ y, color}: LoadingPaperProps) {


    // this is where i last ended off. 
    // I'm goign to try to start making this paper thing right here right now...
    // this is gettting pretty cool and there's a lot of features that I'm trying 
    // to get. 
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