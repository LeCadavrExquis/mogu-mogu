import React, {FC, useCallback, useEffect, useRef, useState} from "react";
import {Box, Paper} from "@mui/material";
import {useSpring} from "@react-spring/web";
import {imageData, MoguImageData} from "../App";
import Carousel from "react-material-ui-carousel";
import {NataCube} from "./NataCube";
import {useEffectOnce, useTimeout} from "usehooks-ts";
// @ts-ignore
import {ReactComponent as CloudsSvg} from "../resources/clouds.svg";
import {BottleFruit} from "./BotlleFruit";
import {useInterval} from "react-material-ui-carousel/dist/components/util";

interface MoguCarouseleProps {
    items: MoguImageData[]
    currentIdx: number
}
export const MoguCarousele: FC<MoguCarouseleProps> = (props) => {
    const ref = useRef<HTMLDivElement>(null)
    const [stateCounter, setStateCounter] = useState(1)
    const [arrivingFruit, arrivingFruitRef] = useSpring(() => ({
        pos: [-1000, 0],
        config: {
            duration: 800,
            tension: 280,
            friction: 120
        },
    }), [])
    const [leavingFruit, leavingFruitRef] = useSpring(() => ({
        pos: [0, 0],
        config: {
            duration: 800,
            tension: 280,
            friction: 120
        },
    }), [])

    const [backgroundColor, setBackgroundColor] = useState(imageData[0].color)

    const CUBE_COUNT = 20
    const [cubes, setCubes] = useState(
        Array(CUBE_COUNT)
            .fill(1)
            .map(() => {
            return {x: -1000, y: -1000}
        })
    )

    const getCurrentItem = useCallback(() => {
        return props.items[props.currentIdx]
    }, [props.currentIdx, props.items])

    const getNextItem = useCallback(() => {
        return props.items[(props.currentIdx + 1) % props.items.length]
    }, [props.currentIdx, props.items])

    const animateFruits = useCallback(async () => {
        arrivingFruitRef.update({pos: [0, 200]})
        arrivingFruitRef.start()
        leavingFruitRef.update({pos: [800, 400]})
        leavingFruitRef.start()
        await new Promise(r => setTimeout(r, 300))
        arrivingFruitRef.update({pos: [400, 200]})
        arrivingFruitRef.start()
        leavingFruitRef.update({pos: [600, 300]})
        leavingFruitRef.start()
        await new Promise(r => setTimeout(r, 200))
        arrivingFruitRef.update({pos: [600, 300]})
        arrivingFruitRef.start()
        leavingFruitRef.update({pos: [400, 200]})
        leavingFruitRef.start()
        await new Promise(r => setTimeout(r, 100))
        arrivingFruitRef.update({pos: [800, 400]})
        arrivingFruitRef.start()
        leavingFruitRef.update({pos: [0, 200]})
        leavingFruitRef.start()
    }, [arrivingFruitRef, leavingFruitRef])

    useEffectOnce(() => {
        setCubes(
            Array(CUBE_COUNT)
                .fill(1)
                .map(() => {
                return {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight}
            })
        )
    })

    useInterval(() => {
        arrivingFruitRef.update({pos: [400, 0]})
        arrivingFruitRef.start()
    }, 2000)

    useEffect(() => {
        setBackgroundColor(getCurrentItem().color)
        setCubes(
            Array(CUBE_COUNT)
                .fill(1)
                .map(() => {
                return {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight}
            })
        )
        animateFruits()
    }, [animateFruits, arrivingFruitRef, getCurrentItem, props.currentIdx, props.items])

    return <Box ref={ref}
                width={1000}
                sx={{
                    position: "relative",
                    background: `radial-gradient(closest-side,${backgroundColor},#FFFFFF00)`,
                    animation: "fadein",
                }}>
        {
            cubes
                .filter(pos => pos.x > 0)
                .map((pos, idx) =>
                    <NataCube
                        key={idx}
                        index={idx}
                        pos={pos}
                    />
                )
        }
        {
            <BottleFruit fruitImageUrl={getCurrentItem().fruitSrc} visible={true} pos={arrivingFruit.pos} />
        }
        {
            <BottleFruit fruitImageUrl={getNextItem().fruitSrc} visible={true} pos={leavingFruit.pos} />
        }
        <Carousel
            index={props.currentIdx}
            indicators={false}
            navButtonsAlwaysInvisible={true}
            autoPlay={false}
            swipe={false}
        >
            {
                imageData.map((item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>
    </Box>
}

interface CarouseleItemProps {
    item: MoguImageData
}

const CarouselItem: FC<CarouseleItemProps> = (props) => {
    return (
        <Paper
            elevation={0}
            sx={{
                backgroundColor: 'transparent',
            }}
        >
            <img
                srcSet={`${props.item.imgSrc}?w=270&h=555&fit=fill&auto=format&dpr=3 3x`}
                src={`${props.item.imgSrc}?w=270&h=555&fit=fill&auto=format`}
                alt={props.item.title}
                width={270}
                height={555}
                loading="lazy"
            />
        </Paper>
    )
}