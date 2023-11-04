import React, {FC, useRef, useState} from 'react';
import './App.css';
import {Box, Button, Divider, Link, Stack, Typography} from "@mui/material";
import {EmailRounded, FacebookOutlined, HomeWorkRounded, Instagram, PhoneInTalkRounded} from "@mui/icons-material";
import {MoguCard} from "./components/MoguCard";
import {MoguCarousele} from "./components/MoguCarousele";
import {MoguMenuHeader} from "./components/MoguMenuHeader";
import {useInterval} from "react-material-ui-carousel/dist/components/util";
import {MoguGallery} from "./components/MoguGallery";
import YouTube, {YouTubeProps} from "react-youtube";
import {BottleFruit} from "./components/BotlleFruit";
import {NataCube} from "./components/NataCube";
import {useTimeout} from "usehooks-ts";

export type MoguImageData = {
    imgSrc: string
    fruitSrc: string
    color: string
    title: string
}

export const imageData: Array<MoguImageData> = [
    { imgSrc: "/img/bottle/Coconut.png", color: "#f2f2f2", title: "Kokos", fruitSrc: "/img/fruit/Coconut_fruit.png" },
    { imgSrc: "/img/bottle/Grape.png", color: "#7b8ef2", title: "Winogrono", fruitSrc: "/img/fruit/Grape_fruit.png" },
    { imgSrc: "/img/bottle/Mango.png", color: "#ffab5b", title: "Mango", fruitSrc: "/img/fruit/Mango_fruit.png" },
    { imgSrc: "/img/bottle/Orange.png", color: "#ff8c42", title: "Pomarańcza", fruitSrc: "/img/fruit/Orange_fruit.png" },
    { imgSrc: "/img/bottle/Peach.png", color: "#ffc492", title: "Brzoskwinia", fruitSrc: "/img/fruit/Peach_fruit.png" },
    { imgSrc: "/img/bottle/Pineapple.png", color: "#ffc740", title: "Ananas", fruitSrc: "/img/fruit/Pineapple_fruit.png" },
    { imgSrc: "/img/bottle/Raseberry.png", color: "#be408b", title: "Malina", fruitSrc: "/img/fruit/Raseberry_fruit.png" },
    { imgSrc: "/img/bottle/Watermelon.png", color: "#ff5e5e", title: "Arbuz", fruitSrc: "/img/fruit/Watermelon_fruit.png" },
    { imgSrc: "/img/bottle/CottonCandy.png", color: "#ffb8ff", title: "Wata cukrowa", fruitSrc: "/img/fruit/CottonCandy_fruit.png" },
    { imgSrc: "/img/bottle/Lychee.png", color: "#ff738f", title: "Liczi", fruitSrc: "/img/fruit/Lychee_fruit.png" },
    { imgSrc: "/img/bottle/Melon.png", color: "#e8ff87", title: "Melon", fruitSrc: "/img/fruit/Melon_fruit.png" },
    { imgSrc: "/img/bottle/PassionFruit.png", color: "#ffaf2b", title: "Marakuja", fruitSrc: "/img/fruit/PassionFruit_fruit.png" },
    { imgSrc: "/img/bottle/PinaColada.png", color: "#fff5b1", title: "Pina Colada", fruitSrc: "/img/fruit/PinaColada_fruit.png" },
    { imgSrc: "/img/bottle/PinkGuava.png", color: "#ff8197", title: "Różowa Guava", fruitSrc: "/img/fruit/PinkGuava_fruit.png" },
    { imgSrc: "/img/bottle/Strawberry.png", color: "#ff6d6d", title: "Truskawka", fruitSrc: "/img/fruit/Strawberry_fruit.png" },
    { imgSrc: "/img/bottle/Yogurt.png", color: "#f2d9ff", title: "Jogurt", fruitSrc: "/img/fruit/Yogurt_fruit.png" }
]


function App() {
    const [currentBottleIdx, setCurrentBottleIdx] = useState(0)
    const ref = useRef<HTMLDivElement>(null)

    const CUBE_COUNT = 50
    const [cubes, setCubes] = useState(
        Array(CUBE_COUNT)
            .fill(1)
            .map(() => {
                return {x: 1000, y: 1000}
            })
    )

    useInterval(() => {
        setCurrentBottleIdx((currentBottleIdx + 1) % imageData.length)
    }, 3000)

    useTimeout(() => {
        setCubes(
            Array(CUBE_COUNT)
                .fill(1)
                .map(() => {
                    return {x: Math.random() * ref.current!.offsetWidth / 2, y: Math.random() * ref.current!.offsetHeight / 2}
                })
        )
    }, 200)

    useTimeout(() => {
        setCubes(
            Array(CUBE_COUNT)
                .fill(1)
                .map(() => {
                    return {x: Math.random() * ref.current!.offsetWidth / 2, y: Math.random() * ref.current!.offsetHeight / 2}
                })
        )
    }, 400)

    useTimeout(() => {
        setCubes(
            Array(CUBE_COUNT)
                .fill(1)
                .map(() => {
                    return {x: 0, y: 0}
                })
        )
    }, 200)

    return (
    <div className="App" ref={ref}>
        <Stack
            alignItems={"center"}
            spacing={2}
            sx={{width: 1}}
        >
            <MoguMenuHeader
                onContactClicked={() => document.querySelector(".contact")?.scrollIntoView() }
                onFindUsClicked={() => document.querySelector(".findUs")?.scrollIntoView() }
                onFlavoursClicked={() => document.querySelector(".flavors")?.scrollIntoView() }
                onNataClicked={() => document.querySelector(".nata")?.scrollIntoView() }
            />
            <Stack
                direction={"row"}
                sx={{
                    width: 1,
                    background: `linear-gradient(#bcf4ff, white)`,
                    paddingTop: 8,
                }}
                justifyContent={"space-around"}>
                <MoguCarousele currentIdx={currentBottleIdx} items={imageData} />
                <MoguCard
                    title={"WGRYŹ SIĘ W SOK!"}
                    sx={{width: 600}}
                >
                    <Typography paragraph={true}>
                        Spróbuj orzeźwiających żelków kokosowych pływających w twoim ulubionym soku.
                        W 2001 roku tajlandzka firma Sappe zaskoczyła konsumentów prezentując napój z galaretką z kokosa, czyli <strong>nata de coco</strong>.
                        Tajlandzcy konsumenci natychmiast pokochali jego wyjątkowy smak, co skłoniło producenta do ekspansji na rynki światowe.
                        Mogu Mogu znajdziesz w <strong>całej Polsce</strong>!
                    </Typography>
                </MoguCard>
            </Stack>
            <Typography
                variant={"h1"}
                sx={{m:3}}
                className={"flavors"}
            >
                Odkryj wszystkie smaki!
            </Typography>
            <MoguGallery imageData={imageData} />
            <Divider sx={{height: 64}} />
            <NataDeCocoCard />
            <Divider sx={{height: 64}} />
            <FindUs />
            <Divider sx={{height: 64}} />
            <ContactCard />
            <Divider className={"end"} sx={{height: 64}} />
        </Stack>
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
    </div>
  );
}

const NataDeCocoCard: FC = () => {
    return <MoguCard
        title={"O NATA DE COCO"}
        className={"nata"}
    >
        <Stack direction={"column"} justifyItems={"end"} width={1000}>
            <Typography paragraph={true}>
                Nata de Coco, czyli galaretka kokosowa, to najbardziej tajemniczy składnik Mogu Mogu, który nadaje mu wyjątkowego charakteru.
                To produkt naturalny, który powstaje w procesie fermentacji wody kokosowej.
                Woda kokosowa, znana jako sok z kokosa, jest bogata w mikroelementy i witaminy, co czyni ją zdrowym i odżywczym składnikiem.
                Woda kokosowa jest również niskokaloryczna i pomaga w utrzymaniu dobrego zdrowia.
            </Typography>
            <Stack>
                <Button>CZYTAJ WIĘCEJ</Button>
            </Stack>
        </Stack>
    </MoguCard>;
}

const ContactCard: FC = () => {
    return <MoguCard
        className={"contact"}
        title={"KONTAKT"}
        subtitle={"POL AMAL Oficialny dystrybutor Mogu Mogu na Polskę"}
    >
        <Stack direction={"column"} alignItems={"center"}>
            <Stack direction={"row"} sx={{width: 1000, marginBottom: 4}} justifyContent={"space-around"}>
                <Stack direction={"column"}>
                    <Typography variant={"h5"}>
                        Jean Michel Żarnowiec
                    </Typography>
                    <Divider sx={{marginBottom: 2}}/>
                    <Stack direction={"row"}>
                        <PhoneInTalkRounded sx={{marginRight: 2}}/>
                        <Typography paragraph={true}>
                            +48 501 086 898
                        </Typography>
                    </Stack>
                    <Stack direction={"row"}>
                        <EmailRounded sx={{marginRight: 2}}/>
                        <Typography paragraph={true}>
                            jmz@mogu-mogu.pl
                        </Typography>
                    </Stack>
                </Stack>
                <Stack direction={"column"}>
                    <Typography variant={"h5"}>
                        Marek Szypszak
                    </Typography>
                    <Divider sx={{marginBottom: 2}}/>
                    <Stack direction={"row"}>
                        <PhoneInTalkRounded sx={{marginRight: 2}}/>
                        <Typography paragraph={true}>
                            +48 692 718 500
                        </Typography>
                    </Stack>
                    <Stack direction={"row"}>
                        <EmailRounded sx={{marginRight: 2}}/>
                        <Typography paragraph={true}>
                            marek@mogu-mogu.pl
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Stack direction={"row"}>
                <EmailRounded sx={{marginRight: 2}}/>
                <Typography paragraph={true}>
                    biuro@mogu-mogu.pl
                </Typography>
            </Stack>
            <Stack direction={"row"} sx={{w: 1}}>
                <HomeWorkRounded sx={{marginRight: 2}}/>
                <Typography paragraph={true} sx={{textAlign:"start"}}>
                    ul. Letniskowa 12C <br/>05-807 Podkowa Leśna
                </Typography>
            </Stack>
        </Stack>
    </MoguCard>
}

const FindUs: FC = () => {
    const ytOpts: YouTubeProps['opts'] = {
        height: '360',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            muted: true,
            start: 33,
        },
    }

    return <MoguCard
        className={"findUs"}
        title={"ZNAJDŹ NAS!"}
    >
        <Stack direction={"row"} justifyItems={"end"} width={1200}>
            <YouTube
                videoId={"FcJzUyFmJPM"}
                opts={ytOpts}
            />
            <Box sx={{paddingLeft: 4}}>
                <Stack direction={"column"}>
                    <Typography paragraph={true}>
                        Polscy konsumenci mogą przekonać się o wyjątkowości Mogu Mogu, dzięki firmie Pol Amal, oficjalnemu importerowi i dystrybutorowi Mogu Mogu.
                        Napój znajdziesz w sieciach sklepów Aldi, Auchan, Biedronka, Kuchnie Świata. Dostępy również w hurtowniach Makro.
                    </Typography>
                    <Typography paragraph={true}>
                        Znasz już piosenkę o Mogu Mogu? Żeby zobaczyć więcej i być na bieżąco z nowościami śledź nas na mediach społecznościowych.
                    </Typography>
                    <Stack direction={"row"} sx={{width: 1, marginTop: 4}} justifyContent={"space-evenly"}>
                        <Stack direction={"row"}>
                            <FacebookOutlined sx={{fontSize: 64}}/>
                            <Link href="https://www.facebook.com/MoguMoguPL" variant="body1" sx={{margin: "auto"}}>
                                Mogu Mogu Polska
                            </Link>
                        </Stack>
                        <Stack direction={"row"}>
                            <Instagram sx={{fontSize: 64}}/>
                            <Link href="https://www.instagram.com/mogumogupl" variant="body1" sx={{margin: "auto"}}>
                                @mogumogupl
                            </Link>
                        </Stack>
                    </Stack>
                </Stack>
            </Box>
        </Stack>
    </MoguCard>
}

export default App;
