/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/app/navigation/RootNavigator";

function App() {
    const isDarkMode = useColorScheme() === "dark";
    const insets = useSafeAreaInsets();

    return (
        <SafeAreaProvider>
            <View style={{ flex: 1, paddingTop: insets.top, paddingLeft: insets.left, paddingBottom: insets.bottom, paddingRight: insets.right }}>
                <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} backgroundColor={isDarkMode ? "#000" : "#fff"} />
                <NavigationContainer>
                    <RootNavigator />
                </NavigationContainer>
            </View>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
