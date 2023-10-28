import React, {FC} from "react";
import {Stack} from "@mui/material";
// @ts-ignore
import {ReactComponent as MoguLogoSvg} from "../resources/mogu-mogu-logo.svg";

const MoguMenuHeader: FC = () => {
    return <Stack direction="row" alignItems={"center"} sx={{backgroundColor: 'white', width: "100%"}}>
        <MoguLogoSvg style={{padding: "36px"}}/>
    </Stack>;
}

export {MoguMenuHeader}