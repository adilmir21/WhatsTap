//import liraries
import React, { useState } from 'react';
import { View, TextInput, StyleSheet} from 'react-native';
import {AntDesign, MaterialIcons} from '@expo/vector-icons'
import {SafeAreaView } from 'react-native-safe-area-context';
const InputBox = () => {

    const [newMessage, setNewMessage] = useState("")

    const onSend = ()=> {
        console.warn('Sending a new Message: ', newMessage)
        setNewMessage('')
    }
    return (
        <SafeAreaView edges={['bottom']} style={styles.container}>
            <AntDesign
                name='plus'
                size={20} 
                color = 'royalblue' 
            />
            <TextInput
                style = {styles.input}
                value={newMessage} 
                onChangeText={setNewMessage} 
                placeholder='Type yor message here'
             />
            <MaterialIcons 
                style = {styles.send} 
                name='send' 
                size={16} 
                color = 'white' 
                onPress={onSend} /> 
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'whitesmoke',
        padding: 5,
        paddingHorizontal: 10,
        alignItems: 'center',

    },
    input : {
        flex: 1,
        backgroundColor: 'white',
        padding: 5,
        paddingHorizontal: 10,
        borderColor: 'gray',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 50,
        marginHorizontal: 10,

    },
    send: {
        backgroundColor: 'royalblue',
        padding: 7,
        borderRadius: 15,
        overflow: 'hidden',
    }

});

//make this component available to the app
export default InputBox;
