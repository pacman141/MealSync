import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ScreenContainerProps } from "../types/types";
import { View } from "react-native";

const ScreenContainer = ({ children }: ScreenContainerProps) => {
    const insets = useSafeAreaInsets();
    return (
        <View style={{ 
                flex: 1, 
                paddingTop: insets.top, 
                paddingLeft: insets.left, 
                paddingBottom: insets.bottom, 
                paddingRight: insets.right 
        }}>
            {children}
        </View>
    );
};

export default ScreenContainer;
