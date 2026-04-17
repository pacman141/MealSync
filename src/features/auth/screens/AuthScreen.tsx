// AuthScreen.tsx
import { StyleSheet, View } from "react-native";
import { useEffect, useRef, useState } from "react";
import ScreenContainer from "../../../shared/components/ScreenContainer";
import { FormContainer } from "../components";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Colors, GlobalStyles } from "../../../assets";
import { Typography } from "../../../assets/fonts";
import TextApp from "../../../shared/components/TextApp";
import ButtonCustom from "../../../shared/components/ButtonCustom";
import { NamesForm } from "../types/auth.types";
import { BottomSheetContainer } from "../../../shared/components/BottomSheetContainer";
import { BottomSheetRef } from "../../../shared/types/types";

export const AuthScreen = () => {
    const bottomSheetRef = useRef<BottomSheetRef>(null);
    const [formShow, setFormShow] = useState<NamesForm>(null);

    const handlePress = (formName: NamesForm) => setFormShow(formName);

    useEffect(() => {
        if (formShow) {
            requestAnimationFrame(() => {
                bottomSheetRef.current?.snapToIndex(0);
            });
        }
    }, [formShow]);

    return (
        <>
            <ScreenContainer safeAreaBottom={false}>
                {/* Logo */}
                <View style={styles.logo}>
                    <Icon name="dining" size={100} color={Colors.white} />
                    <TextApp style={styles.logoText}>Meal Planner</TextApp>
                    <TextApp style={styles.bgText}>Bienvenue</TextApp>
                </View>

                <View style={{ ...GlobalStyles.ph, ...styles.btnsContainer }}>
                    <ButtonCustom title="Se connecter" type="color" onPress={() => handlePress("login")} />
                    <ButtonCustom title="Créer un compte" type="light" onPress={() => handlePress("register")} styleButton={styles.btnRegister} />
                    <ButtonCustom title="Mot de passe oublié" onPress={() => handlePress("forgotPassword")} styleButton={styles.btnForgotPassword} />
                </View>
            </ScreenContainer>

            {/* Form */}
            <BottomSheetContainer ref={bottomSheetRef}>
                <FormContainer formShow={formShow} onClickBottomSheet={(val) => handlePress(val)} />
            </BottomSheetContainer>
        </>
    );
};

const styles = StyleSheet.create({
    logo: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    logoText: {
        color: "#fff",
        fontSize: 20,
        textTransform: "uppercase",
        fontFamily: Typography.bold,
    },
    bgText: {
        color: "#fff",
        fontSize: 18,
        marginTop: 20,
        fontFamily: Typography.regular,
    },
    btnsContainer: {
        flex: 1,
        justifyContent: "center",
    },
    btnRegister: {
        alignItems: "center",
        marginVertical: 10,
    },
    btnForgotPassword: {
        alignItems: "center",
        marginTop: 10,
    },
});
