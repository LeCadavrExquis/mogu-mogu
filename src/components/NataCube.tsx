import {animated, to, useSpring} from "@react-spring/web";
import {FC, useEffect} from "react";
import {useTimeout} from "usehooks-ts";

const nataCubesResourceUrl = (idx: number) => `/img/nata-cube-${idx}.webp`

type Position = {
    x: number,
    y: number
}

interface NataCubeProp {
    index: number
    pos: Position
    crawlingSpeed?: number
    onClick?: () => void
}

const NataCube: FC<NataCubeProp> = (props) => {
    const [nataPos, nataRef] = useSpring(() => ({
        pos: [props.pos.x, props.pos.y],
        config: {
            duration: 2000,
            tension: 180,
            friction: 820
        },
    }), [])

    useEffect(() => {
        nataRef.update({pos: [props.pos.x, props.pos.y]})
        nataRef.start()
    }, [nataRef, props.pos])

    useTimeout(() => {
        if (props.crawlingSpeed) {
            const minusX = Math.random() >= 0.5 ? -1 : 1
            const minusY = Math.random() >= 0.5 ? -1 : 1
            nataRef.update({
                pos: [nataPos.pos.get()[0] + minusX * Math.random() * 100, nataPos.pos.get()[1] + minusY * Math.random() * 100],
                config: {
                    duration: props.crawlingSpeed // 10s
                }
            })
            nataRef.start()
        }
    }, 250)

    return <animated.div
        key={props.index}
        onClick={props.onClick}
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