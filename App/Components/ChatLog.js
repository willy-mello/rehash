import React from 'react'
import { View, ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import ChatMessage from './ChatMessage'

const ChatLog = ({ chats }) => {
  let i = 0

  return (
    <View style={{ flexDirection: 'column', width: '100%', marginTop: 30, height: '85%' }} >
      <ScrollView
        style={{ maxHeight: '100%' }}
        ref={ref => this.scrollView = ref}
        onContentSizeChange={(contentWidth, contentHeight) => {
          this.scrollView.scrollToEnd({ animated: true });
        }}
      >

        {chats.map(chatMessage => {
          i = i + 1
          return (
            <ChatMessage
              style={{ flex: 1, width: '90%', padding: 5 }}
              key={`chat${i}`} chatMessage={chatMessage} />

          )
        })}
      </ScrollView>
    </View>
  )
}

ChatLog.propTypes = {
  chats: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      user_email: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}

export default ChatLog

