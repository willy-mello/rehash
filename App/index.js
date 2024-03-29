import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import ConnectedChatLog from './Containers/ConnectedChatLog'
import SimpleChatApp from './Reducers'
import SimpleChatSaga from './Sagas'
import ChatFooter from './Components/ChatFooter'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  SimpleChatApp,
  applyMiddleware(sagaMiddleware),
)

sagaMiddleware.run(SimpleChatSaga)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>

        <View style={styles.container}>
          <ConnectedChatLog />
        </View>
        <ChatFooter />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '90%'
  },
})
