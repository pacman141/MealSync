import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ScreenContainerProps } from "../types/types";
import LinearGradient from "react-native-linear-gradient";
import { Colors } from "../../assets";
import { View } from "react-native";

const ScreenContainer = ({ children, safeAreaTop = true, safeAreaBottom = true }: ScreenContainerProps) => {
    const insets = useSafeAreaInsets();
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
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[Colors.primaryDark, Colors.primaryLight]} style={styles.linearGradient}>
                {children}
            </LinearGradient>
        </View>
    );
};

export default ScreenContainer;
