import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import ButtonCustom from "../../../shared/components/ButtonCustom";
import { logout } from "../../auth/services/auth.service";
import { useMe, useUpdateMe } from "../hooks/useUser";
import TextApp from "../../../shared/components/TextApp";
import Input from "../../../shared/components/Input";
import { GlobalStyles } from "../../../assets";
import dayjs from "dayjs";
import { UserState } from "../types/user.types";

export const UserScreen = () => {
    const { data: user, isLoading, error } = useMe();
    const updateMe = useUpdateMe();

    const [form, setForm] = useState<UserState>();

    useEffect(() => {
        if (user) {
            setForm({
                email: user.email ?? "",
                userName: user.userName ?? "",
                firstName: user.firstName ?? "",
                lastName: user.lastName ?? "",
                profilePicture: user.profilePicture ?? "",
                dateOfBirth: user.dateOfBirth ?? "",
            });
        }
    }, [user]);

    const handleDisconnect = () => {
        logout();
    };

    const handleValidate = () => {
        if (!form) return;
        const data = updateMe.mutate(form);
        console.log("🚀 ~ handleValidate ~ data:", data)
    };

    return (
        <View style={{ ...GlobalStyles.ph, ...styles.container }}>
            {!isLoading && (
                <>
                    <TextApp>{user.email}</TextApp>
                    <Input
                        value={form?.email}
                        autoCorrect={false}
                        placeholder="Mon email"
                        onChangeText={(val) => setForm({ ...form, email: val })}
                    />
                    <Input
                        value={form?.userName ?? ""}
                        placeholder="Mon pseudo"
                        onChangeText={(val) =>
                            setForm({ ...form, userName: val })
                        }
                    />
                    <Input
                        value={form?.firstName ?? ""}
                        placeholder="Mon prénom"
                        onChangeText={(val) =>
                            setForm({ ...form, firstName: val })
                        }
                    />
                    <Input
                        value={form?.lastName ?? ""}
                        placeholder="Mon nom"
                        onChangeText={(val) =>
                            setForm({ ...form, lastName: val })
                        }
                    />
                    <Input
                        value={form?.profilePicture ?? ""}
                        placeholder="Ma photo"
                        onChangeText={(val) =>
                            setForm({ ...form, profilePicture: val })
                        }
                    />
                    {/* <Input
                        value={form?.dateOfBirth?.toDateString() ?? ""}
                        placeholder="Ma date de naissance"
                         onChangeText={(val) => setForm({...form, toDateString: val})}
                    /> */}
                    <TextApp>{user.createdAt}</TextApp>
                </>
            )}

            <ButtonCustom
                title="Valider"
                onPress={handleValidate}
                type="color"
            />
            <ButtonCustom
                title="Se deconnecter"
                onPress={handleDisconnect}
                type="color"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
