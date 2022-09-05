import { useRef, useEffect, useMemo } from 'react';
import { Icon, Marker } from 'leaflet';
import useMap from '../../hooks/useMap';
import { City, MarkerType } from '../../types/map';
import { UrlMarker, CITY_DEFAULT } from '../../const';
import {useAppSelector} from '../../hooks';
import 'leaflet/dist/leaflet.css';
import {getActiveCard, getCity, getCityLocation, getCityMarkers, getNearCityMarkers} from '../../store/app-data/selectors';

const defaultCustomIcon = new Icon({
  iconUrl: UrlMarker.Default,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: UrlMarker.Current,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

type MapProps = {
  addClass?: string;
  nearOnly?: boolean;
  currentOfferLocation?: MarkerType | null;
};

const Map = ({addClass = 'cities', nearOnly = false, currentOfferLocation = null} : MapProps) : JSX.Element => {
  const cityLocation = useAppSelector(getCityLocation) || CITY_DEFAULT;
  const currentCity = useAppSelector(getCity);

  const getPoints = nearOnly ? getNearCityMarkers : getCityMarkers;

  const points = useAppSelector(getPoints);

  const activePoint = useAppSelector(getActiveCard);

  const city : City = useMemo(() => ({
    title: currentCity,
    lat: cityLocation?.latitude,
    lng: cityLocation?.longitude,
    zoom: cityLocation?.zoom,
  }), [currentCity, cityLocation]);

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markers = points.map((point) => {
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

        return marker;
      });
      return () => {
        markers.forEach((marker) => {
          marker.removeFrom(map);
        });
      };
    }
  }, [map, points, currentCity, city, activePoint]);


  useEffect(() => {
    if (map && currentOfferLocation) {
      const currentOfferMarker = new Marker({
        lat: currentOfferLocation.latitude,
        lng: currentOfferLocation.longitude
      });

      currentOfferMarker
        .setIcon(
          defaultCustomIcon
        )
        .addTo(map);

      return () => {
        currentOfferMarker.removeFrom(map);
      };
    }
  }, [currentOfferLocation, map]);


  return <section className={`${addClass}__map map`} style={{'height': '648px'}} ref={mapRef} />;
};

export default Map;
