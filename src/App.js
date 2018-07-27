import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import firebase from 'firebase';
import thunk from 'redux-thunk';

import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCDXbNzmtj0emrBe9MPST59aCbdMNH-JBM',
      authDomain: 'manager-669d6.firebaseapp.com',
      databaseURL: 'https://manager-669d6.firebaseio.com',
      projectId: 'manager-669d6',
      storageBucket: 'manager-669d6.appspot.com',
      messagingSenderId: '926049395481'
    };

    firebase.initializeApp(config);
  }

  render() {
    const composeEnhancers =
      typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
          })
        : compose;
    const enhancer = composeEnhancers(
      applyMiddleware(thunk)
      // other store enhancers if any
    );
    const store = createStore(reducers, enhancer);

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
