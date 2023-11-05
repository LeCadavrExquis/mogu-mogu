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
import { MoguImageData } from "../App";
import {BottleFruit} from "./BotlleFruit";

interface MoguGalleryProps {
    imageData: MoguImageData[]
}

const MoguGallery: FC<MoguGalleryProps> = (props) => {
    return <Box sx={{width: '90%'}}>
        <ImageList cols={4} gap={2} sx={{w: 1}}>
        {
            props.imageData.map((image) => {
                return <ImageListItem
                    sx={{marginTop: 5}}
                >
                    <BottleFruit fruitImageUrl={image.fruitSrc} visible={true} pos={[150, 175]} />
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