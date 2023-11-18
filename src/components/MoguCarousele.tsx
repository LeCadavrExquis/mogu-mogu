import React, {FC, useCallback, useEffect, useState} from "react";
import {Box, Paper} from "@mui/material";
import {useSpring} from "@react-spring/web";
import {imageData, MoguImageData} from "../resources/ResourceHelper";
import Carousel from "react-material-ui-carousel";
import {useEffectOnce, useElementSize, useTimeout} from "usehooks-ts";
import {Fruit, NataCube} from "./AnimatedElements";

interface MoguCarouseleProps {
    items: MoguImageData[]
    currentIdx: number
}

export const MoguCarousele: FC<MoguCarouseleProps> = (props) => {
    const [squareRef, {width, height}] = useElementSize()

    const [backgroundColor, setBackgroundColor] = useState(imageData[0].color)
    const CUBE_COUNT = 20
    const [cubes, setCubes] = useState(
        Array(CUBE_COUNT)
            .fill(1)
            .map(() => {
                return {x: 100, y: 1000}
            })
    )

    const [firstRun, setFirstRun] = useState(true)

    const [arrivingFruit, arrivingFruitRef] = useSpring(() => ({
        pos: [0, 200],
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

    const animateFruits = useCallback(async () => {
        const shortJump = width < 800
        const landPos = [(width / 2) + (shortJump ? 5 : 75), (height / 2) + (shortJump ? 50 : 100)]
        arrivingFruitRef.update({pos: landPos})
        arrivingFruitRef.start()
        setIsLeavingBottleVisible(false)
        leavingFruitRef.update({pos: [Math.random() * width, height + 500], config: {duration: 4000}})
        leavingFruitRef.start()
        await new Promise(r => setTimeout(r, 500))
        setIsLeavingBottleVisible(false)
        setLeavingBottleSrc(props.items[props.currentIdx].fruitSrc)
        leavingFruitRef.update({pos: landPos, config: {duration: 200}})
        leavingFruitRef.start()
        await new Promise(r => setTimeout(r, 1000))
        setIsLeavingBottleVisible(true)
        setIsNewFruitVisible(false)
        arrivingFruitRef.update({pos: [(width / 2) - 120, (height / 2)]})
        arrivingFruitRef.start()
    }, [arrivingFruitRef, height, leavingFruitRef, props.currentIdx, props.items, width])

    useEffectOnce(() => {
        setCubes(
            Array(CUBE_COUNT)
                .fill(1)
                .map(() => {
                    return {x: Math.random() * (width - 100), y: Math.random() * (height - 100)}
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
        sx={{
            width: 1,
            position: "relative",
            background: `radial-gradient(closest-side,${backgroundColor},#FFFFFF00)`,
            animation: "fadein",
        }}>
        {
            cubes
                .filter(pos => pos.x > 0)
                .map((pos, idx) =>
                    <NataCube
                        index={idx}
                        pos={pos}
                    />
                )
        }
        {
            <Fruit
                name={"arrivingFruit"}
                fruitImageUrl={newFruitSrc}
                visible={isNewFruitVisible}
                pos={arrivingFruit.pos}
            />
        }
        {
            <Fruit
                name={"leavingFruit"}
                fruitImageUrl={leavingBottleSrc}
                visible={isLeavingBottleVisible}
                pos={leavingFruit.pos}
            />
        }
        <Carousel
            index={props.currentIdx}
            indicators={false}
            navButtonsAlwaysInvisible={true}
            autoPlay={false}
            swipe={false}
        >
            {
                imageData.map((item, i) => <CarouselItem key={i} item={item}/>)
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