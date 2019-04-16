import React from 'react'
import { View, ScrollView, TextInput, StyleSheet, Button } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addMessage } from '../Reducers/ChatReducer'

class ChatFooter extends React.Component {
  constructor() {
    super()
    this.state = {
      message: '',
      user_email: 'obiwan@highground.com'
    }
  }

  render() {
    return (
      <View style={styles.chatInput}>
        <TextInput style={{ height: 40, alignSelf: 'center' }}
          placeholder="Type here to talk to monsters!"
          onChangeText={(message) => this.setState({ message })}
        >

        </TextInput>
        <View style={styles.sendButton} >

          <Button

            onPress={() => this.props.sendMessage(this.state)}
            title="Send!"
            color="#841584"
          />
        </View>
      </View>
    )
  }


}
const styles = StyleSheet.create({
  chatInput: {
    width: '100%', height: "10%", borderWidth: 3, marginTop: 1, borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50, borderColor: 'gray', alignSelf: 'flex-end',
    backgroundColor: '#FAE7E4', flexDirection: 'row', justifyContent: 'space-between'
  },
  sendButton: {
    height: 50, width: 50, borderWidth: 1, backgroundColor: '#5DFAFA'
  }
})
const mapDispatch = dispatch => ({
  sendMessage: (message) => dispatch(addMessage(message))
})

export default connect(null, mapDispatch)(ChatFooter)