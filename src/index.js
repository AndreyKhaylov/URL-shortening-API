import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { App } from './components';
import { setupStore } from './store/configStore';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={setupStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
