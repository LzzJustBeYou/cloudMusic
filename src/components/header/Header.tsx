import { SafeAreaView, StyleSheet, View } from "react-native";
import HeaderComponentList, { HeaderComponentItem } from "./HeaderComponentList";
import HeaderSearchInput from "./HeaderSearchInput";

type Props = {
    lefeComponents?: HeaderComponentItem[];
    headerCenter?: 'searchInput';
    rightComponents?: HeaderComponentItem[];
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
                <HeaderComponentList componentList={props.lefeComponents}></HeaderComponentList>
                <View style={{flex: 1 }}>
                    {renderHeaderCenter()}
                </View>
                <HeaderComponentList componentList={props.rightComponents}></HeaderComponentList>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
    }
})

export default Header;