import {Box, Button, Card, CardContent, CardHeader, CardProps, Divider, Link, Stack, Typography} from "@mui/material";
import React, {FC, MutableRefObject, useState} from "react";
import {EmailRounded, FacebookOutlined, HomeWorkRounded, Instagram, PhoneInTalkRounded} from "@mui/icons-material";
import YouTube, {YouTubeProps} from "react-youtube";
import {useScreen} from "usehooks-ts";

interface MoguCardProps extends CardProps {
    title?: string
    subtitle?: string
    ref?: MutableRefObject<null>
    preferredWidth?: number
}

const MoguCard: FC<MoguCardProps> = (props) => {
    const screen = useScreen()
    const minCardWidth = 300

    return <Box sx={{position: "relative"}} ref={props.ref}>
        <Card
            elevation={3}
            sx={{
                position: "relative",
                borderRadius: '16px',
                width: props.preferredWidth && screen?.width! > props.preferredWidth ? props.preferredWidth : minCardWidth,
                ...props.sx
            }}
            {...props}
        >
            {props.title && <CardHeader title={props.title} subheader={props.subtitle}/>}
            <Divider/>
            <CardContent sx={{padding: screen?.width! > 1000 ? "32px" : "16px"}}>
                {props.children}
            </CardContent>
        </Card>
        <div
            style={{
                position: "absolute",
                width: "48px",
                height: "48px",
                right: "10%",
                top: "-16px",
                zIndex: "20",
                borderRadius: "24px",
                backgroundColor: "#d52b2b",
            }}
        />
    </Box>
}

const GottaChewCard: FC = () => {
    const screen = useScreen()

    return <Stack
        alignItems={"center"}
        sx={{paddingRight: screen?.width! > 800 ? 8 : 0}}
    ><MoguCard
        title={"WGRYŹ SIĘ W SOK!"}
        preferredWidth={800}
    >
        <Typography paragraph={true}>
            Spróbuj orzeźwiających żelków kokosowych pływających w twoim ulubionym soku.
            W 2001 roku tajlandzka firma Sappe zaskoczyła konsumentów prezentując napój z galaretką z kokosa,
            czyli <strong>nata de coco</strong>.
            Tajlandzcy konsumenci natychmiast pokochali jego wyjątkowy smak, co skłoniło producenta do ekspansji na
            rynki światowe.
            Mogu Mogu znajdziesz w <strong>całej Polsce</strong>!
        </Typography>
    </MoguCard></Stack>
}

const NataDeCocoCard: FC = () => {
    const [isCardExpanded, setIsCardExpaned] = useState(false)
    const buttonLabel = (isExpanded: boolean) => {
        return isExpanded ? "ZWIŃ" : "CZYTAJ WIĘCEJ"
    }

    return <MoguCard
        title={"O NATA DE COCO"}
        className={"nata"}
        preferredWidth={1000}
    >
        <Stack direction={"column"} justifyItems={"end"}>
            <Typography paragraph={true}>
                Nata de Coco, czyli galaretka kokosowa, to najbardziej tajemniczy składnik Mogu Mogu, który nadaje mu
                wyjątkowego charakteru.
                To produkt naturalny, który powstaje w procesie fermentacji wody kokosowej.
                Woda kokosowa, znana jako sok z kokosa, jest bogata w mikroelementy i witaminy, co czyni ją zdrowym i
                odżywczym składnikiem.
                Woda kokosowa jest również niskokaloryczna i pomaga w utrzymaniu dobrego zdrowia.
            </Typography>
            {
                isCardExpanded && <>
                    <Typography paragraph={true}>
                        Nata de Coco, czyli galaretka kokosowa, to najbardziej tajemniczy składnik Mogu Mogu, który nadaje
                        mu wyjątkowego charakteru.
                        To produkt naturalny, który powstaje w procesie fermentacji wody kokosowej.
                        Woda kokosowa, znana jako sok z kokosa, jest bogata w mikroelementy i witaminy, co czyni ją zdrowym
                        i odżywczym składnikiem.
                        Woda kokosowa jest również niskokaloryczna i pomaga w utrzymaniu dobrego zdrowia.
                    </Typography>
                    <Typography paragraph={true}>
                        Najbardziej tajemniczy i zaskakujący składnik Mogu Mogu, w dużej mierze decydujący o jego
                        oryginalności, to nata de coco.
                        Nazwa ta, w dosłownym tłumaczeniu z języka hiszpańskiego oznacza „śmietankę kokosową”, jednak
                        częściej używa się określenia
                        „galaretka kokosowa” (ang. coconut jelly), które dość dobrze opisuje konsystencję tego produktu.
                        Nata de coco wywodzi się z Filipin, zyskała jednak dużą popularność także w Azji
                        południowo-wschodniej i innych egzotycznych
                        zakątkach świata. Galaretka powstaje w procesie fermentacji wody kokosowej, odbywającej się przy
                        udziale dobrych kultur
                        bakterii Acetobacter xylinum. Woda kokosowa, nazywana także sokiem z kokosa, to płyn znajdujący się
                        we wnętrzu młodych, jeszcze zielonych orzechów kokosowych.
                        Jest produktem całkowicie naturalnym i pozbawionym jakichkolwiek zanieczyszczeń, gdyż w drodze od
                        korzeni do owoców woda poddawana jest wielokrotnej filtracji wewnątrz drzewa.
                    </Typography>
                    <Typography paragraph={true}>
                        Poza walorami zdrowotnymi, Nata de Coco, dzięki swej niezwykłej, żelowej konsystencji stała się
                        składnikiem popularnych w tropikach deserów,
                        a połączona z sokiem owocowym w napoju Mogu Mogu daje niezwykłe, nieporównywalne z niczym innym
                        doznania smakowe.
                        Ponadto, ze względu na skład zbliżony do składu ludzkiego osocza, jest napojem znakomicie
                        przyswajalnym przez nasz organizm.
                        Również z tego powodu, w czasie II wojny światowej była ona podawana w kroplówkach, jako substytut
                        transfuzji krwi, r
                        annym podczas walk w rejonie Pacyfiku. Wśród licznych, niezbędnych człowiekowi mikroelementów, które
                        zawiera wystarczy wymienić chociażby:
                        potas, fosfor, magnez i wapń, żelazo oraz kwas foliowy, a także witaminę C, czy witaminy z grupy B.
                        Jest produktem niskokalorycznym,
                        bezpiecznym dla alergików, zawiera dobry cholesterol i opóźniające procesy starzenia antyoksydanty
                        (w tym kinetynę).
                        Wspomaga układ odpornościowy. Organizacja Narodów Zjednoczonych do Spraw Wyżywienia i Rolnictwa
                        (FAO) określiła wodę kokosową jako bogaty w elektrolity, naturalny napój izotoniczny.
                        Te liczne zalety powodują, że woda kokosowa stała się popularnym napojem orzeźwiającym w krajach
                        tropikalnych, gdzie podawana jest często wprost z nacinanych maczetą kokosów,
                        a także została doceniona przez znane z troski o zdrowe celebrytki takie jak Madonna czy Demi Moore.
                        Nata de Coco, jako produkt wytwarzany z wody kokosowej w procesie naturalnej fermentacji, zachowuje
                        jej właściwości, a ponadto, dzięki dodatkowej zawartości błonnika przyspiesza przemianę materii, a
                        także, w najlepszy z możliwych sposób, oczyszcza jelita, dzięki czemu pozwala uniknąć wielu chorób.
                    </Typography>
                </>
            }
            <Stack>
                <Button
                    onClick={() => setIsCardExpaned(!isCardExpanded)}
                >{buttonLabel(isCardExpanded)}</Button>
            </Stack>
        </Stack>
    </MoguCard>;
}

const ContactCard: FC = () => {
    const screen = useScreen()
    return <MoguCard
        className={"contact"}
        title={"KONTAKT"}
        subtitle={"POL AMAL Oficialny dystrybutor Mogu Mogu na Polskę"}
        preferredWidth={1000}
    >
        <Stack direction={"column"} alignItems={"center"} sx={{position: "relative"}}>
            <Stack direction={screen?.width! > 1000 ? "row" : "column"}
                   sx={{width: screen?.width! > 1000 ? 1000 : 300}}
                   justifyContent={"space-around"}
            >
                <Stack direction={"column"} sx={{marginBottom: 4, marginTop: 2}}>
                    <Typography variant={"h5"}>
                        Jean-Michel Żarnowiec
                    </Typography>
                    <Divider sx={{marginBottom: 2}}/>
                    <Stack direction={"row"}>
                        <PhoneInTalkRounded sx={{marginLeft: 1, marginRight: 2}}/>
                        <Typography paragraph={true}>
                            +48 501 086 898
                        </Typography>
                    </Stack>
                    <Stack direction={"row"}>
                        <EmailRounded sx={{marginLeft: 1, marginRight: 2}}/>
                        <Typography paragraph={true}>
                            jmz@mogu-mogu.pl
                        </Typography>
                    </Stack>
                </Stack>
                <Stack direction={"column"} sx={{marginBottom: 4, marginTop: 2}}>
                    <Typography variant={"h5"}>
                        Marek Szypszak
                    </Typography>
                    <Divider sx={{marginBottom: 2}}/>
                    <Stack direction={"row"}>
                        <PhoneInTalkRounded sx={{marginLeft: 1, marginRight: 2}}/>
                        <Typography paragraph={true}>
                            +48 692 718 500
                        </Typography>
                    </Stack>
                    <Stack direction={"row"}>
                        <EmailRounded sx={{marginLeft: 1, marginRight: 2}}/>
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
                <Typography paragraph={true} sx={{textAlign: "start"}}>
                    ul. Letniskowa 12C <br/>05-807 Podkowa Leśna
                </Typography>
            </Stack>
        </Stack>
    </MoguCard>
}

const FindUs: FC = () => {
    const screen = useScreen()
    const ytOpts: YouTubeProps['opts'] = {
        height: screen?.width! > 640 ? '360' : '157',
        width: screen?.width! > 640 ? '640' : '275',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            muted: true,
            start: 33,
            playlist: "wKjtHH7w18U,nUefdXHpDgc,FcJzUyFmJPM,cpkfPJFwMQo,KMzz0_YeVq4"
        },
    }
    const isBigEnough = screen?.width! > 1000

    return <MoguCard
        className={"findUs"}
        title={"ZNAJDŹ NAS!"}
        preferredWidth={1200}
    >
        <Stack direction={isBigEnough ? "row" : "column"} justifyItems={"end"}>
            <YouTube
                videoId={"FcJzUyFmJPM"}
                opts={ytOpts}
            />
            <Box sx={{paddingLeft: isBigEnough ? 4 : 0, paddingTop: isBigEnough ? 4 : 2}}>
                <Stack direction={"column"}>
                    <Typography paragraph={true}>
                        Napój znajdziesz w sieciach sklepów Kuchnie Świata, Auchan, Aldi. Dostępy jest również na
                        stacjach paliw Shell, warszawskich hurtowniach Makro i Kamix
                        oraz w sklepach internetowych takich jak Słodyczowo, Yatta, Scrummy.
                        Napisz do nas maila gdybyś chciał wiedzieć gdzie znajdziesz Mogu Mogu w Twojej okolicy.
                    </Typography>
                    <Typography paragraph={true}>
                        Znasz już piosenkę o Mogu Mogu? Żeby zobaczyć więcej i być na bieżąco z nowościami śledź nas na
                        mediach społecznościowych.
                    </Typography>
                    <Stack direction={screen?.width! > 500 ? "row" : "column"} sx={{width: 1, marginTop: 4}}
                           justifyContent={"space-evenly"}>
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

export {MoguCard, FindUs, ContactCard, NataDeCocoCard, GottaChewCard}