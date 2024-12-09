import { View, Image, Pressable, StyleSheet, ImageSourcePropType } from "react-native";
import menuImg from "@/assets/menu.png";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export enum HeaderComponentItem {
    MENU = "menu",
}

type Props = {
    componentList?: HeaderComponentItem[];
};

type HeaderComponentsMapItem = {
    // type: 'image',
    source: ImageSourcePropType
}

type HeaderComponentsMap = Partial<Record<HeaderComponentItem, HeaderComponentsMapItem>>;

const HeaderComponentList = (props: Props) => {
    const navigation = useNavigation();

    const headerComponentsMap: HeaderComponentsMap = React.useMemo(() => {
        return {
            [HeaderComponentItem.MENU]: {
                source: menuImg
            },
        };
    }, []);

    return (
        <View>
            {props.componentList?.map(item => {
                if (!headerComponentsMap[item]) return null;
                return (
                    <Pressable
                        key={item}
                        onPress={() => {
                            // TODO: 改成侧边导航
                            navigation.navigate("Profile", {
                                user: "jane",
                            });
                        }}
                    >
                        <Image style={styles.imageItem} source={headerComponentsMap[item].source}></Image>
                    </Pressable>
                )
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    imageItem: {
        width: 22,
        height: 22
    }
})

export default HeaderComponentList;
