import { StyleSheet, Image, View } from "react-native";
import React from "react";
import { CardFooterProps } from "../types/dashboard.types";

export const CardFooter = ({ sharedProfiles }: CardFooterProps) => {
    return (
        <View style={styles.footer}>
            {sharedProfiles &&
                sharedProfiles.map((sharedProfile, key) => (
                    <View style={{ ...styles.profilShare, marginLeft: key === 0 ? 0 : -12 }} key={key}>
                        <Image source={{ uri: sharedProfile.avatar }} resizeMode="cover" style={styles.img} />
                    </View>
                ))}
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    profilShare: {
        height: 30,
        width: 30,
        borderRadius: 50,
        overflow: "hidden",
    },
    img: {
        height: "100%",
        width: "100%",
    },
});
