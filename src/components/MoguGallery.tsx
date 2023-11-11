import {
    Box,
    Card,
    CardContent,
    CardHeader,
    CardProps, Divider,
    ImageList,
    ImageListItem,
    Stack,
    Typography
} from "@mui/material";
import React, {FC} from "react";
import {MoguImageData} from "../resources/ResourceHelper";
import { BottleFruit } from "./AnimatedElements";
import {useScreen} from "usehooks-ts";

interface MoguGalleryProps {
    imageData: MoguImageData[]
}

const MoguGallery: FC<MoguGalleryProps> = (props) => {
    const screen = useScreen()

    const colCount = screen?.width! < 800 ? 1 : 4
    return <Box sx={{w: 1, position: "relative"}}>
        <ImageList rowHeight={400} cols={colCount} gap={8} sx={{paddingRight: 16, paddingLeft: 16, paddingBottom: 16}}>
        {
            props.imageData.map((image) => {
                return <ImageListItem
                    key={image.imgSrc}
                >
                    <BottleFruit fruitImageUrl={image.fruitSrc} visible={true} pos={[150, 175]}  key={image.fruitSrc}/>
                    <MoguGalleryTile image={image} />
                </ImageListItem>;
            })
        }
        </ImageList>
    </Box>;
}

interface MoguGalleryTileProps {
    image: MoguImageData
}

const MoguGalleryTile: FC<MoguGalleryTileProps> = (props) => {
    return <Box
        sx={{
            width: "360px",
            background: `radial-gradient(closest-side,${props.image.color},#FFFFFF00)`
        }}
    >
        <img
            srcSet={`${props.image.imgSrc}?w=163&h=360&fit=fill&auto=format&dpr=3 3x`}
            src={`${props.image.imgSrc}?w=163&h=360&fit=fill&auto=format`}
            width={163}
            height={360}
            alt={props.image.title}
            loading="lazy"
        />
        <Typography>
            {props.image.title}
        </Typography>
    </Box>;
}

export {MoguGallery}