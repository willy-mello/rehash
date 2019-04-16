import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import PropTypes from 'prop-types'
import GravatarApi from 'gravatar-api'


const ChatMessage = ({ chatMessage }) => {
  const avatarUrl = GravatarApi.imageUrl({
    email: chatMessage.user_email,
    parameters: { size: "50", "d": "monsterid" },
  }).replace('http', 'https')

  return (
    <View style={styles.completeMessage}>
      <View style={styles.chatBubble}>

        <Text style={{ width: '80%' }}>{chatMessage.message}</Text>
      </View>

      <Image style={styles.roundedProfileImage}
        source={{ uri: avatarUrl }} />
    </View>
  )
}

const styles = StyleSheet.create({
  roundedProfileImage: {
    width: 50, height: 50, borderWidth: 3,
    borderColor: 'black', borderRadius: 25
  },
  chatBubble: {
    width: '85%', borderWidth: 1, borderRadius: 25, flexDirection: 'row',
    backgroundColor: '#FF6B4C', justifyContent: 'space-evenly',
    borderColor: '#FF6B4C', alignItems: 'center', padding: 4
  },
  completeMessage: {
    flex: 1, flexDirection: 'row', alignSelf: 'flex-end', marginBottom: 5
  }
})

ChatMessage.propTypes = {
  chatMessage: PropTypes.object.isRequired,
}

export default ChatMessage
