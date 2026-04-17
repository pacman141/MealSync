import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Colors, GlobalStyles } from "../../../assets";
import TextApp from "../../../shared/components/TextApp";
import { Typography } from "../../../assets/fonts";

export const FiltersForm = () => {
    const STORES = ["Carrefour", "Leclerc", "Auchan"];

    const sections: { title: string; icon: string; items: string[] }[] = [
        {
            title: "Période",
            icon: "edit-calendar",
            items: ["Cette semaine", "Ce mois", "Personnalisé"],
        },
        {
            title: "Magasins",
            icon: "shopping-cart",
            items: STORES,
        },
        {
            title: "Budget",
            icon: "euro",
            items: ["< 30€", "30€ - 60€", "60€ - 100€", "100€+"],
        },
        {
            title: "Progression",
            icon: "percent",
            items: ["En cours", "Presque fini", "Terminé"],
        },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name="filter-alt" size={24} color={Colors.text} />
                <TextApp style={GlobalStyles.h2}>Filtres</TextApp>
            </View>

            <View style={GlobalStyles.ph}>
                {sections.map((section, index) => (
                    <View key={index}>
                        <View style={styles.titleContainer}>
                            <Icon name={section.icon} size={16} color={Colors.text} style={styles.titleIcon} />
                            <TextApp style={styles.title}>{section.title}</TextApp>
                        </View>

                        <View style={styles.btns}>
                            {section.items.map((item, i) => (
                                <TouchableOpacity key={i} style={styles.btn}>
                                    <TextApp style={styles.textBtn}>{item}</TextApp>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingBottom: 30,
    },
    header: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 5,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
    },
    titleContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "baseline",
        paddingTop: 10
    },
    titleIcon: {
        marginRight: 5,
    },
    title: {
        fontSize: 16,
        fontFamily: Typography.medium,
        marginTop: 15,
        marginBottom: 5,
    },
    btns: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 10,
    },
    btn: {
        borderWidth: 1,
        borderColor: Colors.text,
        padding: 5,
        borderRadius: 7,
    },
    textBtn: {
        fontSize: 14,
    },
});
