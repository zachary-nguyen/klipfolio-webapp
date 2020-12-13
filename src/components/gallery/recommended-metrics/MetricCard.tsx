import React from "react"
import {makeStyles} from "@material-ui/core/styles";
import {Box, Card, CardContent, Grid, Typography} from "@material-ui/core";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const useStyles = makeStyles({
    root: {
        minWidth: 238,
        borderRadius: 0
    },
    percentage:{
        color: "green",
        fontWeight: 600,
        display: "flex",
        justifyContent: "flex-end"
    },
    subtitle: {
        fontSize: 11
    }
});

interface Props {
    name: String;
    value: String;
    percentageIncrease: String;
}

const MetricCard = (props: Props) => {
    const classes = useStyles();

    return(
        <Card className={classes.root}>
            <CardContent>
                <Typography component="span" align={"left"} color="textPrimary" gutterBottom>
                    <Box fontWeight={600}>
                        {props.name}
                    </Box>
                </Typography>
                <Grid container direction={"row"}>
                    <Grid xs={6} item>
                        <Typography component="span"  align={"left"} color="textPrimary" gutterBottom>
                            <Box fontWeight={600}>
                                {props.value}
                            </Box>
                        </Typography>
                    </Grid>
                    <Grid xs={6} item>
                        <Typography className={classes.percentage} align={"right"} color="textPrimary" gutterBottom>
                            <ArrowUpwardIcon/>{props.percentageIncrease}
                        </Typography>
                        <Typography className={classes.subtitle} align={"right"} variant={"subtitle2"} color={"textSecondary"}>
                            vs previous 14 days
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default MetricCard;