import React, {FC} from "react";
import {Button, Stack} from "@mui/material";
import { MoguLogo } from "./MoguLogo";

const MoguMenuHeader: FC = () => {
    return <Stack direction="row" padding="16px" alignItems={"center"} sx={{backgroundColor: 'white'}}>
        <MoguLogo/>
    </Stack>;
}

export {MoguMenuHeader}