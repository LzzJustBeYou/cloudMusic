import { useTheme } from "@/theme";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native"



const HeaderSearchInput = () => {
    const { themeData } = useTheme();

    const [keyword, setKeyword] = useState('');
    return (
        <TextInput style={{ backgroundColor: themeData.colors.inputBackgroud, ...styles.textInputWrap }} value={keyword} onChangeText={setKeyword}></TextInput>
    )
}

const styles = StyleSheet.create({
    textInputWrap: {
        borderRadius: 12,
        height: 24,
        marginHorizontal: 16,
        paddingHorizontal: 12,
    }
})

export default HeaderSearchInput;