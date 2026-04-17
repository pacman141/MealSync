/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/app/navigation/RootNavigator";
import { MenuProvider } from "react-native-popup-menu";
import { GestureHandlerRootView } from "react-native-gesture-handler";

function App() {
    return (
        <SafeAreaProvider>
            <MenuProvider>
                <GestureHandlerRootView style={{ flex: 1 }}>
                    <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
                    <NavigationContainer>
                        <RootNavigator />
                    </NavigationContainer>
                </GestureHandlerRootView>
            </MenuProvider>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
