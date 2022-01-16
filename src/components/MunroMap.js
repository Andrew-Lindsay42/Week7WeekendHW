import React from 'react';
import {MapContainer, TileLayer, Marker} from 'react-leaflet';
import {Icon, map} from 'leaflet';

const MunroMap = ({lat, lng, viewMap, setViewMap}) => {


    if (viewMap) {
    const icon = new Icon({
        iconUrl: '/pin.png',
        iconSize: [25, 25],
        iconAnchor: [12.5,24],
    })

    return (
        <MapContainer center={[lat, lng]} zoom={11}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker key={0} position={[lat, lng]} icon={icon}/>
        </MapContainer>
    )
    } else {
        return null
    }
};

export default MunroMap