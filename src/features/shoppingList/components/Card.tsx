import { StyleSheet, View } from "react-native";

import { Colors, GlobalStyles } from "../../../assets";
import { CardProps } from "../types/shoppingList.types";
import { CardHeader } from "./CardHeader";
import { CardContent } from "./CardContent";
import { CardFooter } from "./CardFooter";

export const Card = ({ item }: CardProps) => {

    return (
        <View style={GlobalStyles.ph}>
            <View style={styles.card}>
                <CardHeader title={item.title} date={item.date} />
                <CardContent
                    productsCurrent={item.productsCurrent}
                    productsTotal={item.productsTotal}
                    budgetEstimated={item.budgetEstimated}
                    shop={item.shop}
                    progress={item.progress}
                />
                {item.sharedProfiles && (
                    <CardFooter sharedProfiles={item.sharedProfiles} />
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        marginBottom: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 3,
        padding: 15,
        borderLeftWidth: 4,
        borderLeftColor: Colors.mainColor,
    },
});
