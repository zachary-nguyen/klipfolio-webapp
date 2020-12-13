import React from "react";
import {App} from "../../../../codesets";
import {Button, Grid, Typography, Box} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import MetricCard from "./MetricCard";
import {Link} from "react-router-dom";
import {ROUTES} from "../../../routes/Routes";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            backgroundColor: "white",
            boxShadow: "none"
        },
        grow: {
            flexGrow: 1,
        },
        search: {
            width: "100%"
        },
        moreMetrics: {
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

interface Props {
    metrics: App.IMetrics[];
}

const RecommendedMetrics = (props: Props) => {

    const classes = useStyles();

    return (
        <Grid spacing={3} container direction={"column"}>
            <Grid container>
                <Typography component={"span"} gutterBottom variant={"h6"}>
                    <Box fontWeight={600}>
                        Recommended Metrics
                    </Box>
                </Typography>
            </Grid>
            <Grid spacing={3} item container xs={12} direction={"row"}>
                {props.metrics && props.metrics.length > 0 && props.metrics.map((metric: App.IMetrics, index: number) => {
                    return (
                        <Grid key={index} item>
                            <MetricCard
                                name={metric.name}
                                value={metric.value}
                                percentageIncrease={metric.percentageIncrease}
                            />
                        </Grid>
                    )
                })}
            </Grid>
            <Grid container justify={"flex-end"}>
                <Grid item>
                    <Button component={Link} to={ROUTES.MORE_METRICS} className={classes.moreMetrics} color="primary" variant={"outlined"}>
                        More metrics
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default RecommendedMetrics