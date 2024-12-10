import { useTheme } from "@/theme";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const HeaderSearchInput = () => {
    const { themeData } = useTheme();

    const [keyword, setKeyword] = useState("");
    return (
        <View style={styles.container}>
            <TextInput
                style={{
                    backgroundColor: themeData.colors.inputBackgroud,
                    ...styles.textInputWrap,
                }}
                inputMode="none"
                caretHidden={false}
                value={keyword}
                onChangeText={setKeyword}
            //   onFocus={}
            ></TextInput>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textInputWrap: {
        borderRadius: 16,
        height: 32,
        marginHorizontal: 8,
        paddingHorizontal: 12,
    },
});

export default HeaderSearchInput;
