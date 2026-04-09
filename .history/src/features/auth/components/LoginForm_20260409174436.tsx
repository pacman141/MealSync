import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Colors } from "../../../assets";

const LoginForm = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput} />
        </View>
    );
};

export default LoginForm;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        width: '100%',
        //height: 40,
    },
    textInput: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 9,
        paddingVertical: 50,
        paddingHorizontal: 8
    },
});
