import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setSearchKey, fetchNews, fetchPeoples } from '../actions'

import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native'

class Header extends Component {
  render () {
    return (
      <View style={styles.header}>
        <Text style={styles.welcome}>
          Hacktiv8 News And Peoples
        </Text>
        <View>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            onChange={(event) => {
              this.props.setSearchKey(event.nativeEvent.text)
              let that = this
              let thatEventText = event.nativeEvent.text;
              setTimeout(function () {
                that.props.fetchNews(thatEventText)
                that.props.fetchPeoples(thatEventText)
              }, 1000)

            }}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 0.17,
    backgroundColor: 'steelblue',
    paddingTop: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold'
  },
  searchInput: {
    height: 37,
    width: '90%',
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'white',
    borderRadius: 4
  }
})

const mapStateToProps = (state) => {
  return {
    searchKey: state.searchKey
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchKey: (searchKeyword) => dispatch(setSearchKey(searchKeyword)),
    fetchPeoples: (peoples) => dispatch(fetchPeoples(peoples)),
    fetchNews: (news) => dispatch(fetchNews(news))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
