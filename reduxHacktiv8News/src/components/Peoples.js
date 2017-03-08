import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchPeoples } from '../actions'

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  Image
} from 'react-native'

class Peoples extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.props.fetchPeoples()
  }

  render () {
    return (
      <View style={styles.peoples}>
        <View style={{backgroundColor: '#daffb3'}}>
          <Button
            title={this.props.sceneTitle}
            onPress={() => this.props.navigator.pop()}
          />
        </View>
        <Text style={styles.title}>Peoples</Text>
        <ScrollView style={styles.scroll}>
          {this.props.peoples.length < 1 ? <Image style={styles.loading} source={require('./loading2.gif')} /> : <Text></Text>}
          {this.props.peoples
            .map((eachPeople, index) => {
             return (
               <Text style={styles.list} key={index}>
                 {eachPeople.name}
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
  peoples: {
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
  loading:{
    width: 100,
    height: 100,
    margin: 120
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
    peoples: state.peoples
    .filter(eachPeople => (eachPeople.name === null ? '' : eachPeople.name).match(new RegExp(state.searchKey, 'i')))
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPeoples: () => dispatch(fetchPeoples())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Peoples)
