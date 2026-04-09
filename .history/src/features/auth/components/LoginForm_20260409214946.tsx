import { StyleSheet, View } from "react-native";
import Input from "../../../shared/components/Input";
import ButtonCustom from "../../../shared/components/ButtonCustom";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Colors } from "../../../assets";

const LoginForm = () => {
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.inputGroup}>
                    <Icon name="mail" size={30} color="#000" />
                    <Input placeholder="Adresse E-mail" />
                </View>

                <View>
                    <Icon name="password" size={30} color="#000" />
                    <Input placeholder="Mot de passe" />
                </View>
                <ButtonCustom title="Mot de passe oublié" onPress={() => console.log("Mot de passe oublié")} style={styles.btnForgotPassword} />
            </View>

            <View>
                <ButtonCustom title="Se connecter" type="linear" onPress={() => console.log("Se connecter")} />
                <View>
                    <ButtonCustom title="S'inscrire" onPress={() => console.log("S'inscrire")} />
                </View>
            </View>
        </View>
    );
};

export default LoginForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
    },
    inputGroup: {
        marginBottom: 20,
        backgroundColor: '#fff'
    },

    btnForgotPassword: {
        alignItems: "flex-end",
    },
});
