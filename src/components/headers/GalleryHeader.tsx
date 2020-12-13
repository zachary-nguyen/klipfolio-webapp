import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from "@material-ui/icons/Close"
import KlipFolio from "../../assets/klipfolio-icon.png";
import {Button, Grid, IconButton, TextField} from "@material-ui/core";

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
        searchButton: {
            textTransform: "none"
        }
    }),
);

interface Props {

}

const GalleryHeader = () => {
    const classes = useStyles();

    return (
        <div className={classes.grow}>
            <AppBar className={classes.appBar} position="static">
                <Toolbar>
                    <Grid container direction={"row"}>
                        <Grid item xs={1}>
                            <img src={KlipFolio} alt={"klipfolio"}/>
                        </Grid>
                        <Grid justify={"center"} alignItems={"center"} spacing={2} container item xs={10}>
                            <Grid item xs={3}>
                                <TextField
                                    className={classes.search}
                                    placeholder={"Search..."}
                                    variant={"outlined"}
                                    size={"small"}
                                    InputProps={{endAdornment:
                                            <Button className={classes.searchButton} size={"small"} variant={"contained"} color={"primary"}>
                                                Search
                                             </Button>
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={1}>
                            <IconButton>
                                <CloseIcon/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default GalleryHeader;