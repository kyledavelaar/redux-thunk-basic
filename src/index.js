import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

  const initialState = {
   items: [
      {
        "id": "-1",
        "label": "List item from kyl"
      },
      {
        "id": "0",
        "label": "List item from billy"
      },
    ] 
  }

const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
