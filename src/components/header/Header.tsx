import { StyleSheet, View } from "react-native";
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
            return <HeaderSearchInput></HeaderSearchInput>
        }
    }

    return (
        <View style={styles.container}>
            <HeaderComponentList componentList={props.lefeComponents}></HeaderComponentList>
            <View style={{flex: 1}}>
                {renderHeaderCenter()}
            </View>
            <HeaderComponentList componentList={props.rightComponents}></HeaderComponentList>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 8,
    }
})

export default Header;