import React from "react";
import {Box, Button, Grid, Typography} from "@material-ui/core";
import {App} from "../../../../codesets";
import {Link} from "react-router-dom";
import {ROUTES} from "../../../routes/Routes";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import ModelledDataCard from "./ModelledDataCard";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        moreModelledData: {
            backgroundColor: "white",
            borderWidth: 2,
            textTransform: "none",
            "&:hover":{
                backgroundColor: theme.palette.primary.light,
                color: "white",
                borderWidth: 2,
            }
        },
        modelDataContainer: {
            marginBottom: "1%"
        }
    }),
);

interface Props {
    modelledData: App.IModeledData[];
}

const ExistingModelledData = (props: Props) => {

    const classes = useStyles();

    return(
        <Grid component={"section"} spacing={4} container direction={"column"}>
            <Grid container>
                <Typography component={"span"} gutterBottom variant={"h6"}>
                    <Box fontWeight={600}>
                        Existing Modelled Data
                    </Box>
                </Typography>
            </Grid>
            <Grid className={classes.modelDataContainer} spacing={3} item container xs={12} direction={"row"}>
                {props.modelledData && props.modelledData.length > 0 && props.modelledData.map((data: App.IModeledData, index: number) => {
                    return (
                        <Grid key={index} item xs>
                            <ModelledDataCard data={data}/>
                        </Grid>
                    )
                })}
            </Grid>
            <Grid container justify={"flex-end"}>
                <Grid item>
                    <Button component={Link} to={ROUTES.MORE_MODELLED_DATA} className={classes.moreModelledData} color="primary" variant={"outlined"}>
                        More modelled data
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default ExistingModelledData;