import { StyleSheet, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Colors } from "../../../assets";
import { SortFormProps } from "../types/shoppingList.types";

export const SortForm = ({ onValueChange }: SortFormProps) => {
    return (
        <View style={styles.container}>
            <RNPickerSelect
                //useNativeAndroidPickerStyle={false}
                placeholder={{ label: "Trier par" }}
                style={{ inputAndroid: styles.pickerSelect }}
                onValueChange={(value) => onValueChange(value)}
                items={[
                    { label: "Par date", value: "date" },
                    { label: "Par magasin", value: "shop" },
                    { label: "Par prix", value: "budget" },
                    { label: "Par complétion", value: "progression" },
                ]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
        flex: 1,
        height: 40,
        borderRadius: 5,
        overflow: "hidden",
        justifyContent: "center",
        backgroundColor: Colors.mainColor,
    },
    pickerSelect: {
        width: "100%",
        color: Colors.white,
    },
});
