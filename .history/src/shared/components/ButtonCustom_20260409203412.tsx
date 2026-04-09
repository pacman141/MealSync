import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { ButtonCustomProps } from "../types/types";
import { Colors } from "../../assets";

const ButtonCustom = ({ title, onPress, type = "linear", style }: ButtonCustomProps) => {
    if (type === "color") {
        return (
            <TouchableOpacity onPress={onPress} style={{ ...styles.touchableOpacity, ...style, backgroundColor: Colors.primaryDark }}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        );
    } else if (type === "light") {
        return (
            <TouchableOpacity onPress={onPress} style={{ ...styles.touchableOpacity, ...style, backgroundColor: Colors.primaryLight }}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        );
    } else if (type === "linear") {
        return (
            <TouchableOpacity onPress={onPress} style={{ ...styles.touchableOpacity, ...style }}>
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
        borderRadius: 10,
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "#fff",
    },
});
