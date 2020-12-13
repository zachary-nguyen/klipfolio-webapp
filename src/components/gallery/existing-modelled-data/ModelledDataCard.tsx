import React from "react";
import {App} from "../../../../codesets";
import {makeStyles} from "@material-ui/core/styles";
import {Box, Card, CardContent, Typography} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        minWidth: 238,
        minHeight: 150,
        borderRadius: 0,
        paddingBottom: 0
    },
});

interface Props {
    data: App.IModeledData;
}

const ModelledDataCard = (props: Props) => {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography component="span" align={"left"} color="textPrimary" gutterBottom>
                    <Box fontSize={20} fontWeight={600}>
                        {props.data.name}
                    </Box>
                </Typography>
            </CardContent>
        </Card>
    )

}

export default ModelledDataCard;