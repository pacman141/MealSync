import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Colors } from "../../assets";

const Input = () => {
    return <TextInput style={{ ...styles.textInput, backgroundColor: Colors.backgroundInput }} />;
};

export default Input;

const styles = StyleSheet.create({
    textInput: {
        width: "100%",
        height: 30,
        borderRadius: 9,
        paddingVertical: 10,
        paddingHorizontal: 8,
    },
});
