/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView , useSafeAreaInsets } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/app/navigation/RootNavigator";

function App() {

    return (
        <SafeAreaView>
            <StatusBar />
            <NavigationContainer>
                <RootNavigator />
            </NavigationContainer>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
