export type City = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
};

export type MarkerType = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type Markers = MarkerType[];
