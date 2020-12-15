import React from "react";
import {Switch, BrowserRouter, Route} from "react-router-dom";
import Gallery from "../views/Gallery";
import MoreMetrics from "../views/MoreMetrics";
import MoreServices from "../views/MoreServices";
import MoreModelledData from "../views/MoreModelledData";

// Set up route constants to be used in frontend
export const ROUTES = {
    GALLERY: "/",
    MORE_SERVICES: "/more-services",
    MORE_MODELLED_DATA: "/more-modelled-data",
    MORE_METRICS: "/more-metrics"
}

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={ROUTES.GALLERY} exact component={Gallery}/>
                <Route path={ROUTES.MORE_METRICS} exact component={MoreMetrics}/>
                <Route path={ROUTES.MORE_SERVICES} exact component={MoreServices}/>
                <Route path={ROUTES.MORE_MODELLED_DATA} exact component={MoreModelledData}/>
                <Route path={ROUTES.GALLERY} exact component={Gallery}/>
                <Route error component={Gallery} />
            </Switch>
        </BrowserRouter>
    )

};

export default Routes;