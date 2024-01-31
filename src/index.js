import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
import configureStore from './redux/store';

const store = configureStore() // creating store
global.reduxStore = store // making store global so that we can use it in any file

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* providing store to app */}
      <App />
    </Provider>
  </React.StrictMode>
);
