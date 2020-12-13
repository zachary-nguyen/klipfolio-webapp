import React from "react";
import {Chip} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        chip: (props: Props) => ({
            borderRadius: 4,
            backgroundColor: props.selected ? theme.palette.primary.light : "",
        })
    }),
);

interface Props {
    category: String;
    selected: boolean;
    onClick: () => void;
}

const CategoryFilterChip = (props: Props) => {
    const classes = useStyles(props);

    return(
        <Chip
            onClick={props.onClick}
            label={props.category}
            clickable
            className={classes.chip}
            color="primary"
            variant={"outlined"}
        />
    )
}

export default CategoryFilterChip;