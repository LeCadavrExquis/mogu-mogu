import React, {FC, useCallback, useRef, useState} from "react";
import {Box, Paper} from "@mui/material";
import {useSpring} from "@react-spring/web";
import {imageData, MoguImageData} from "../App";
import Carousel from "react-material-ui-carousel";
import {NataCube} from "./NataCube";
import {useTimeout} from "usehooks-ts";
// @ts-ignore
import {ReactComponent as CloudsSvg} from "../resources/clouds.svg";

interface MoguCarouseleProps {
    items: MoguImageData[]
    currentIdx: number
}
export const MoguCarousele: FC<MoguCarouseleProps> = (props) => {
    const ref = useRef<HTMLDivElement>(null)
    const [stateCounter, setStateCounter] = useState(1)
    const [bottlePos, bottleRef] = useSpring(() => ({
        pos: [-3000, 0],
        config: {
            duration: 1000,
            tension: 280,
            friction: 120
        },
    }), [])

    const [backgroundColor, setBackgroundColor] = useState(imageData[0].color)

    const [cubes, setCubes] = useState([
        {x: -1000, y: -1000},
        {x: -1000, y: -1000},
        {x: -1000, y: -1000},
        {x: -1000, y: -1000},
        {x: -1000, y: -1000},
        {x: -1000, y: -1000},
        {x: -1000, y: -1000},
        {x: -1000, y: -1000},
        {x: -1000, y: -1000},
        {x: -1000, y: -1000},
        {x: -1000, y: -1000},
        {x: -1000, y: -1000},
        {x: -1000, y: -1000},
        {x: -1000, y: -1000},
        {x: -1000, y: -1000},
        {x: -1000, y: -1000},
        {x: -1000, y: -1000},
        {x: -1000, y: -1000},
        {x: -1000, y: -1000},
        {x: -1000, y: -1000},
        {x: -1000, y: -1000},
        {x: -1000, y: -1000},
        {x: -1000, y: -1000},
        {x: -1000, y: -1000},
        {x: -1000, y: -1000},
        {x: -1000, y: -1000},
        {x: -1000, y: -1000},
        {x: -1000, y: -1000},
        {x: -1000, y: -1000},
        {x: -1000, y: -1000},
        {x: -1000, y: -1000},
        {x: -1000, y: -1000},
        {x: -1000, y: -1000},
        {x: -1000, y: -1000},
        {x: -1000, y: -1000},
        {x: -1000, y: -1000},
        {x: -1000, y: -1000},
        {x: -1000, y: -1000},
    ])

    useTimeout(() => {
        setCubes([
            {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
            {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
            {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
            {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
            {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
            {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
            {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
            {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
            {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
            {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
            {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
            {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
            {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
            {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
            {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
            {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
            {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
            {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
            {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
            {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
            {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
            {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
            {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
            {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
            {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
            {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
            {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
            {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
            {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
            {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
            {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
            {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
            {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
            {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
            {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
            {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
            {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
            {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
            {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
            {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
        ])
    }, 100)

    // useInterval(() => {
    //     if (stateCounter % 5 === 0) {
    //         bottleRef.update({pos: [-3000, 0]})
    //         bottleRef.start()
    //     }
    //     console.log(ref)
    //     if (stateCounter % 5 === 1) {
    //         bottleRef.update({pos: [0, 0]})
    //         bottleRef.start()
    //
    //     }
    //     setStateCounter(stateCounter + 1)
    // }, 0)

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
        <Carousel
            index={props.currentIdx}
            indicators={false}
            navButtonsAlwaysInvisible={true}
            duration={1000}
            swipe={false}
            onChange={(now, previous) => {
                setBackgroundColor(props.items[now!].color)
                setCubes([
                    {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
                    {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
                    {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
                    {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
                    {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
                    {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
                    {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
                    {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
                    {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
                    {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
                    {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
                    {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
                    {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
                    {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
                    {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
                    {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
                    {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
                    {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
                    {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
                    {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
                    {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
                    {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
                    {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
                    {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
                    {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
                    {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
                    {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
                    {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
                    {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
                    {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
                    {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
                    {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
                    {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
                    {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
                    {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
                    {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
                    {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
                    {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
                    {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
                    {x: Math.random() * ref.current!.offsetWidth, y: Math.random() * ref.current!.offsetHeight},
                ])
            }}
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
            <h2>{props.item.title}</h2>
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