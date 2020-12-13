import React from "react";
import {Switch, BrowserRouter, Route} from "react-router-dom";
import Gallery from "../views/Gallery";
import MoreMetrics from "../views/MoreMetrics";

// Set up route constants to be used in frontend
export const ROUTES = {
    ROOT: "/",
    GALLERY: "/gallery",
    MORE_SERVICES: "/more-services",
    MORE_MODELLED_DATA: "/more-modolled-data",
    MORE_METRICS: "/more-metrics"
}

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={ROUTES.ROOT} exact component={Gallery}/>
                <Route path={ROUTES.MORE_METRICS} exact component={MoreMetrics}/>
                <Route path={ROUTES.GALLERY} exact component={Gallery}/>
                <Route path={ROUTES.GALLERY} exact component={Gallery}/>
                <Route path={ROUTES.GALLERY} exact component={Gallery}/>
                <Route error component={Gallery} />
            </Switch>
        </BrowserRouter>
    )

};

export default Routes;