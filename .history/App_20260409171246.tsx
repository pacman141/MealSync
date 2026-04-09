/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useState } from "react";
import { StatusBar, StyleSheet, useColorScheme, Text, StatusBarStyle } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/app/navigation/RootNavigator";

const STYLES = ["default", "dark-content", "light-content"] as const;
const TRANSITIONS = ["fade", "slide", "none"] as const;

function App() {
    const [hidden, setHidden] = useState(false);
    const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(STYLES[0]);
    const [statusBarTransition, setStatusBarTransition] = useState<"fade" | "slide" | "none">(TRANSITIONS[0]);

    const changeStatusBarVisibility = () => setHidden(!hidden);

    const changeStatusBarStyle = () => {
        const styleId = STYLES.indexOf(statusBarStyle) + 1;
        if (styleId === STYLES.length) {
            setStatusBarStyle(STYLES[0]);
        } else {
            setStatusBarStyle(STYLES[styleId]);
        }
    };

    const changeStatusBarTransition = () => {
        const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
        if (transition === TRANSITIONS.length) {
            setStatusBarTransition(TRANSITIONS[0]);
        } else {
            setStatusBarTransition(TRANSITIONS[transition]);
        }
    };
    return (
        <SafeAreaProvider>
            <StatusBar animated={true} backgroundColor="#61dafb" barStyle={statusBarStyle} showHideTransition={statusBarTransition} hidden={hidden} />
            <NavigationContainer>
                <RootNavigator />
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
