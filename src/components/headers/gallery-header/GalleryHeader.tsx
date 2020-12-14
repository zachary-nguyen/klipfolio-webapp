import React, {ChangeEvent, useRef, useState} from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from "@material-ui/icons/Close"
import KlipFolio from "../../../assets/klipfolio-icon.png";
import {Button, ClickAwayListener, Grid, IconButton, TextField} from "@material-ui/core";
import SearchResultPopover from "./SearchResultPopover";

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

export interface Assets {
    asset: String;
    category: String;
}

export interface Tags {
    name: String;
    selected: boolean;
}

const GalleryHeader = () => {
    const classes = useStyles();

    const ref : any = useRef();

    const [searchValue, setSearchValue] = useState<String>("");
    const [tags, setTags] = useState<Tags[]>(
        [
            {
                name: "Metric",
                selected: true
            },
            {
                name: "Service",
                selected: true
            },
            {
                name: "Role",
                selected: true
            },
            {
                name: "Industry",
                selected: true
            },
            {
                name: "Difficulty Level",
                selected: true
            },
        ]
    )

    const [open, setOpen] = useState(false);

    // Handle popover close
    const handleClose = () => {
        setOpen(false)
    };

    const onFocus = (e: any) => {
        setOpen(true)
    }

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }

    /**
     * Update selected tags state from parent
     * @param tag
     */
    const onTagClick = (tag: Tags) => {
        setTags(tags.map((stateTag: Tags) => {
            if(stateTag === tag){
                return {...stateTag, selected: !stateTag.selected} // toggle state
            }
            return stateTag;
        }));
    }

    /**
     * Filtering logic for search field, get all selected tags and filter search results based on tags
     * */
    const filteredValues = () : Assets[] => {

       const selectedCategories = tags.map((tag: Tags) => {
           if(tag.selected){
               return tag.name;
           }
           return "";
       });

       return assets.filter((value : Assets) =>
            value.asset.toUpperCase().indexOf(searchValue.toUpperCase()) !== -1
            && selectedCategories.includes(value.category)
        )
    }

    return (
        <div className={classes.grow}>
            <AppBar className={classes.appBar} position="static">
                <Toolbar>
                    <Grid container direction={"row"}>
                        <Grid item xs={1}>
                            <img src={KlipFolio} alt={"klipfolio"}/>
                        </Grid>
                        <Grid justify={"center"} alignItems={"center"} spacing={2} container item xs={10}>
                            <ClickAwayListener onClickAway={handleClose}>
                                <Grid item xs={7} md={4}>
                                    <TextField
                                        ref={ref}
                                        className={classes.search}
                                        placeholder={"Search..."}
                                        variant={"outlined"}
                                        size={"small"}
                                        value={searchValue}
                                        onChange={onChange}
                                        onFocus={onFocus}
                                        InputProps={{endAdornment:
                                                    <Button className={classes.searchButton} size={"small"} variant={"contained"} color={"primary"}>
                                                        Search
                                                    </Button>, }}
                                    />
                                    <SearchResultPopover anchorEl={ref.current}
                                                         handleClose={handleClose}
                                                         open={open}
                                                         tags={tags}
                                                         onClick={onTagClick}
                                                         setSearchValue={setSearchValue}
                                                         values={filteredValues()}
                                    />
                                </Grid>
                            </ClickAwayListener>
                        </Grid>
                        <Grid container justify={"flex-end"} item xs={1}>
                            <Grid item>
                               <IconButton>
                                  <CloseIcon/>
                               </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}


const assets : Assets[] = [
    {asset: "Profit", category: "Metric"},
    {asset: "Net Profit Margin", category: "Metric"},
    {asset: "Average Profit Margin", category: "Finance"},
    {asset: "Gross Profit Margin", category: "Finance"},
    {asset: "Facebook", category: "Service"},
    {asset: "Slack", category: "Service"},
    {asset: "Full-Stack Developer", category: "Role"},
    {asset: "Manager", category: "Role"},
    {asset: "Aerospace", category: "Industry"},
    {asset: "Energy", category: "Industry"},
    {asset: "Average Profit Margin", category: "Finance"},
    {asset: "Gross Profit Margin", category: "Finance"},

]

export default GalleryHeader;