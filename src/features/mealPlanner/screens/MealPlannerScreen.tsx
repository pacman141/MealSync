import { StyleSheet, Text, View } from "react-native";
import ButtonCustom from "../../../shared/components/ButtonCustom";

export const MealPlannerScreen = () => {
    const handleGenerateList = () => {
        console.log("handleGenerateList");
    };

    return (
        <View>
            <Text>MealPlannerScreen</Text>

            <ButtonCustom title="Générer ma liste" type="linear" onPress={handleGenerateList} />
        </View>
    );
};

const styles = StyleSheet.create({});
