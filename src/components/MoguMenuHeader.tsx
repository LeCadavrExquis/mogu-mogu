import React, {FC} from "react";
import {Button, Stack} from "@mui/material";
// @ts-ignore
import {ReactComponent as MoguLogoSvg} from "../resources/mogu-mogu-logo.svg";

interface MoguMenuHeaderProps {
    onFlavoursClicked: () => void
    onNataClicked: () => void
    onFindUsClicked: () => void
    onContactClicked: () => void
}

const MoguMenuHeader: FC<MoguMenuHeaderProps> = (props) => {
    return <Stack direction="row" alignItems={"center"} justifyContent={"space-between"} sx={{backgroundColor: 'white', width: "100%", paddingLeft: "48px", paddingTop: "8px"}}>
        <MoguLogoSvg style={{padding: "12px"}}/>
        <Stack direction={"row"}>
            <Button variant="outlined" onClick={props.onFlavoursClicked}>SMAKI</Button>
            <Button variant="outlined" onClick={props.onNataClicked}>NATA DE COCO</Button>
            <Button variant="outlined" onClick={props.onFindUsClicked}>ZNAJDŹ NAS</Button>
            <Button variant="outlined" onClick={props.onContactClicked}>KONTAKT</Button>
        </Stack>
    </Stack>;
}

export {MoguMenuHeader}