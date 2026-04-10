import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { ButtonCustomProps, ButtonTextProps } from "../types/types";
import { Colors } from "../../assets";

const ButtonCustom = ({ title, type, styleButton, styleText, titleColor = "dark", onPress }: ButtonCustomProps) => {
    const ButtonText = ({ color }: ButtonTextProps) => <Text style={{ color: color === "dark" ? Colors.text : Colors.white, fontSize: type ? 18 : 16, ...styleText }}>{title}</Text>;

    if (type === "color") {
        return (
            <TouchableOpacity onPress={onPress} style={{ ...styles.touchableOpacity, ...styleButton, backgroundColor: Colors.primaryDark }}>
                <ButtonText color="light" />
            </TouchableOpacity>
        );
    } else if (type === "light") {
        return (
            <TouchableOpacity onPress={onPress} style={{ ...styles.touchableOpacity, ...styleButton, backgroundColor: Colors.primaryLight }}>
                <ButtonText color="dark" />
            </TouchableOpacity>
        );
    } else if (type === "linear") {
        return (
            <TouchableOpacity onPress={onPress} style={{ ...styles.touchableOpacity, ...styleButton }}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[Colors.primaryDark, Colors.primaryLight]} style={styles.linearGradient}>
                    <ButtonText color="light" />
                </LinearGradient>
            </TouchableOpacity>
        );
    } else {
        return (
            <TouchableOpacity onPress={onPress} style={styleButton}>
                <ButtonText color={titleColor} />
            </TouchableOpacity>
        );
    }
};

export default ButtonCustom;

const styles = StyleSheet.create({
    touchableOpacity: {
        borderRadius: 10,
        height: 50,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    linearGradient: {
        borderRadius: 15,
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
});
