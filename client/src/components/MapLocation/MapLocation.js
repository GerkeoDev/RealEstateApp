import React, { useContext, useEffect, useState } from 'react';
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { Context } from '../../PageRouter';


const MapLocation = () => {
    const {latLng, setLatLng} = useContext(Context);
    const libraries = ['places'];
    const [markerPosition, setMarkerPosition] = useState(latLng);
    const handleMapClick = e => {
        setMarkerPosition({ lat: e.latLng.lat(), lng: e.latLng.lng() });
    }
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: libraries
    });
    useEffect(()=>{
        setLatLng(markerPosition);
    },[markerPosition]);
    return  <div className='text-sm'>
        {isLoaded?
            <GoogleMap
                mapContainerStyle={{width: '300px', height: '240px'}}
                center = {latLng}
                zoom = {8}
                onClick={handleMapClick}
            >
                {markerPosition && <MarkerF position={markerPosition} />}
            </GoogleMap>
        : <p>Loading...</p>
        }
    </div>
    
}

export default MapLocation;
