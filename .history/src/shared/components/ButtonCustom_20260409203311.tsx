import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { ButtonCustomProps } from "../types/types";
import { Colors } from "../../assets";

const ButtonCustom = ({ title, onPress, type = "linear" }: ButtonCustomProps) => {
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
            <TouchableOpacity onPress={onPress} style={{ ...styles.touchableOpacity }}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[Colors.primaryDark, Colors.primaryLight]} style={styles.linearGradient}>
                    <Text style={styles.text}>{title}</Text>
                </LinearGradient>
            </TouchableOpacity>
        );
    }
};

export default ButtonCustom;

const styles = StyleSheet.create({
    touchableOpacity: {
        borderRadius: 10,
        height: 40,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    linearGradient: {
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "#fff",
    },
});
