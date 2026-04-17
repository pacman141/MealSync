import { NavigatorScreenParams, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootTabParamList = {
    Dashboard: undefined;
    MealPlanner: undefined;
    ShoppingList: undefined;
    Budget: undefined;
    User: undefined;
};

export type RootStackParamList = {
    Auth: undefined;
    Main: NavigatorScreenParams<RootTabParamList>;
};

export type AppNavigation = NativeStackNavigationProp<RootStackParamList>;

export const useAppNavigation = () => useNavigation<AppNavigation>();
