import { memo } from "react";
import { StyleSheet, View } from "react-native";


const HomeScreen = memo(() => {
    return (
        <View style={styles.container}>

        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    row: {
        flexDirection: 'row',
        gap: 10,
    },
});

export default HomeScreen;