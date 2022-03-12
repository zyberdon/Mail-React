import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { store } from './store'
import Outlook from './outlook'

class App extends React.Component {
  render() {
    return (
      // pass the store into the provider
      <Provider store={store}>
        <div>
          <Outlook/> 
        </div>
      </Provider>
    )
  }
}
export default App
 