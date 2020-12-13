import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import KlipFolio from "../../assets/klipfolio-icon.png";
import {Grid} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            backgroundColor: "white",
            boxShadow: "none"
        },
        grow: {
            flexGrow: 1,
        },
    }),
);

const SimpleHeader = () => {
    const classes = useStyles();

    return (
        <div className={classes.grow}>
            <AppBar className={classes.appBar} position="static">
                <Toolbar>
                    <Grid container direction={"row"}>
                        <Grid item xs={1}>
                            <img src={KlipFolio} alt={"klipfolio"}/>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default SimpleHeader;