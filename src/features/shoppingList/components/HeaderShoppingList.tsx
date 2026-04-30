import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Colors, GlobalStyles } from "../../../assets";
import TextApp from "../../../shared/components/TextApp";
import { Typography } from "../../../assets/fonts";
import { HeaderContainer } from "../../../shared/components/HeaderContainer";

export const HeaderShoppingList = () => {
    const insets = useSafeAreaInsets();

    return (
        <HeaderContainer>
            <View style={styles.header}>
                <TextApp style={styles.text}>Mes listes de courses</TextApp>
                <TouchableOpacity style={styles.btnAddList}>
                    <Icon name="add" size={18} color={Colors.white} />
                </TouchableOpacity>
            </View>
        </HeaderContainer>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    text: {
        color: Colors.white,
        textAlign: "center",
        fontFamily: Typography.medium,
        fontSize: 18,
    },
    btnAddList: {
        backgroundColor: Colors.secondaryColor,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 7,
        width: 30,
        height: 30,
    },
});
