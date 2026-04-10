// AuthScreen.tsx
import React, { useCallback, useMemo, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import ScreenContainer from "../../../shared/components/ScreenContainer";
import { FormContainer } from "../components";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Colors } from "../../../assets";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

const AuthScreen = () => {
    const bottomSheetRef = useRef<BottomSheet>(null);

    const handleSheetChanges = useCallback((index: number) => {
        console.log("🚀 ~ AuthScreen ~ index:", index);
    }, []);

    return (
        <ScreenContainer safeAreaBottom={false}>
            {/* Logo */}
            <View style={styles.logo}>
                <Icon name="dining" size={100} color={Colors.white} />
                <Text style={styles.logoText}>Meal Planner</Text>
                <Text style={styles.bgText}>Bienvenue</Text>
            </View>

            {/* Slide form */}
            <BottomSheet ref={bottomSheetRef} onChange={handleSheetChanges}>
                <BottomSheetView>
                    <Text>Awesome 🎉</Text>
                </BottomSheetView>
            </BottomSheet>
            <FormContainer />
        </ScreenContainer>
    );
};

export default AuthScreen;

const styles = StyleSheet.create({
    logo: {
        height: "30%",
        alignItems: "center",
        justifyContent: "center",
    },
    logoText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "600",
        textTransform: "uppercase",
    },
    bgText: {
        color: "#fff",
        fontSize: 18,
        marginTop: 20
    },
});
