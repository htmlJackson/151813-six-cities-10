import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocs/offers';
import { Provider } from 'react-redux';
import { store } from './store';
import { citiesList } from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={offers}
        citiesList={citiesList}
      />
    </Provider>

  </React.StrictMode>,
);
