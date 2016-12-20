import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Provider } from 'react-redux'

import createStore from '/store/createStore'
import getScenes from '/getScenes'
import AppLayout from '/AppLayout'

const store = createStore()
const scenes = getScenes()

export default class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <AppLayout scenes={scenes} />
      </Provider>
    )
  }
}
