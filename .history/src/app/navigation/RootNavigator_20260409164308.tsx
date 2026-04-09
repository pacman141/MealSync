import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthScreen from "../../features/auth/screens/AuthScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="AuthScreen" component={AuthScreen} />
        </Stack.Navigator>
    );
};

export default RootNavigator;
