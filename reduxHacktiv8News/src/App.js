import React, { Component } from 'react'

import {
  View,
  StyleSheet,
  Navigator
} from 'react-native'

import { Header, News, Peoples } from './components'

class App extends Component {
  render () {
    return (
      <View>
        <Header />
        <Navigator
          initialRoute={{name: 'News', title: 'to People'}}
          renderScene={(route, navigator) => {
            switch (route.name) {
              case 'News':
                return (
                  <News
                    sceneTitle={route.title}
                    navigator={navigator}
                  />
                )
              case 'Peoples':
                return (
                  <Peoples
                    sceneTitle={route.title}
                    navigator={navigator}
                  />
                )
              default:
                return (
                  <News
                    sceneTitle={route.title}
                    navigator={navigator}
                  />
                )
            }
          }}
        />
      </View>
    )
  }
}

export default App
