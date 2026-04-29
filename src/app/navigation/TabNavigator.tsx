import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Colors } from "../../assets";
import { HeaderShoppingList } from "./HeaderShoppingList";
import { ShoppingListScreen } from "../../features/shoppingList/screens";
import { MealPlannerScreen } from "../../features/mealPlanner/screens";
import { BudgetScreen } from "../../features/budget/screens/BudgetScreen";
import { UserScreen } from "../../features/user/screens";
import { RootTabParamList } from "./types/rootNavigator.types";

const Tab = createBottomTabNavigator<RootTabParamList>();

export const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: Colors.mainColor,
                tabBarInactiveTintColor: Colors.text,
                headerStyle: {
                    backgroundColor: Colors.mainColor,
                },
                headerTitleStyle: {
                    color: Colors.white
                }

            }}
        >
            <Tab.Screen
                name="ShoppingList"
                component={ShoppingListScreen}
                options={{
                    headerTitle: () => <HeaderShoppingList />,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="checklist" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="MealPlanner"
                component={MealPlannerScreen}
                options={{
                    title: "Mes repas",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="calendar-month" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Budget"
                component={BudgetScreen}
                options={{
                    title: "Mon budget",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="euro" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="User"
                component={UserScreen}
                options={{
                    title: "Mon compte",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="account-circle" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};
