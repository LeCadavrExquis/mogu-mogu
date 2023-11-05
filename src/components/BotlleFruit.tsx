import {animated, SpringValue, to, useSpring} from "@react-spring/web";
import {FC, useEffect} from "react";

interface BottleFruitProp {
    fruitImageUrl: string
    visible: boolean
    pos: SpringValue<number[]> | number[]
}

const BottleFruit: FC<BottleFruitProp> = (props) => {
    return <animated.div
        key={props.fruitImageUrl}
        style={{
            display: props.visible ? "block" : "none",
            transform: to([props.pos], ([x, y]) => `translate3d(${x}px,${y}px,0)`),
            backgroundImage: `url(${props.fruitImageUrl})`,
            backgroundRepeat: "no-repeat",
            height: "300px", width: "300px",
            position: "absolute",
        }}
    />;
}

export {BottleFruit}