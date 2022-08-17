export type City = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
};

export type Marker = {
  title: string;
  lat: number;
  lng: number;
};

export type Markers = Marker[];

export type Point = {
  city: string,
  markers: Marker[],
};

export type Points = Point[];
