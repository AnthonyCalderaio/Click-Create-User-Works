import React from 'react'
import User from './User'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import {
  View,
  TouchableHighlight,
  ListView,
  Modal,
  StyleSheet,
  Text
} from 'react-native'
//import CreatePage from './CreatePage'



  const allUsersQuery = gql`
  query {
    allUsers(orderBy: id_DESC) {
      id
      name
      dateOfBirth
    }
  }`


class ListUser extends React.Component {

  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows([]),
      name: '',
      dateOfBirth: '',
      // modalVisible: false,
      // user: undefined,
    }

  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.allUsersQuery.loading && !nextProps.allUsersQuery.error) {
      const {dataSource} = this.state
      this.setState({
        dataSource: dataSource.cloneWithRows(nextProps.allUsersQuery.allUsers),
        
      })
      //alert('hey1')
    }
    if (nextProps.allUsersQuery.error){
      alert('there was an error'+`${nextProps.allUsersQuery.error}`)
    }
  }

  render () {
    if (this.props.allUsersQuery.loading) {
      //alert('hey2')
      return (
      <Text>Loading</Text>
    )
    }

    return (
      
      <View >
        <ListView
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={(user) => (
            <User
              description={user.name}
              
              //imageUrl={user.d}
            />
            

            // <Text>{user.name}</Text>
            // <Text>{user.dateOfBirth}</Text>
          )}
        />
        {/* <TouchableHighlight
          style={styles.createPostButtonContainer}
          onPress={this._createPost}
        >
          <Text style={styles.createPostButton}>Create Post</Text>
        </TouchableHighlight> */}
      </View>
    )
  }

  // _createPost = () => {
  //   // this.props.router.push('/create');
  //   this.setState({modalVisible: true})
  //   //alert('hey3')
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  createPostButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  createPostButton: {
    backgroundColor: 'rgba(39,174,96,1)',
    color: 'white',
    textAlign: 'center',
    fontSize: 22,
    height: 60,
    width: 480,
    paddingTop: 18,
  }
})

export default graphql(allUsersQuery, {name: 'allUsersQuery'})(ListUser)

