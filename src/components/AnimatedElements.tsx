import {animated, SpringValue, to, useSpring, useTransition} from "@react-spring/web";
import {FC, useEffect, useState} from "react";
import {useScreen, useTimeout} from "usehooks-ts";
import {nataCubesSrc} from "../resources/ResourceHelper";

export type Position = {
    x: number,
    y: number
}

interface NataCubeProp {
    delayAppearance?: boolean
    index: number
    pos: Position
    crawlingDuration?: number
    onClick?: () => void
}

const NataCube: FC<NataCubeProp> = (props) => {
    const [visible, setVisible] = useState(!props.delayAppearance)
    const [nataPos, nataRef] = useSpring(() => ({
        pos: [props.pos.x, props.pos.y],
        config: {
            duration: 2000,
            tension: 180,
            friction: 820
        },
    }), [])
    const [opacity, opacityRef] = useSpring(() => ({
        opacity: visible ? 1 : 0,
        config: {
            duration: 500,
        },
    }), [visible]);

    useTimeout(() => {
        if (props.crawlingDuration) {
            const minusX = Math.random() >= 0.5 ? -1 : 1
            const minusY = Math.random() >= 0.5 ? -1 : 1
            nataRef.update({
                pos: [nataPos.pos.get()[0] + minusX * Math.random() * 100, nataPos.pos.get()[1] + minusY * Math.random() * 100],
                config: {duration: props.crawlingDuration}
            })
            nataRef.start()
        }
    }, 250)

    useTimeout(() => {
        setVisible(true)
    }, props.delayAppearance ? Math.random() * 10000 : null)

    return <animated.img
        key={props.index}
        src={nataCubesSrc[(props.index % 4)]}
        onClick={props.onClick}
        alt={"nata de coco"}
        style={{
            opacity: opacity.opacity,
            display: visible ? "block" : "none",
            transform: to([nataPos.pos], ([x, y]) => `translate3d(${x}px,${y}px,0)`),
            height: 50, width: 50,
            position: "absolute",
        }}
    />;
}

interface BottleFruitProp {
    name?: string
    fruitImageUrl: string
    visible: boolean
    pos: SpringValue<number[]> | number[]
    size?: string
}

const BottleFruit: FC<BottleFruitProp> = (props) => {
    const screen = useScreen()
    const scale = screen?.width! < 800 || props.size === "sm" ? 0.7 : 1
    return <animated.img
        key={props.name ? props.name : props.fruitImageUrl}
        src={props.fruitImageUrl}
        alt={"butelka Mogu Mogu"}
        style={{
            display: props.visible ? "block" : "none",
            transform: to([props.pos], ([x, y]) => `translate3d(${x}px,${y}px,0)`),
            height: 300, width: 300,
            position: "absolute",
            zIndex: 2, scale: scale
        }}
    />;
}


export {NataCube, BottleFruit}