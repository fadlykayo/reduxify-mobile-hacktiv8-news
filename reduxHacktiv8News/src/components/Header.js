import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setSearchKey } from '../actions'

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
            value={this.props.searchKey}
            onChange={(event) => {
              this.props.setSearchKey(event.nativeEvent.text)
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
    setSearchKey: (key) => dispatch(setSearchKey(key))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
