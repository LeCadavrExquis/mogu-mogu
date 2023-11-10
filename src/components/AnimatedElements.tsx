import {animated, SpringValue, to, useSpring} from "@react-spring/web";
import {FC, useEffect} from "react";
import {useTimeout} from "usehooks-ts";
import {nataCubesSrc} from "../resources/ResourceHelper";

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

    return <animated.img
        key={props.index}
        src={nataCubesSrc[(props.index % 4)]}
        onClick={props.onClick}
        style={{
            transform: to([nataPos.pos], ([x, y]) => `translate3d(${x}px,${y}px,0)`),
            height: 50, width: 50,
            position: "absolute",
        }}
    />;
}

interface BottleFruitProp {
    key: string
    fruitImageUrl: string
    visible: boolean
    pos: SpringValue<number[]> | number[]
}

const BottleFruit: FC<BottleFruitProp> = (props) => {
    return <animated.img
        key={props.key}
        src={props.fruitImageUrl}
        style={{
            display: props.visible ? "block" : "none",
            transform: to([props.pos], ([x, y]) => `translate3d(${x}px,${y}px,0)`),
            height: 300, width: 300,
            position: "absolute",
        }}
    />;
}


export {NataCube, BottleFruit}