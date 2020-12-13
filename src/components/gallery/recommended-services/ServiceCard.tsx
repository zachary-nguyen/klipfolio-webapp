import React from "react"
import {Box, Grid, IconButton, Tooltip, Typography} from "@material-ui/core";
import {App} from "../../../../codesets";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        serviceButton: {
            backgroundColor: "white",
            padding: "15%",
            minHeight: 100,
            minWidth: 100,
            maxHeight: 100,
            maxWidth: 100,
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;"
        }
    }),
);

interface Props {
    service: App.IServices;
}

const ServiceCard = (props: Props) => {

    const classes = useStyles();

    return(
        <Grid container justify={"center"} alignItems={"center"} spacing={2} direction={"column"}>
            <Grid item>
                <Typography component={"span"}>
                    <Box fontWeight={600}>
                        {props.service.name}
                    </Box>
                </Typography>
            </Grid>
            <Grid item>
                <Tooltip title={props.service.name}>
                        <IconButton className={classes.serviceButton}>
                            {props.service.icon &&
                            <img src={require(`../../../assets/${props.service.icon}`)} width={50} height={50} alt={props.service.name as string}/>
                            }
                        </IconButton>
                </Tooltip>
            </Grid>
        </Grid>
    )
}

export default ServiceCard;