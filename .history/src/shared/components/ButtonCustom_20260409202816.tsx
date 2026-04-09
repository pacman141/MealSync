import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ButtonCustomProps } from "../types/types";
import { Colors } from "../../assets";

const ButtonCustom = ({ title, onPress, type = "color" }: ButtonCustomProps) => {
    if (type === "color") {
        return (
            <TouchableOpacity onPress={onPress} style={{ ...styles.touchableOpacity, backgroundColor: Colors.primaryDark }}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        );
    } else if (type === "light") {
        return (
            <TouchableOpacity onPress={onPress} style={{ ...styles.touchableOpacity, backgroundColor: Colors.primaryLight }}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        );
    } else if (type === "linear") {
        return (
            <TouchableOpacity onPress={onPress} style={{ ...styles.touchableOpacity, backgroundColor: Colors.primaryDark }}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        );
    }
};

export default ButtonCustom;

const styles = StyleSheet.create({
    touchableOpacity: {

    },
    text: {
        color: "#fff",
    },
});
