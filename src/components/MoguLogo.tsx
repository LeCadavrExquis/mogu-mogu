import { Stack } from "@mui/material";
import React, { FC } from "react";
// @ts-ignore
import { ReactComponent as MoguLogoSvg } from '../resources/mogu-mogu-logo.svg';
// @ts-ignore
import { ReactComponent as RegisteredSvg } from '../resources/registered-icon.svg';

const MoguLogo: FC = () => {
    return <MoguLogoSvg width={300}/>;
}

export {MoguLogo}