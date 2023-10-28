import { Box, Stack, Typography } from "@mui/material";
import React, {FC, useState} from "react";
import {MoguLogo} from "./components/MoguLogo";
import {NataCube} from "./components/NataCube";
import {MoguCard} from "./components/MoguCard";
import {MoguMenuHeader} from "./components/MoguMenuHeader";
import {MoguCarousele} from "./components/MoguCarousele";
import {imageData} from "./App";
import {useEffectOnce} from "usehooks-ts";
import {useInterval} from "react-material-ui-carousel/dist/components/util";

export const WelcomeScreen: FC = () => {
    const [currentBottleIdx, setCurrentBottleIdx] = useState(0)

    useInterval(() => {
        setCurrentBottleIdx((currentBottleIdx + 1) % imageData.length)
    }, 5000)

    return <Stack
        direction={"column"}
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
    </Stack>;
}