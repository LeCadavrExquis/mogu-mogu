import React, {FC} from "react";
import {Button, Divider, Stack} from "@mui/material";
// @ts-ignore
import {ReactComponent as MoguLogoSvg} from "../resources/mogu-mogu-logo.svg";

interface MoguMenuHeaderProps {
    onFlavoursClicked: () => void
    onNataClicked: () => void
    onFindUsClicked: () => void
    onContactClicked: () => void
}

const MoguMenuHeader: FC<MoguMenuHeaderProps> = (props) => {
    return <Stack direction="row" alignItems={"center"} justifyContent={"space-between"}
                  sx={{
                      backgroundColor: 'white',
                      width: "100%",
                      paddingTop: "8px",
                }}>
        <MoguLogoSvg style={{padding: "12px", marginLeft: 8}}/>
        <Stack direction={"row"} sx={{marginRight: 8}}>
            <Button variant="outlined" onClick={props.onFlavoursClicked}>SMAKI</Button>
            <Divider orientation={"vertical"} sx={{color: "gray", height: 64, marginRight: 4, marginLeft: 4}}/>
            <Button variant="outlined" onClick={props.onNataClicked}>NATA DE COCO</Button>
            <Divider orientation={"vertical"} sx={{color: "gray", height: 64, marginRight: 4, marginLeft: 4}}/>
            <Button variant="outlined" onClick={props.onFindUsClicked}>ZNAJDŹ NAS</Button>
            <Divider orientation={"vertical"} sx={{color: "gray", height: 64, marginRight: 4, marginLeft: 4}}/>
            <Button variant="outlined" onClick={props.onContactClicked}>KONTAKT</Button>
        </Stack>
    </Stack>;
}

export {MoguMenuHeader}