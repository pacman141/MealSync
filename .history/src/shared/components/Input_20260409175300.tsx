import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Colors } from "../../assets";
import { InputProps } from "../types/types";

const Input = ({ placeholder, onChangeText }: InputProps) => {
    return <TextInput style={{ ...styles.textInput, backgroundColor: Colors.backgroundInput }} placeholder={placeholder} onChangeText={onChangeText}/>;
};

export default Input;

const styles = StyleSheet.create({
    textInput: {
        width: "100%",
        height: 50,
        borderRadius: 9,
        paddingHorizontal: 8,
    },
});
