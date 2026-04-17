import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthScreen } from "../../features/auth/screens";
import { RootStackParamList } from "./types/rootNavigator.types";
import { TabNavigator } from "./TabNavigator";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Auth"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Auth" component={AuthScreen} />
            <Stack.Screen name="Main" component={TabNavigator} />
        </Stack.Navigator>
    );
};

export default RootNavigator;
