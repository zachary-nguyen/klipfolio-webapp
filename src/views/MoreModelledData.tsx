import React, {useEffect, useState} from "react";
import SimpleHeader from "../components/headers/SimpleHeader";
import {Box, Button, Grid, Typography} from "@material-ui/core";
import {App} from "../../codesets";
import MetricCard from "../components/gallery/recommended-metrics/MetricCard";
import {Link} from "react-router-dom";
import {ROUTES} from "../routes/Routes";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import axios from "axios";
import ModelledDataCard from "../components/gallery/existing-modelled-data/ModelledDataCard";

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

const MoreModelledData = () => {
    const classes = useStyles();

    const [modelledData, setModelledData] = useState<App.IModeledData[]|null>(null);

    useEffect(() => {
        axios.get("/api/gallery/modelled-data")
            .then((res) => {
                if(res.status === 200) {
                    setModelledData(res.data)
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
                            Recommended Metrics
                        </Box>
                    </Typography>
                </Grid>
                <Grid spacing={3} item container xs={12} direction={"row"}>
                    {modelledData && modelledData.length > 0 && modelledData.map((data: App.IModeledData, index: number) => {
                        return (
                            <Grid key={index} item xs={2}>
                                <ModelledDataCard data={data}/>
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

export default MoreModelledData;