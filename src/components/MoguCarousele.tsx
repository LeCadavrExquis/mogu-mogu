import React, {FC, useCallback, useRef, useState} from "react";
import {Box, Button, Card, CardContent, Paper, Typography} from "@mui/material";
import {animated, to, useSpring} from "@react-spring/web";
import {useInterval} from "react-material-ui-carousel/dist/components/util";
import {imageData, MoguImageData} from "../App";
import {useTimeout} from "usehooks-ts";
import Carousel from "react-material-ui-carousel";
import {NataCube} from "./NataCube";

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
        {x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight},
        {x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight},
        {x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight},
        {x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight},
        {x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight},
        {x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight},
        {x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight},
        {x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight},
        {x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight},
        {x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight},
        {x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight},
        {x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight},
        {x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight},
        {x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight},
        {x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight},
        {x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight},
        {x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight},
        {x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight},
        {x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight},
        {x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight},
        {x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight},
        {x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight},
        {x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight},
        {x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight},
        {x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight},
        {x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight},
        {x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight},
        {x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight},
        {x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight},
        {x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight},
        {x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight},
        {x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight},
        {x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight},
        {x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight},
        {x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight},
        {x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight},
        {x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight},
        {x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight},
    ])

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
    // }, 1000)

    const getCurrentColor = useCallback(() => props.items[(props.currentIdx + 1) % props.items.length].color,
        [props.currentIdx, props.items]
    )

    return <Box ref={ref}
                width={"70%"}
                sx={{
                    position: "relative",
                    background: `radial-gradient(closest-side,${backgroundColor},#FFFFFF00)`,
                    animation: "fadein"
                }}>
        {
            cubes
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
            onChange={() => {
                setBackgroundColor(getCurrentColor())
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
                imageData.map( (item, i) => <CarouselItem key={i} item={item} /> )
            }
        </Carousel>

        {/*<animated.div*/}
        {/*    style={{*/}
        {/*        transform: to([bottlePos.pos], ([x, y]) => `translate3d(${x}px,${y}px,0)`)*/}
        {/*    }}*/}
        {/*>*/}
        {/*    <img*/}
        {/*        srcSet={`${props.items[0].imgSrc}?w=270&h=555&fit=fill&auto=format&dpr=3 3x`}*/}
        {/*        src={`${props.items[0].imgSrc}?w=270&h=555&fit=fill&auto=format`}*/}
        {/*        alt={props.items[0].title}*/}
        {/*        width={270}*/}
        {/*        height={555}*/}
        {/*        loading="lazy"*/}
        {/*    />*/}
        {/*</animated.div>*/}
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