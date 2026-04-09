import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Colors } from "../../assets";

const Input = () => {
    return <TextInput style={{ ...styles.textInput, backgroundColor: Colors.backgroundInput }} />;
};

export default Input;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        width: "100%",
        height: 50,
    },
    textInput: {
        width: "100%",
        height: "100%",
        borderRadius: 9,
        paddingVertical: 50,
        paddingHorizontal: 8,
    },
});
