import React from 'react';
import {StyleSheet, Text, View, ScrollView, TextInput, Button} from 'react-native';
import {Avatar, Icon} from 'react-native-elements';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={{flex: 8}}>
                <ScrollView>
                    <View style={styles.withicon}>
                        <Avatar rounded size={'medium'} title="TP"/>
                        <Text style={styles.msgbox}>Tada</Text>
                    </View>
                    <View style={styles.withicon}>
                        <Avatar rounded size={'medium'} title="TP"/>
                        <Text style={styles.msgbox}>Open up App.js to start working on your app!</Text>
                    </View>

                </ScrollView>
            </View>
            <View style={styles.blockaction}>
                <View style={styles.inputmessage}>
                    <TextInput
                        style={{height: 40}}
                        placeholder="Hey!"
                    />
                </View>
                <View style={styles.btnsend}>
                    <Button title={'Send'} style={styles.btnsend}></Button>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
    },
    inputmessage: {
        width: '80%',
    },
    btnsend: {
        width: '20%',
    },
    msgbox: {
        backgroundColor: '#f1f0f0',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da',
        fontSize: 17,
        padding: 10,
        width: '90%',
    },
    blockaction: {
        flex: 1,
        flexDirection: "row",
        padding: 5,
        backgroundColor: '#f1f0f0',
        justifyContent: 'center',
    },
    withicon: {
        flexDirection: "row",
    },
});
