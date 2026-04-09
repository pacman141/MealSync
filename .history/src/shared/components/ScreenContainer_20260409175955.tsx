import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ScreenContainerProps } from "../types/types";
import { View } from "react-native";

const ScreenContainer = ({ children, safeAreaTop = true, safeAreaBottom = true }: ScreenContainerProps) => {
    const insets = useSafeAreaInsets();
    return (
        <View
            style={{
                flex: 1,
                paddingTop: safeAreaTop ? insets.top : 0,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
            }}
        >
            {children}
        </View>
    );
};

export default ScreenContainer;
