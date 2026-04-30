import { FlatList, Text } from "react-native";
import React from "react";
import { ListProps } from "../types/shoppingList.types";
import { Card } from "./Card";

export const List = ({ list }: ListProps) => {

    return (
        <FlatList
            data={list}
            renderItem={({ item }) => <Card item={item} />}
            keyExtractor={(item) => item.id.toString()}
            style={{ backgroundColor: 'red' }}
        />
    );
};
