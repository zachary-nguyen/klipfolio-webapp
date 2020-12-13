import React, {useEffect, useState} from "react";
import GalleryHeader from "../components/gallery/GalleryHeader";
import RecommendedMetrics from "../components/gallery/recommended-metrics/RecommendedMetrics";
import axios from "axios";
import {App} from "../../codesets";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        padding: "5% 2% 2% 2%"
    },
});


const Gallery = () => {

    const classes = useStyles();

    const [galleryData, setGalleryData] = useState<App.IGalleryData|null>(null);

    /**
     * On load fetch data from API
     */
    useEffect(() => {
        axios.get("/api/gallery")
            .then(res => {
                // Successful fetch
                if(res.status === 200){
                    setGalleryData(res.data)
                }
            })
            .catch(err => console.log(err))
    },[])

    console.log(galleryData)
    return(
        <div>
            <GalleryHeader/>
            <main className={classes.root}>
                {galleryData &&
                    <RecommendedMetrics metrics={galleryData.metrics} />
                }
            </main>
        </div>
    )
}

export default Gallery;