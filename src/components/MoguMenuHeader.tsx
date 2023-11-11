import React, {FC} from "react";
import {Button, Divider, IconButton, Menu, MenuItem, Stack} from "@mui/material";
import {useScreen, useWindowSize} from "usehooks-ts";
import {MenuOpen} from "@mui/icons-material";
import {MoguLogoSvg, moguMansSrc} from "../resources/ResourceHelper";

interface MoguMenuHeaderProps {
    onFlavoursClicked: () => void
    onNataClicked: () => void
    onFindUsClicked: () => void
    onContactClicked: () => void
}

const MoguMenuHeader: FC<MoguMenuHeaderProps> = (props) => {
    const screen = useScreen()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const menuButtons = screen?.width && screen?.width < 800 ? <>
        <IconButton
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        >
            <MenuOpen sx={{fontSize: 64}} />
        </IconButton>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={handleClose}><Button variant="outlined" onClick={props.onFlavoursClicked}>SMAKI</Button></MenuItem>
            <MenuItem onClick={handleClose}><Button variant="outlined" onClick={props.onNataClicked}>NATA DE COCO</Button></MenuItem>
            <MenuItem onClick={handleClose}><Button variant="outlined" onClick={props.onFindUsClicked}>ZNAJDŹ NAS</Button></MenuItem>
            <MenuItem onClick={handleClose}><Button variant="outlined" onClick={props.onContactClicked}>KONTAKT</Button></MenuItem>
        </Menu>
    </> : <Stack direction={"row"} sx={{marginRight: 8}}>
        <Button variant="outlined" onClick={props.onFlavoursClicked}>SMAKI</Button>
        <Divider orientation={"vertical"} sx={{color: "gray", height: 64, marginRight: 2, marginLeft: 2}}/>
        <Button variant="outlined" onClick={props.onNataClicked}>NATA DE COCO</Button>
        <Divider orientation={"vertical"} sx={{color: "gray", height: 64, marginRight: 2, marginLeft: 2}}/>
        <Button variant="outlined" onClick={props.onFindUsClicked}>ZNAJDŹ NAS</Button>
        <Divider orientation={"vertical"} sx={{color: "gray", height: 64, marginRight: 2, marginLeft: 2}}/>
        <Button variant="outlined" onClick={props.onContactClicked}>KONTAKT</Button>
    </Stack>;

    return <Stack direction="row" alignItems={"center"} justifyContent={"space-between"}
                  sx={{
                      backgroundColor: 'white',
                      width: "100%",
                      paddingTop: "8px",
                }}>
        <MoguLogoSvg style={{padding: 2, marginLeft: 8}}/>
        {
            (screen?.width! > 800) && <img
                style={{position: "absolute", width: "300", top: 48, left: screen?.width! / 2 - 100, zIndex: 1}}
                src={moguMansSrc[0]}
                loading="lazy"
            />
        }
        {menuButtons}
    </Stack>;
}

export {MoguMenuHeader}