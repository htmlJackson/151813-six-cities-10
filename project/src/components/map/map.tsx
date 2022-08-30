import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import useMap from '../../hooks/useMap';
import { City } from '../../types/map';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT, CITY_DEFAULT } from '../../const';
import {useAppSelector} from '../../hooks';
import 'leaflet/dist/leaflet.css';
import {getActiveCard, getCity, getCityLocation, getCityMarkers} from '../../store/app-data/selectors';

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});


const Map = () : JSX.Element => {
  const cityLocation = useAppSelector(getCityLocation) || CITY_DEFAULT;
  const currentCity = useAppSelector(getCity);
  const points = useAppSelector(getCityMarkers);
  const activePoint = useAppSelector(getActiveCard);

  const city : City = {
    title: currentCity,
    lat: cityLocation?.latitude,
    lng: cityLocation?.longitude,
    zoom: cityLocation?.zoom,
  };

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
  
    if (map) {
      points.forEach((point) => {
        const icon = JSON.stringify(point) === JSON.stringify(activePoint) ? currentCustomIcon : defaultCustomIcon;

        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude
        });

        marker
          .setIcon(
            icon
          )
          .addTo(map);
      });

    }
  }, [map, points, currentCity, city]);


  return <section className="cities__map map" style={{'height': '648px'}} ref={mapRef} />;
}

export default Map;

