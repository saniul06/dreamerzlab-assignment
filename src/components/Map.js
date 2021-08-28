import React from 'react'
import ReactMapGL, { Source, Layer } from 'react-map-gl'

const geojson = "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_1_states_provinces_shp.geojson"

const layerStyle = {
    id: 'point',
    type: 'line',
    paint: {
        'line-color': 'purple',

    },
};
const Map = () => {
    const [viewport, setViewport] = React.useState({
        longitude: -89.59940914585667,
        latitude: 48.01027395282483,
        zoom: 3

    });
    console.log('map key ::::::::::', process.env.REACT_APP_MAP_API_KEY)
    return (
        <ReactMapGL {...viewport} width="100vw" height="100vh" onViewportChange={setViewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAP_API_KEY}
            mapStyle='mapbox://styles/sky6555/cksueksix2tsm18o2ybwj1lli'
        >
            <Source id="my-data" type="geojson" data={geojson}>
                <Layer {...layerStyle} />
            </Source>
        </ReactMapGL>
    );
}

export default Map
