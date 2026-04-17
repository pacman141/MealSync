import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Colors } from "../../assets";
import { HeaderDashboard } from "./HeaderDashboard";
import { MealPlannerScreen } from "../../features/mealPlanner/screens";
import { ShoppingListScreen } from "../../features/shoppingList/screens";
import { BudgetScreen } from "../../features/budget/screens/BudgetScreen";
import { DashboardScreen } from "../../features/dashboard/screens";
import { UserScreen } from "../../features/user/screens";
import { RootTabParamList } from "./types/rootNavigator.types";

const Tab = createBottomTabNavigator<RootTabParamList>();

export const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: Colors.mainColor,
            tabBarInactiveTintColor: Colors.text
        }}>
            <Tab.Screen
                name="Dashboard"
                component={DashboardScreen}
                options={{
                    headerStyle: {
                        backgroundColor: Colors.mainColor,
                    },
                    headerTitle: () => <HeaderDashboard />,
                    tabBarIcon: ({ color, size }) => <Icon name="home" size={size} color={color} />,
                }}
            />
            <Tab.Screen
                name="MealPlanner"
                component={MealPlannerScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <Icon name="calendar-month" size={size} color={color} />,
                }}
            />
            <Tab.Screen
                name="ShoppingList"
                component={ShoppingListScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <Icon name="checklist" size={size} color={color} />,
                }}
            />
            <Tab.Screen
                name="Budget"
                component={BudgetScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <Icon name="euro" size={size} color={color} />,
                }}
            />
            <Tab.Screen
                name="User"
                component={UserScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <Icon name="account-circle" size={size} color={color} />,
                }}
            />
        </Tab.Navigator>
    );
};
