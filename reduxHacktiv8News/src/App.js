import React, { Component } from 'react'

import {
  View,
  StyleSheet,
  Navigator
} from 'react-native'

import { Header, News, Peoples } from './components'

const App extends Component {
  render () {
    return (
      <View>
        <Header />
        <Navigator
          initialRoute={{name: 'News', title: 'to People'}}
          renderScene={(route, navigator) => {
            switch (route.name) {
              case 'News':
                return (<News />)
              case 'Peoples':
                return (<Peoples />)
              default:
                return (<News />)
            }
          }}
        />
      </View>
    )
  }
}

export default App
