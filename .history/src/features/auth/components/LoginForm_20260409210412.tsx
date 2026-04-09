import { StyleSheet, View } from "react-native";
import Input from "../../../shared/components/Input";
import ButtonCustom from "../../../shared/components/ButtonCustom";

const LoginForm = () => {
    return (
        <View>
            <View>
                <Input placeholder="Adresse E-mail" style={styles.input} />
                <Input placeholder="Mot de passe" style={styles.input} />
                <ButtonCustom title="Mot de passe oublié" onPress={() => console.log("Mot de passe oublié")} />
            </View>
            <View>
                <ButtonCustom title="Se connecter" type="linear" onPress={() => console.log("Se connecter")} />
                <ButtonCustom title="S'inscrire" onPress={() => console.log("S'inscrire")} />
            </View>
        </View>
    );
};

export default LoginForm;

const styles = StyleSheet.create({
    input: {
        marginBottom: 20,
    },
});
