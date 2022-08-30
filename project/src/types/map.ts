export type City = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
};

export type Marker = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type Markers = Marker[];