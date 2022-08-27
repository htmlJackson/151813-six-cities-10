import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import useMap from '../../hooks/useMap';
import { City, Markers } from '../../types/map';
import { URL_MARKER_DEFAULT } from '../../const';
import {useAppSelector} from '../../hooks';
import 'leaflet/dist/leaflet.css';
import {getCity} from '../../store/app-data/selectors';

type MapProps = {
  city: City;
  points: Markers;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});


function Map(props: MapProps): JSX.Element {
  const {city, points} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const currentCity = useAppSelector(getCity);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng
        });

        marker
          .setIcon(
            defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, points, currentCity]);

  return <section className="cities__map map" style={{'height': '648px'}} ref={mapRef} />;
}

export default Map;

