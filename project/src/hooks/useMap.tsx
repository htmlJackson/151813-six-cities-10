import { useEffect, useState, MutableRefObject, useRef } from 'react';
import { Map, TileLayer } from 'leaflet';
import { City } from '../types/map';

const useMap = (
  mapRef: MutableRefObject<HTMLElement | null>,
  city: City
): Map | null => {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && map === null && !isRenderedRef.current) {

      const instance = new Map(mapRef.current, {
        center: {
          lat: city.lat,
          lng: city.lng
        },
        zoom: 10
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);
      setMap(instance);

      isRenderedRef.current = true;
    }
  }, [mapRef, city, map]);

  useEffect(() => {
    if (map) {
      map.flyTo([city.lat, city.lng], city.zoom, {
        animate: false,
        duration: 0.9
      });
    }
  }, [map, city]);

  return map;
};

export default useMap;
