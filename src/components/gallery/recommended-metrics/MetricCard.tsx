import React from "react"
import {makeStyles} from "@material-ui/core/styles";
import {Box, Card, CardContent, Grid, Typography} from "@material-ui/core";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import {Line} from "react-chartjs-2"

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
    },
    chartContainer: {
        height: 100,
        width: "100%"
    }
});

interface Props {
    name: String;
    value: String;
    percentageIncrease: String;
}

const generateRandomData = () => {
    const randomData = [];

    for(let  i = 0; i < 15; i++) {
        randomData.push((Math.random() * 10) + 1)
    }

    return randomData;
}

const MetricCard = (props: Props) => {
    const classes = useStyles();

    const data = (canvas: any) => {
        const ctx = canvas.getContext("2d");
        const gradient = ctx.createLinearGradient(0, 0, 0, 100);
        gradient.addColorStop(0, 'rgba(74,181,255,1)');
        gradient.addColorStop(1, 'rgba(74,181,255,0)');

        return {
            labels: ["02:00","04:00","06:00","08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00","00:00"],
            datasets: [
                {
                    backgroundColor : gradient, // Put the gradient here as a fill color
                    borderColor : "rgba(74,181,255,1)",
                    borderWidth: 2,
                    data : generateRandomData()
                }
            ]
        }
    }

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
                    <Grid className={classes.chartContainer} container>
                        <Line data={data} options={options}/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default MetricCard;