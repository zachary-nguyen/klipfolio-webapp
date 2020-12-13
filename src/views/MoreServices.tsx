import React, {useEffect, useState} from "react";
import {App} from "../../codesets";
import SimpleHeader from "../components/headers/SimpleHeader";
import {Box, Button, Grid, Typography} from "@material-ui/core";
import MetricCard from "../components/gallery/recommended-metrics/MetricCard";
import {Link} from "react-router-dom";
import {ROUTES} from "../routes/Routes";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import ServiceCard from "../components/gallery/recommended-services/ServiceCard";
import service from "../../backend/models/service";
import axios from "axios";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: "2%",
            overflow: "hidden"
        },
        back: {
            backgroundColor: "white",
            borderWidth: 2,
            textTransform: "none",
            "&:hover":{
                backgroundColor: theme.palette.primary.light,
                color: "white",
                borderWidth: 2,
            }
        }
    }),
);

const MoreServices = () => {
    const classes = useStyles();

    const [services, setServices] = useState<App.IServices[]|null>(null);

    useEffect(() => {
        axios.get("/api/gallery/services")
            .then((res) => {
                console.log(res.data)
                if(res.status === 200) {
                    setServices(res.data)
                }
            })
            .catch(err=>console.log(err))
    },[])

    return(
        <div>
            <SimpleHeader/>
            <Grid className={classes.root} component={"section"} spacing={3} container direction={"column"}>
                <Grid container>
                    <Typography component={"span"} gutterBottom variant={"h6"}>
                        <Box fontWeight={600}>
                            Recommended Services
                        </Box>
                    </Typography>
                </Grid>
                <Grid spacing={3} item container xs={12} direction={"row"}>
                    {services && services.length > 0 && services.map((service: App.IServices, index: number) => {
                        return (
                            <Grid key={index} item xs={2}>
                                <ServiceCard service={service}/>
                            </Grid>
                        )
                    })}
                </Grid>
                <Grid container justify={"flex-end"}>
                    <Grid item>
                        <Button component={Link} to={ROUTES.GALLERY} className={classes.back} color="primary" variant={"outlined"}>
                            Back to Gallery
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default MoreServices;