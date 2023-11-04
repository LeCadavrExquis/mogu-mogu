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

export type MoguImageData = {
    imgSrc: string
    color: string
    title: string
}

export const imageData: Array<MoguImageData> = [
    { imgSrc: "/img/bottles/Coconut.png", color: "#f2f2f2", title: "Kokos" },
    { imgSrc: "/img/bottles/Grape.png", color: "#7b8ef2", title: "Winogrono" },
    { imgSrc: "/img/bottles/Mango.png", color: "#ffab5b", title: "Mango" },
    { imgSrc: "/img/bottles/Orange.png", color: "#ff8c42", title: "Pomarańcza" },
    { imgSrc: "/img/bottles/Peach.png", color: "#ffc492", title: "Brzoskwinia" },
    { imgSrc: "/img/bottles/Pineapple.png", color: "#ffc740", title: "Ananas" },
    { imgSrc: "/img/bottles/Raseberry.png", color: "#be408b", title: "Malina" },
    { imgSrc: "/img/bottles/Watermelon.png", color: "#ff5e5e", title: "Arbuz" },
    { imgSrc: "/img/bottles/CottonCandy.png", color: "#ffb8ff", title: "Wata cukrowa" },
    { imgSrc: "/img/bottles/Lychee.png", color: "#ff738f", title: "Liczi" },
    { imgSrc: "/img/bottles/Melon.png", color: "#e8ff87", title: "Melon" },
    { imgSrc: "/img/bottles/PassionFruit.png", color: "#ffaf2b", title: "Marakuja" },
    { imgSrc: "/img/bottles/PinaColada.png", color: "#fff5b1", title: "Pina Colada" },
    { imgSrc: "/img/bottles/PinkGuava.png", color: "#ff8197", title: "Różowa Guava" },
    { imgSrc: "/img/bottles/Strawberry.png", color: "#ff6d6d", title: "Truskawka" },
    { imgSrc: "/img/bottles/Yogurt.png", color: "#f2d9ff", title: "Jogurt" },
]

function App() {
    const [currentBottleIdx, setCurrentBottleIdx] = useState(0)

    useInterval(() => {
        setCurrentBottleIdx((currentBottleIdx + 1) % imageData.length)
    }, 3000)

    return (
    <div className="App">
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
