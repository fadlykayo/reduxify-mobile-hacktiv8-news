import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setSearchKey } from '../actions'

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button
} from 'react-native'

class News extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <View style={styles.news}>
        <View style={{backgroundColor: '#daffb3'}}>
          <Button
            title={this.props.sceneTitle}
            onPress={() => this.props.navigator.push({
              name: 'Peoples',
              title: 'To News'
            })}
          />
        </View>
        <Text style={styles.title}>News</Text>
        <ScrollView style={styles.scroll}>
          {this.props.news
            .filter((eachNews) => (eachNews.title === null ? '' : eachNews.title).match(new RegExp(this.props.searchKey, 'i')))
            .filter(eachNews => item.title !== null && item.title !== '')
            .map((eachNews, index) => {
             return (
               <Text style={styles.list} key={index}>
                 {eachNews.title}
               </Text>
             )
           })}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scroll:{
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#ccffee',
    borderRadius: 5
  },
  news: {
    flex: 0.8,
    backgroundColor: 'skyblue'
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 15,
  },
  list: {
    padding: 3,
    marginLeft: 20,
    marginRight: 20,
    color: '#333333',
    marginBottom: 5,
    textAlign: 'center'
  }
})

const mapStateToProps = (state) => {
  return {
    news: state.news,
    searchKey: state.searchKey
  }
}

export default connect(mapStateToProps, null)(News)
