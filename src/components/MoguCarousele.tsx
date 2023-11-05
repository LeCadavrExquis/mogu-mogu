import React, {FC, useCallback, useEffect, useRef, useState} from "react";
import {Box, Paper} from "@mui/material";
import {useSpring} from "@react-spring/web";
import {imageData, MoguImageData} from "../App";
import Carousel from "react-material-ui-carousel";
import {NataCube} from "./NataCube";
import {useEffectOnce, useElementSize, useTimeout} from "usehooks-ts";
// @ts-ignore
import {ReactComponent as CloudsSvg} from "../resources/clouds.svg";
import {BottleFruit} from "./BotlleFruit";
import {useInterval} from "react-material-ui-carousel/dist/components/util";

interface MoguCarouseleProps {
    items: MoguImageData[]
    currentIdx: number
}
export const MoguCarousele: FC<MoguCarouseleProps> = (props) => {
    const [squareRef, { width, height }] = useElementSize()

    const [arrivingFruit, arrivingFruitRef] = useSpring(() => ({
        pos: [0, 0],
        config: {
            duration: 300,
            tension: 280,
            friction: 120
        },
    }), [])
    const [leavingFruit, leavingFruitRef] = useSpring(() => ({
        pos: [0, 0],
        config: {
            duration: 500,
            tension: 180,
            friction: 220
        },
    }), [])
    const [isLeavingBottleVisible, setIsLeavingBottleVisible] = useState(false)
    const [leavingBottleSrc, setLeavingBottleSrc] = useState(props.items[0].fruitSrc)
    const [isNewFruitVisible, setIsNewFruitVisible] = useState(false)
    const [newFruitSrc, setNewFruitSrc] = useState(props.items[0].fruitSrc)

    const [backgroundColor, setBackgroundColor] = useState(imageData[0].color)

    const CUBE_COUNT = 20
    const [cubes, setCubes] = useState(
        Array(CUBE_COUNT)
            .fill(1)
            .map(() => {
            return {x: -1000, y: -1000}
        })
    )

    const [firstRun, setFirstRun] = useState(true)

    const animateFruits = useCallback(async () => {
        await new Promise(r => setTimeout(r, 400))
        arrivingFruitRef.update({pos: [(width / 2) + 150, (height / 2) + 100]})
        arrivingFruitRef.start()
        leavingFruitRef.update({pos: [100, height - 100]})
        leavingFruitRef.start()
        await new Promise(r => setTimeout(r, 400))
        leavingFruitRef.update({pos: [-1*width / 2, 0]})
        leavingFruitRef.start()
        await new Promise(r => setTimeout(r, 400))
        setIsLeavingBottleVisible(false)
        setLeavingBottleSrc(props.items[props.currentIdx].fruitSrc)
        leavingFruitRef.update({pos: [(width / 2) + 150, (height / 2) + 100]})
        leavingFruitRef.start()
        await new Promise(r => setTimeout(r, 600))
        setIsLeavingBottleVisible(true)
        setIsNewFruitVisible(false)
        await new Promise(r => setTimeout(r, 1000))
        arrivingFruitRef.update({pos: [(width / 2) - 120, (height / 2)]})
        arrivingFruitRef.start()
        // setIsLeavingBottleVisible(false)
        // leavingFruitRef.update({pos: [(width / 2) + 150, height - 250]})
        // leavingFruitRef.start()
        // await new Promise(r => setTimeout(r, 1200))
        // arrivingFruitRef.update({pos: [(width - 200) / 2, height / 2]})
        // arrivingFruitRef.start()
        // leavingFruitRef.update({pos: [(width - 200) / 4, 3 * height / 2]})
    }, [arrivingFruitRef, height, leavingFruitRef, props.currentIdx, props.items, width])

    useEffectOnce(() => {
        setCubes(
            Array(CUBE_COUNT)
                .fill(1)
                .map(() => {
                return {x: Math.random() * width, y: Math.random() * height}
            })
        )
    })

    useEffect(() => {
        if (!firstRun) {
            setBackgroundColor(props.items[props.currentIdx].color)
            setCubes(
                Array(CUBE_COUNT)
                    .fill(1)
                    .map(() => {
                        return {x: Math.random() * width, y: Math.random() * height}
                    })
            )
            setNewFruitSrc(props.items[props.currentIdx].fruitSrc)
            setIsNewFruitVisible(true)
            animateFruits()
        }
    }, [animateFruits, arrivingFruitRef, firstRun, height, props.currentIdx, props.items, width])

    useTimeout(() => {
        setFirstRun(false)
    }, 100)

    return <Box
                ref={squareRef}
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
            <BottleFruit fruitImageUrl={newFruitSrc} visible={isNewFruitVisible} pos={arrivingFruit.pos} />
        }
        {
            <BottleFruit fruitImageUrl={leavingBottleSrc} visible={isLeavingBottleVisible} pos={leavingFruit.pos} />
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