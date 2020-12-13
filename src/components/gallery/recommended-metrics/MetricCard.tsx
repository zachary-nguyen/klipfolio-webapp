import React from "react"
import {makeStyles} from "@material-ui/core/styles";
import {Box, Card, CardContent, Grid, Typography} from "@material-ui/core";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import {Line} from "react-chartjs-2"
import {App} from "../../../../codesets";

const useStyles = makeStyles({
    root: {
        minWidth: 200,
        borderRadius: 0,
        paddingBottom: 0
    },
    percentage:{
        color: "green",
        fontWeight: 600,
        display: "flex",
        justifyContent: "flex-end"
    },
    subtitle: {
        fontSize: 11
    },
    chartContainer: {
        height: 100,
        width: "100%"
    }
});

interface Props {
    metric: App.IMetrics;
}

/**
 * Helper method to generate random data points
 */
const generateRandomData = () => {
    const randomData = [];

    for(let  i = 0; i < 15; i++) {
        randomData.push((Math.random() * 2) + 1)
    }

    return randomData;
}

const MetricCard = (props: Props) => {
    const classes = useStyles();

    // Generate Chart data
    const data = (canvas: any) => {
        const ctx = canvas.getContext("2d");
        const gradient = ctx.createLinearGradient(0, 0, 0, 100);
        gradient.addColorStop(0, 'rgba(74,181,255,1)');
        gradient.addColorStop(1, 'rgba(74,181,255,0)');

        return {
            labels: ["0","1","2","3","4","5","6","7","8","9","10"],
            datasets: [
                {
                    backgroundColor : gradient,
                    borderColor : "rgba(74,181,255,1)",
                    borderWidth: 2,
                    data : generateRandomData()
                }
            ]
        }
    }

    // Set chart options
    const options={
        legend: {
            display: false
        },
        elements: {
            point:{
                radius: 0
            }
        },
        scales: {
            yAxes: [
                {
                    gridLines: {
                        color: '#aaa',
                        borderDash: [1, 3],
                    },
                    display: false,
                    ticks: {
                        beginAtZero:true
                    }
                },
            ],
            xAxes: [
                {
                    gridLines: {
                        color: '#aaa',
                        borderDash: [1, 3],
                    },
                    display: false,
                },
            ],
        },
    }

    return(
        <Card className={classes.root}>
            <CardContent>
                <Typography component="span" align={"left"} color="textPrimary" gutterBottom>
                    <Box fontSize={20} fontWeight={600}>
                        {props.metric.name}
                    </Box>
                </Typography>
                <Grid container direction={"row"}>
                    <Grid xs={6} item>
                        <Typography component="span"  align={"left"} color="textPrimary" gutterBottom>
                            <Box fontSize={24} fontWeight={800}>
                                {props.metric.value}
                            </Box>
                        </Typography>
                    </Grid>
                    <Grid xs={6} container  justify="center" alignItems={"center"} item>
                        <Typography className={classes.percentage} align={"center"} color="textPrimary" gutterBottom>
                            <ArrowUpwardIcon/>{props.metric.percentageIncrease}
                        </Typography>
                        <Typography className={classes.subtitle} align={"right"} variant={"subtitle2"} color={"textSecondary"}>
                            vs previous 14 days
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <Grid className={classes.chartContainer} container>
                <Line data={data} options={options}/>
            </Grid>
        </Card>
    )
}

export default MetricCard;