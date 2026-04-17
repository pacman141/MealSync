import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import React, { useState } from "react";
import Input from "../../../shared/components/Input";
import { Colors, GlobalStyles } from "../../../assets";
import { SearchFormProps } from "../types/dashboard.types";

export const SearchForm = ({ onChange }: SearchFormProps) => {
    const [isSearch, setIsSearch] = useState<boolean>(false);

    const handleChange = (text: string) => {
        setIsSearch(text.length > 0);
        if (text.length > 0) onChange(text);
    };

    return (
        <View style={GlobalStyles.ph}>
            <View style={styles.container}>
                <Icon name="search" size={24} color={Colors.text} style={styles.iconSearch} />
                <Input style={styles.input} onChangeText={(text) => handleChange(text)} />
                {isSearch && <Icon name="close" size={24} color={Colors.text} style={styles.iconClose} />}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        backgroundColor: Colors.white,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 15,
    },
    iconSearch: {
        paddingHorizontal: 8,
    },
    iconClose: {
        paddingHorizontal: 8,
    },
    input: {
        height: 40,
        flex: 1,
    },
});
