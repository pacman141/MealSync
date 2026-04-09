import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ScreenContainerProps } from "../types/types";
import LinearGradient from "react-native-linear-gradient";
import { Colors } from "../../assets";
import { StyleSheet, View } from "react-native";

const ScreenContainer = ({ children, safeAreaTop = true, safeAreaBottom = true, type = "light" }: ScreenContainerProps) => {
    const insets = useSafeAreaInsets();

    const ScreenLinear = () => (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[Colors.primaryDark, Colors.primaryLight]} style={styles.linearGradient}>
            {children}
        </LinearGradient>
    );

    const ScreenLight = () => (
        <View >
            {children}
        </View>
    );

    const ScreenColor = () => (
        <View >
            {children}
        </View>
    );

    return (
        <View
            style={{
                flex: 1,
                paddingTop: safeAreaTop ? insets.top : 0,
                paddingBottom: safeAreaBottom ? insets.bottom : 0,
                paddingLeft: insets.left,
                paddingRight: insets.right,
            }}
        >
            {
                type === "light" ? <ScreenLight /> : (type === 'color' ? <Scree)
            }
        </View>
    );
};

export default ScreenContainer;

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
    },
    linearGradient: {
        flex: 1,
    },
    linearGradient: {
        flex: 1,
    },
});
