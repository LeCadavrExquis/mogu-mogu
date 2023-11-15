import React, {FC, useCallback, useRef, useState} from 'react';
import './App.css';
import {Box, Button, Divider, Link, Stack, Typography} from "@mui/material";
import {EmailRounded, FacebookOutlined, HomeWorkRounded, Instagram, PhoneInTalkRounded} from "@mui/icons-material";
import {ContactCard, FindUs, GottaChewCard, MoguCard, NataDeCocoCard} from "./components/MoguCards";
import {MoguCarousele} from "./components/MoguCarousele";
import {MoguMenuHeader} from "./components/MoguMenuHeader";
import {useInterval} from "react-material-ui-carousel/dist/components/util";
import {MoguGallery} from "./components/MoguGallery";
import YouTube, {YouTubeProps} from "react-youtube";
import {useScreen, useTimeout} from "usehooks-ts";
import {NataCube, Position} from "./components/AnimatedElements";
import {imageData, moguMansSrc} from "./resources/ResourceHelper";


function App() {
    const [currentBottleIdx, setCurrentBottleIdx] = useState(0)
    const ref = useRef<HTMLDivElement>(null)
    const screen = useScreen()

    const CUBE_COUNT_TOTAL = 200
    const [cubes, setCubes] = useState([] as Position[])
    const shakeCubes = useCallback((cubesCount: number) => {
        const newCubes = cubes.length === cubesCount ?
            cubes
                .map(({x, y}) => {
                    return {
                        x: x + (2 * Math.random() - 1) * (ref.current?.offsetWidth! - 100) / 100,
                        y: y + (2 * Math.random() - 1) * (ref.current?.offsetHeight! - 100) / 100
                    }
                }) :
            Array(cubesCount)
                .fill(1)
                .map(() => {
                    return {x: Math.random() * (ref.current?.offsetWidth! - 100), y: Math.random() * (ref.current?.offsetHeight! - 100)}
                })
        setCubes(newCubes)
    }, [cubes, ref])

    useInterval(() => setCurrentBottleIdx((currentBottleIdx + 1) % imageData.length), 5000)
    useInterval(() => shakeCubes(CUBE_COUNT_TOTAL), 10000)
    useTimeout(() => shakeCubes(CUBE_COUNT_TOTAL), 250)

    return (
    <div className="App" ref={ref}>
        {
            cubes
                .filter(pos => pos.x > 0)
                .map((pos, idx) =>
                    <NataCube
                        index={idx}
                        pos={pos}
                        crawlingDuration={10000}
                        delayAppearance={true}
                        onClick={() => shakeCubes(CUBE_COUNT_TOTAL)}
                    />
                )
        }
        <img
            style={{
                display: screen?.width! > 800 ? "block" : "none",
                position: "absolute",
                width: 400,
                bottom: 64,
                right: 64,
                zIndex: 4
            }}
            loading="lazy"
            src={moguMansSrc[2]}
            alt={"Ludzik mogu obserwator"}
        />
        <Stack
            alignItems={"center"}
            spacing={2}
        >
            <MoguMenuHeader
                onContactClicked={() => document.querySelector(".contact")?.scrollIntoView() }
                onFindUsClicked={() => document.querySelector(".findUs")?.scrollIntoView() }
                onFlavoursClicked={() => document.querySelector(".flavors")?.scrollIntoView() }
                onNataClicked={() => document.querySelector(".nata")?.scrollIntoView() }
            />
            <Stack
                direction={screen?.width! > 1000 ? "row" : "column"}
                sx={{
                    width: 1,
                    background: `linear-gradient(#bcf4ff, white)`,
                    paddingTop: 8,
                }}
                justifyContent={"space-evenly"}
            >
                <MoguCarousele currentIdx={currentBottleIdx} items={imageData} />
                <GottaChewCard/>
                <img
                    style={{position: "absolute", width: "200", top: screen?.width! < 800 ? 64 : 200, left: screen?.width! < 800 ? 2 : 64, zIndex: 0}}
                    src={moguMansSrc[3]}
                    alt={"Ludzik mogu pijący soczek"}
                    loading="lazy"
                />
            </Stack>
            <Typography
                variant={screen?.width! > 600 ? "h1" : "h3"}
                sx={{m:3, zIndex: 2}}
                className={"flavors"}
            >
                Odkryj wszystkie smaki!
            </Typography>
            <MoguGallery imageData={imageData} />
            <Stack sx={{position: "relative", width: "100%"}} alignItems={"center"}>
                <NataDeCocoCard />
                <Divider sx={{height: 64}} />
                <img
                    style={{
                        position: screen?.width! < 800 ? "relative" : "absolute",
                        width: 400,
                        top: 0,
                        right: 0,
                        zIndex: 4
                    }}
                    loading="lazy"
                    src={moguMansSrc[5]}
                    alt={"Ludzik Mogu kontakt"}
                />
                <FindUs />
            </Stack>
            <Divider sx={{height: 64}} />
            <Stack sx={{position: "relative", width: "100%"}} alignItems={"center"}>
                <ContactCard />
                <img
                    style={{
                        position: screen?.width! < 800 ? "relative" : "absolute",
                        width: 400,
                        bottom: 0,
                        left: 0,
                        zIndex: 4
                    }}
                    loading="lazy"
                    src={moguMansSrc[4]}
                    alt={"Ludzik mogu obserwator"}
                />
            </Stack>
        </Stack>
    </div>
  );
}

export default App;