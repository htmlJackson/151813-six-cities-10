export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer',
  Root = '/',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum UrlMarker {
  Default = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
  Current = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
}

export const citiesList = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const sortStatusArray = [
  {
    status: 'popular',
    desciption: 'Popular',
  },
  {
    status: 'price-from-low',
    desciption: 'Price: low to high',
  },
  {
    status: 'price-from-high',
    desciption: 'Price: high to low',
  },
  {
    status: 'rating-from-high',
    desciption: 'Top rated first',
  },
];

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Favorite = '/favorite',
}

export enum NameSpace {
  Data = 'DATA',
  User = 'USER',
  App = 'App',
}


export const emptyOffer = {
  bedrooms: 0,
  city: {
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    },
    name: '',
  },
  description: '',
  goods: [''],
  host: {
    avatarUrl: '',
    id: 0,
    isPro: false,
    name: '',
  },
  id: 0,
  images: [''],
  isFavorite: false,
  isPremium: false,
  location: {
    latitude: 0,
    longitude: 0,
    zoom: 0,
  },
  maxAdults: 0,
  previewImage: '',
  price: 0,
  rating: 0,
  title: '',
  type: '',
};

export const CITY_DEFAULT = {
  title: 'Нью-Йорк',
  latitude: 52.3909553943508,
  longitude:  4.929309666406198,
  zoom: 10,
};
