import { useSpring, animated } from "@react-spring/web";

export default function LoadingPaper() {
    return (
        <animated.div
        style={{
        transform: y.to(v => `translateY(${v}px)`),
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 900,
        pointerEvents: "none",
      }}
    />
    )
}