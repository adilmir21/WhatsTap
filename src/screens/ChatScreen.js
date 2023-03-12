import { StyleSheet, Text, View, ImageBackground, FlatList, KeyboardAvoidingView } from 'react-native'
import bg from '../../assets/images/BG.png'
import Message from '../components/Message'
import messages from '../../assets/data/messages.json'
import React, { useEffect } from 'react'
import InputBox from '../components/InputBox'
import { useRoute, useNavigation } from '@react-navigation/native'
const ChatScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

useEffect(() => {
  navigation.setOptions({ title: route.params.name });
}, [route.params]);
  return (
    
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.bg}
    keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 90}
     >
    <ImageBackground source={bg} style= {styles.bg}>
      <FlatList 
        data={messages}
        renderItem = {({item})=><Message message={item} />}
        style = {styles.list}
        inverted
      />
      <InputBox />
    </ImageBackground>
    </KeyboardAvoidingView>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
    bg: {
        flex: 1,
    },
    list: {
        padding: 10,
    }
})