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
    name: 'aaaaa',
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
