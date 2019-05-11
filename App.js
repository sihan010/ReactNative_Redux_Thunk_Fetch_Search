import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import AlbumList from './components/AlbumList';

class App extends Component {
  render() {
    StatusBar.setBackgroundColor('#154360', true);
    return (
      <Provider store={store}>
        <AlbumList />
      </Provider>
    );
  }
}

export default App;
