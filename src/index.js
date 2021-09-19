import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import { cartReducer } from './reducers/index'
import { Provider } from 'react-redux'

const store = createStore(cartReducer);

// store.dispatch({
//   type: "ADD_ITEM_TO_CART",
//   payload: {
//     name: 'orel',
//     count: 2
//   }
// })
// store.dispatch({
//   type: "ADD_ITEM_TO_CART",
//   payload: {
//     name: 'hadar',
//     count: 4
//   }
// })

// store.dispatch({
//   type: "UPDATE_ITEM_ON_CART",
//   payload: {
//     name: 'orel',
//     count: 7
//   }
// })
// console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
