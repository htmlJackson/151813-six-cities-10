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

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const citiesList = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout'
}

export enum NameSpace {
  Data = 'DATA',
  User = 'USER',
  App = 'App',
}
