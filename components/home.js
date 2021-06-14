import React from 'react';
import { StyleSheet, TextInput, View, Button, TouchableNativeFeedback, Keyboard, Text } from 'react-native';

const Home = (props) => {
    return (
        <TouchableNativeFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={styles.container}>
                <View style={styles.main}>
                    <Text style={styles.textUser}>EnglishEZ</Text>
                    <TextInput style={styles.inputText} placeholder="ENTER YOUR NAME" underlineColorAndroid="black" />
                    <Button title="NEXT" onPress={props.fun} />
                </View>
            </View>
        </TouchableNativeFeedback>
    );

}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputText: {
        padding: 10,
        width: 200,
        marginBottom: 20,
        textAlign: 'center',
    },
    main: {
        padding: 40,
        backgroundColor: 'yellow',
        elevation: 8,
    },
    textUser: {
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 20,
    }
});
