import {Box, Button, Card, CardActions, CardContent, CardHeader, CardProps, Divider} from "@mui/material";
import React, {FC, MutableRefObject} from "react";

interface MoguCardProps extends CardProps {
    title?: string
    subtitle?: string
    ref?: MutableRefObject<null>
}

const MoguCard: FC<MoguCardProps> = (props) => {
    return (<Box sx={{position: "relative"}} ref={props.ref}>
        <Card
            elevation={3}
            sx={{
                position: "relative",
                borderRadius: '16px',
                ...props.sx
            }}
            {...props}
        >
        {props.title && <CardHeader title={props.title} subheader={props.subtitle}/>}
        <Divider />
        <CardContent sx={{padding: "32px"}}>
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
                backgroundColor: 'red',
            }}
        />
    </Box>)
}

export {MoguCard}