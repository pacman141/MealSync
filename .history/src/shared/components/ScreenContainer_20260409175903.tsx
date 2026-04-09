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
                paddingTop: insets.top,
                paddingLeft: insets.left,
                paddingRight: insets.right,
                paddingBottom: insets.bottom,
            }}
        >
            {children}
        </View>
    );
};

export default ScreenContainer;
