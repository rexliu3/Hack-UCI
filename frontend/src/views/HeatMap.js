import React, { useEffect } from "react";
import { Helmet } from "react-helmet";


import Plot from 'react-plotly.js';

const HeatMap = () => {

    return (
        <div>
            <div id="graph"></div>
            <Helmet>
                <script src="heatmap-stuff.js" type="text/javascript" />
            </Helmet>
        </div>
    )
}

export default HeatMap;