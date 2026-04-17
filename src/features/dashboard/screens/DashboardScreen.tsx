import { useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import ScreenContainer from "../../../shared/components/ScreenContainer";
import { Colors, GlobalStyles } from "../../../assets";
import { ListItem } from "../types/dashboard.types";
import { Header } from "../components/Header";
import { List } from "../components/List";
import { Filters } from "../components/Filters";
import { BottomSheetContainer } from "../../../shared/components/BottomSheetContainer";
import { FiltersForm } from "../components/FiltersForm";
import { BottomSheetRef } from "../../../shared/types/types";
import { SortForm } from "../components/SortForm";
import { SearchForm } from "../components/SearchForm";

export const DashboardScreen = () => {
    const list: ListItem[] = [
        {
            id: 1,
            title: "Ma liste de la semaine",
            date: "Lun 15 avril 2026 - Dim 21 avril 2026",
            productsCurrent: 12,
            productsTotal: 18,
            budgetEstimated: 62.4,
            shop: "Carrefour",
            progress: 66,
            sharedProfiles: [
                { id: 1, name: "Alex", avatar: "https://i.pravatar.cc/300?img=1" },
                { id: 2, name: "Sophie", avatar: "https://i.pravatar.cc/300?img=2" },
                { id: 3, name: "Mehdi", avatar: "https://i.pravatar.cc/300?img=3" },
            ],
        },
        {
            id: 2,
            title: "Courses famille",
            date: "Lun 22 avril 2026 - Dim 28 avril 2026",
            productsCurrent: 8,
            productsTotal: 15,
            budgetEstimated: 48.9,
            shop: "Leclerc",
            sharedProfiles: [
                { id: 4, name: "Laura", avatar: "https://i.pravatar.cc/300?img=4" },
                { id: 5, name: "Thomas", avatar: "https://i.pravatar.cc/300?img=5" },
                { id: 6, name: "Emma", avatar: "https://i.pravatar.cc/300?img=6" },
                { id: 7, name: "Lucas", avatar: "https://i.pravatar.cc/300?img=7" },
            ],
            progress: 53,
        },
        {
            id: 3,
            title: "Liste rapide",
            date: "Lun 29 avril 2026 - Dim 5 mai 2026",
            productsCurrent: 5,
            productsTotal: 10,
            budgetEstimated: 32.2,
            shop: "Intermarché",
            progress: 50,
            sharedProfiles: [
                { id: 8, name: "Inès", avatar: "https://i.pravatar.cc/300?img=8" },
                { id: 9, name: "Hugo", avatar: "https://i.pravatar.cc/300?img=9" },
            ],
        },
        {
            id: 4,
            title: "Courses semaine sportive",
            date: "Lun 6 mai 2026 - Dim 12 mai 2026",
            productsCurrent: 14,
            productsTotal: 20,
            budgetEstimated: 75.0,
            shop: "Carrefour",
            progress: 70,
            sharedProfiles: [
                { id: 10, name: "Chloé", avatar: "https://i.pravatar.cc/300?img=10" },
                { id: 11, name: "Nina", avatar: "https://i.pravatar.cc/300?img=11" },
                { id: 12, name: "Antoine", avatar: "https://i.pravatar.cc/300?img=12" },
                { id: 13, name: "Sarah", avatar: "https://i.pravatar.cc/300?img=13" },
                { id: 14, name: "Yanis", avatar: "https://i.pravatar.cc/300?img=14" },
            ],
        },
        {
            id: 5,
            title: "Repas équilibrés",
            date: "Lun 13 mai 2026 - Dim 19 mai 2026",
            productsCurrent: 10,
            productsTotal: 16,
            budgetEstimated: 55.6,
            shop: "Auchan",
            progress: 62,
        },
        {
            id: 6,
            title: "Courses express",
            date: "Lun 20 mai 2026 - Dim 26 mai 2026",
            productsCurrent: 3,
            productsTotal: 8,
            budgetEstimated: 21.9,
            shop: "Carrefour",
            progress: 38,
        },
        {
            id: 7,
            title: "Stock cuisine",
            date: "Lun 27 mai 2026 - Dim 2 juin 2026",
            productsCurrent: 16,
            productsTotal: 22,
            budgetEstimated: 88.3,
            shop: "Leclerc",
            progress: 73,
            sharedProfiles: [
                { id: 2, name: "Sophie", avatar: "https://i.pravatar.cc/300?img=2" },
                { id: 5, name: "Thomas", avatar: "https://i.pravatar.cc/300?img=5" },
                { id: 9, name: "Hugo", avatar: "https://i.pravatar.cc/300?img=9" },
            ],
        },
        {
            id: 8,
            title: "Semaine légère",
            date: "Lun 3 juin 2026 - Dim 9 juin 2026",
            productsCurrent: 6,
            productsTotal: 12,
            budgetEstimated: 39.5,
            shop: "Intermarché",
            progress: 50,
        },
        {
            id: 9,
            title: "Meal prep",
            date: "Lun 10 juin 2026 - Dim 16 juin 2026",
            productsCurrent: 11,
            productsTotal: 14,
            budgetEstimated: 61.8,
            shop: "Carrefour",
            progress: 78,
            sharedProfiles: [
                { id: 1, name: "Alex", avatar: "https://i.pravatar.cc/300?img=1" },
                { id: 6, name: "Emma", avatar: "https://i.pravatar.cc/300?img=6" },
            ],
        },
        {
            id: 10,
            title: "Courses bio",
            date: "Lun 17 juin 2026 - Dim 23 juin 2026",
            productsCurrent: 7,
            productsTotal: 13,
            budgetEstimated: 52.1,
            shop: "Bio c’Bon",
            progress: 54,
            sharedProfiles: [
                { id: 3, name: "Mehdi", avatar: "https://i.pravatar.cc/300?img=3" },
                { id: 7, name: "Lucas", avatar: "https://i.pravatar.cc/300?img=7" },
                { id: 12, name: "Antoine", avatar: "https://i.pravatar.cc/300?img=12" },
            ],
        },
        {
            id: 11,
            title: "Semaine famille",
            date: "Lun 24 juin 2026 - Dim 30 juin 2026",
            productsCurrent: 15,
            productsTotal: 21,
            budgetEstimated: 92.7,
            shop: "Auchan",
            progress: 71,
        },
        {
            id: 12,
            title: "Dernières courses",
            date: "Lun 1 juillet 2026 - Dim 7 juillet 2026",
            productsCurrent: 9,
            productsTotal: 12,
            budgetEstimated: 44.3,
            shop: "Leclerc",
            progress: 75,
        },
    ];

    const bottomSheetRef = useRef<BottomSheetRef>(null);

    const [totalBudget, setTotalBudget] = useState<number>(0);
    const [totalList, setTotalList] = useState<number>(0);

    useEffect(() => {
        const newTotalBudget = list.reduce((sum, item) => sum + item.budgetEstimated, 0);
        setTotalBudget(newTotalBudget);
        setTotalList(list.length);
    }, []);

    const handlePressFilters = () => {

        console.log('handlePressFilters')

        bottomSheetRef.current?.snapToIndex(0);
    };

    return (
        <>
            <ScreenContainer safeAreaTop={false} bgColor={Colors.background}>
                <View>
                    <Header totalBudget={totalBudget} totalList={totalList} />
                    <View style={{ ...GlobalStyles.ph, ...styles.filtersSort }}>
                        <Filters handlePress={handlePressFilters} />
                        <SortForm onValueChange={(filter) => console.log('>>>> ', filter)}/>
                    </View>
                    <SearchForm />
                    <List list={list} />
                </View>
            </ScreenContainer>

            <BottomSheetContainer ref={bottomSheetRef} bgColor={Colors.white}>
                <FiltersForm />
            </BottomSheetContainer>
        </>
    );
};

const styles = StyleSheet.create({
    filtersSort: {
        flexDirection: "row",
        alignItems: 'center',
        gap: 5
    },
});
