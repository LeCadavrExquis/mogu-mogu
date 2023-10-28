import React, {useState} from 'react';
import './App.css';
import {Box, Divider, Stack, Typography} from "@mui/material";
import {EmailRounded, HomeWorkRounded, PhoneInTalkRounded} from "@mui/icons-material";
import {MoguCard} from "./components/MoguCard";
import {MoguCarousele} from "./components/MoguCarousele";
import {MoguMenuHeader} from "./components/MoguMenuHeader";
import {useInterval} from "react-material-ui-carousel/dist/components/util";

export type MoguImageData = {
    imgSrc: string
    color: string
    title: string
}

export const imageData: Array<MoguImageData> = [
    { imgSrc: "/img/ananas_natural2.png", color: "#ffe855", title: "Mogu mogu Ananas natural color" },
    { imgSrc: "/img/apple_GB.png", color: "#dec37b", title: "Apple juice with Nata de Coco" },
    { imgSrc: "/img/blackcurrant_GB.png", color: "#6285de", title: "Blackcurrant juice with Nata de Coco" },
    { imgSrc: "/img/coconut_mogu.png", color: "#e7e4e4", title: "Mogu mogu coconut" },
    { imgSrc: "/img/mogu_raspberry.png", color: "#be408b", title: "Mogu mogu Raspberry natural color" },
    { imgSrc: "/img/truskawka_natural.png", color: "#f32c2c", title: "Mogu mogu Strawberry natural color" },
    { imgSrc: "/img/winogron_natural.png", color: "#ac2cc9", title: "Mogu mogu Grape natural color" },
    { imgSrc: "/img/orange_GB.png", color: "#ff4242", title: "Mogu mogu Strmogu-mogu-pink-guava.png natural color" },
    { imgSrc: "/img/Passion_Fruit_natural.png", color: "#163b46", title: "Mogu mogu GrPassion_Fruit_natural.png color" },
    { imgSrc: "/img/melon.jpg", color: "#b5ff65", title: "Mogu Raspmelon.jpgy natural color" },
    { imgSrc: "/img/lychee.png", color: "#e668ff", title: "Molychee.pngatural color" },
]

function App() {
    const [currentBottleIdx, setCurrentBottleIdx] = useState(0)

    useInterval(() => {
        setCurrentBottleIdx((currentBottleIdx + 1) % imageData.length)
    }, 5000)

    return (
    <div className="App">
        <Stack
            alignItems={"center"}
            spacing={2}
            sx={{
                width: "100%",
                background: `linear-gradient(#bcf4ff, white)`
            }}
        >
            <MoguMenuHeader />
            <Stack direction={"row"} sx={{padding: "64px"}} justifyContent={"space-between"}>
                <MoguCarousele currentIdx={currentBottleIdx} items={imageData} />
                <MoguCard
                    title={"WGRYŹ SIĘ W SOK!"}
                    sx={{width: 500}}
                >
                    <Typography paragraph={true}>
                        Mogu Mogu to egzotyczny napój, który zdobywa serca smakoszy na całym świecie. Ten orzeźwiający napój pochodzi z Tajlandii i zachwyca unikalnym połączeniem smaków. Mogu Mogu to nie tylko pyszne orzeźwienie, ale także zdrowy wybór, gdyż nie zawiera sztucznych barwników ani konserwantów. Wzbogacony naturalnymi owocami i żelkowymi kawałkami, ten napój to prawdziwa uczta dla podniebienia. Dostępny w wielu smakach, takich jak mango, truskawka czy kokos, Mogu Mogu to doskonały wybór na gorące dni. Spróbuj dziś i poczuj orzeźwiającą moc Mogu Mogu!
                    </Typography>
                </MoguCard>
            </Stack>
            <Stack alignItems={"center"} direction={"row"} flexWrap={"wrap"}>
                {imageData.map((item) => (
                    <Box
                        sx={{
                            padding: "64px",
                            background: `radial-gradient(closest-side,${item.color},#FFFFFFFF)`
                        }}
                    >
                        <img
                            srcSet={`${item.imgSrc}?w=360&h=740&fit=fill&auto=format&dpr=3 3x`}
                            src={`${item.imgSrc}?w=360&h=740&fit=fill&auto=format`}
                            width={100}
                            height={300}
                            alt={item.title}
                            loading="lazy"
                        />
                    </Box>
                ))}
                {/*<ImageList cols={3} rowHeight={1000}>*/}

                {/*</ImageList>*/}
            </Stack>
            <MoguCard
                title={"Znajdź nas!"}
                sx={{width: "100%"}}
            >
                <Typography paragraph={true}>
                    [DEBUG]
                    To będzie część z wspomnieniem o sklepach, w kßórych jesteśmy + podłączony kanał yt mogu mogu + podlinkowane nasze sociale
                </Typography>
            </MoguCard>
            <MoguCard
                title={"KONTAKT"}
                sx={{width: "100%"}}
            >
                <Stack>
                    <Typography variant={"subtitle1"}>
                        Dystrybutor Mogu Mogu na Polskę POL AMAL
                    </Typography>
                    <Divider sx={{margin: 5}}/>
                    <Stack direction={"row"}>
                        <PhoneInTalkRounded sx={{marginRight: 2}}/>
                        <Typography paragraph={true}>
                            +48 501 086 898
                        </Typography>
                    </Stack>
                    <Stack direction={"row"}>
                        <PhoneInTalkRounded sx={{marginRight: 2}}/>
                        <Typography paragraph={true}>
                            +48 213 769 420 [DEBUG]
                        </Typography>
                    </Stack>
                    <Stack direction={"row"}>
                        <EmailRounded sx={{marginRight: 2}}/>
                        <Typography paragraph={true}>
                            contant@mogumogu.pl
                        </Typography>
                    </Stack>
                    <Stack direction={"row"}>
                        <HomeWorkRounded sx={{marginRight: 2}}/>
                        <Typography paragraph={true}>
                            ul. Letniskowa 12C
                            05-807 Podkowa Leśna
                        </Typography>
                    </Stack>
                </Stack>
            </MoguCard>
        </Stack>
    </div>
  );
}

export default App;
