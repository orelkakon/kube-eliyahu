import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import { cartReducer } from './reducers/index'
import { Provider } from 'react-redux'
import { actionAddItem } from './actions/index'
import { decrypt } from './security/index'

const store = createStore(cartReducer);

for (let i = 0; i < localStorage.length; i++) {
  const productObject = JSON.parse(localStorage.getItem(localStorage.key(i)))
  if (productObject.imgUrl) { // check that it's good local storage value
    store.dispatch(actionAddItem(
      localStorage.key(i),
      productObject.description,
      productObject.count,
      productObject.price,
      decrypt(productObject.imgUrl)
    ))
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
