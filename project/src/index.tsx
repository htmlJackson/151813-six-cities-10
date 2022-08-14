import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

import { offers } from './mocs/offers';

import {Provider} from 'react-redux';

import {store} from './store';

const cardsCount = 5;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        cardsCount={cardsCount}
        offers={offers}
      />
    </Provider>

  </React.StrictMode>,
);
