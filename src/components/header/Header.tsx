import { SafeAreaView, StyleSheet, View } from "react-native";
import HeaderComponentList, { HeaderComponentItem } from "./HeaderComponentList";
import HeaderSearchInput from "./HeaderSearchInput";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { ParamListBase } from "@react-navigation/native";

type Props = {
    lefeComponents?: HeaderComponentItem[];
    headerCenter?: 'searchInput';
    rightComponents?: HeaderComponentItem[];
    navigation: DrawerNavigationProp<ParamListBase>;
}

const Header = (props: Props) => {

    const renderHeaderCenter = () => {
        if (props.headerCenter === 'searchInput') {
            return (<HeaderSearchInput></HeaderSearchInput>);
        }
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <HeaderComponentList componentList={props.lefeComponents} navigation={props.navigation}></HeaderComponentList>
                {renderHeaderCenter()}
                <HeaderComponentList componentList={props.rightComponents} navigation={props.navigation}></HeaderComponentList>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 8,
    }
})

export default Header;