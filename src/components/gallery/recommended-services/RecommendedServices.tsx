import React from "react";
import {Box, Button, Grid, Typography} from "@material-ui/core";
import {App} from "../../../../codesets";
import {Link} from "react-router-dom";
import {ROUTES} from "../../../routes/Routes";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import ServiceCard from "./ServiceCard";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        moreServices: {
            backgroundColor: "white",
            borderWidth: 2,
            textTransform: "none",
            "&:hover":{
                backgroundColor: theme.palette.primary.light,
                color: "white",
                borderWidth: 2,
            }
        },
        servicesContainer: {
            marginBottom: "1%"
        }
    }),
);

interface Props {
    services: App.IServices[];
}

const RecommendedServices = (props: Props) =>{

    const classes = useStyles();

    return(
        <Grid component={"section"} spacing={4} container direction={"column"}>
            <Grid container>
                <Typography component={"span"} gutterBottom variant={"h6"}>
                    <Box fontWeight={600}>
                        Recommended Services
                    </Box>
                </Typography>
            </Grid>
            <Grid className={classes.servicesContainer} spacing={3} item container xs={12} direction={"row"}>
                {props.services && props.services.length > 0 && props.services.map((service: App.IServices, index: number) => {
                    return (
                        <Grid key={index} item xs>
                            <ServiceCard service={service}/>
                        </Grid>
                    )
                })}
            </Grid>
            <Grid container justify={"flex-end"}>
                <Grid item>
                    <Button id={"more-services"} component={Link} to={ROUTES.MORE_SERVICES} className={classes.moreServices} color="primary" variant={"outlined"}>
                        More services
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default RecommendedServices;