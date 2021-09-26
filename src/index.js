import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import { cartReducer } from './reducers/index'
import { Provider } from 'react-redux'

const store = createStore(cartReducer);

store.dispatch({
  type: "ADD_ITEM_TO_CART",
  payload: {
    name: 'קובה מנסופיה',
    count: 4,
    price: 10
  }
})

store.dispatch({
  type: "ADD_ITEM_TO_CART",
  payload: {
    name: 'קובה חמוסטה חמוץ מאוד עם סלרי ולימון',
    count: 3,
    price: 35
  }
})
store.dispatch({
  type: "ADD_ITEM_TO_CART",
  payload: {
    name: 'קובה סלק',
    count: 2,
    price: 20
  }
})
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
