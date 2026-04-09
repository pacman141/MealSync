import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ButtonCustomProps } from "../types/types";

const ButtonCustom = ({ title, onPress, type }: ButtonCustomProps) => {
    if (type === "color") {
        return (
            <TouchableOpacity onPress={onPress} style={styles.color}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        );
    }

    else if (type === "light") {
        return (
            <TouchableOpacity onPress={onPress} style={styles.light}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        );
    }

    else if (type === "linear") {
        return (
            <TouchableOpacity onPress={onPress} style={styles.linear}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        );
    }
};

export default ButtonCustom;

const styles = StyleSheet.create({
    color: {
        
    },
    light: {

    },
    linear: {

    },
    text: {

    },
});
