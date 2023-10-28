import {Box, Card, CardContent, CardHeader, CardProps, Typography} from "@mui/material";
import {FC, ReactNode} from "react";

interface MoguCardProps extends CardProps {
    title: string
}

const MoguCard: FC<MoguCardProps> = (props) => {
    return (<Box sx={{position: "relative"}}>
        <Card
            sx={{
                position: "relative",
                borderRadius: '16px',
                ...props.sx
            }}
        >
            <CardHeader title={props.title}/>
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