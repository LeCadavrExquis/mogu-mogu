import {animated, to, useSpring} from "@react-spring/web";
import {FC, useEffect} from "react";

const nataCubesResourceUrl = (idx: number) => `/img/nata-cube-${idx}.webp`

type Position = {
    x: number,
    y: number
}

interface NataCubeProp {
    index: number
    pos: Position
}

const NataCube: FC<NataCubeProp> = (props) => {
    const [nataPos, nataRef] = useSpring(() => ({
        pos: [0,0],
        config: {
            duration: 500,
            tension: 580,
            friction: 620
        },
    }), [])

    useEffect(() => {
        nataRef.update({pos: [props.pos.x, props.pos.y]})
        nataRef.start()
    }, [nataRef, props.pos])

    return <animated.div
        key={props.index}
        style={{
            transform: to([nataPos.pos], ([x, y]) => `translate3d(${x}px,${y}px,0)`),
            backgroundImage: `url(${nataCubesResourceUrl((props.index % 4) + 1)})`,
            backgroundRepeat: "no-repeat",
            height: "100px", width: "100px",
            position: "absolute",
        }}
    />;
}

export {NataCube}