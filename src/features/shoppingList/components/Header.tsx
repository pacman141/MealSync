import { StyleSheet, View } from "react-native";
import React from "react";
import { HeaderProps } from "../types/shoppingList.types";
import TextApp from "../../../shared/components/TextApp";
import { Colors, GlobalStyles } from "../../../assets";
import { Typography } from "../../../assets/fonts";

export const Header = ({ totalBudget, totalList }: HeaderProps) => {
    return (
        <View style={GlobalStyles.ph}>
            <View style={styles.container}>
                <TextApp>
                    Budget total:{" "}
                    <TextApp style={{ fontFamily: Typography.bold }}>
                        {totalBudget} €
                    </TextApp>
                </TextApp>
                <TextApp>
                    Nombre de liste:{" "}
                    <TextApp style={{ fontFamily: Typography.bold }}>
                        {totalList}
                    </TextApp>
                </TextApp>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        marginTop: 15,
        padding: 5,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "flex-start",
        gap: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 3,
        borderLeftWidth: 4,
        borderLeftColor: Colors.mainColor,
    },
});
