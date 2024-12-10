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
        borderRadius: 16,
        height: 32,
        marginHorizontal: 8,
        paddingHorizontal: 12,
    }
})

export default HeaderSearchInput;