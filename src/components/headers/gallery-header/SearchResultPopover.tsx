import React, {Dispatch, SetStateAction} from "react";
import {Button, Grid, List, ListItem, ListItemSecondaryAction, ListItemText, Typography} from "@material-ui/core";
import {Assets, Tags} from "./GalleryHeader";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Popper from '@material-ui/core/Popper';
import CategoryFilterChip from "./CategoryFilterChip";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
       container: (props: Props) => ({
           width: props.anchorEl ? props.anchorEl.clientWidth : "",
           backgroundColor: "white",
           color: "black"
       }),
       listItem:{
           "& span":{
               fontWeight: 600,
           },
           textTransform: "none"
       },
        secondaryText: {
            color: "lightgrey"
        },
       popper: {
           marginTop: 3,
           border: `1px solid ${theme.palette.primary.light}`,
           zIndex: 10
       },
    }),
);

interface Props {
    anchorEl: HTMLInputElement | null;
    handleClose: () => void;
    open: boolean;
    values: Assets[];
    setSearchValue: Dispatch<SetStateAction<String>>;
    tags: Tags[];
    onClick: any;
}


const SearchResultPopover = (props: Props) => {

    const classes = useStyles(props);

    const onAssetClick = (value : Assets) => {
        props.setSearchValue(value.asset as string)
    }

    return (
        <Popper
            open={props.open}
            anchorEl={props.anchorEl}
            disablePortal
            className={classes.popper}
            container={props.anchorEl ? props.anchorEl : null}
            placement={"bottom"}
        >
            <List className={classes.container}>
                <ListItem>
                    <Grid container direction={"row"} spacing={2}>
                        {props.tags && props.tags.map((tag: Tags) => {
                            return (
                                <Grid item>
                                    <CategoryFilterChip
                                        onClick={() => props.onClick(tag)}
                                        selected={tag.selected}
                                        category={tag.name}/>
                                </Grid>
                            )
                        })}
                    </Grid>
                </ListItem>
                {props.values && props.values.map((value: Assets,index) => {
                    return(
                        <ListItem key={index} onClick={() => onAssetClick(value)} component={Button}>
                            <ListItemText className={classes.listItem} primary={value.asset}/>
                            <ListItemSecondaryAction>
                                <Typography className={classes.secondaryText}>
                                    {value.category}
                                </Typography>
                            </ListItemSecondaryAction>
                        </ListItem>
                    )
                })}
            </List>

        </Popper>
    )
}

export default SearchResultPopover;