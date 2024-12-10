import { View, Image, Pressable, StyleSheet, ImageSourcePropType } from "react-native";
import menuImg from "@/assets/menu.png";
import React, { memo } from "react";
import { useNavigation } from "@react-navigation/native";
import { HeaderButton } from "@react-navigation/elements";
import { useTheme } from "@/theme";

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

const HeaderComponentList = memo((props: Props) => {
    const { themeData } = useTheme();

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
                    <HeaderButton
                        key={item}
                        onPress={() => {
                            // TODO: 改成侧边导航
                            navigation.navigate("Profile", {
                                user: "jane",
                            });
                        }}
                    >
                        <Image tintColor={themeData.colors.primary} style={styles.imageItem} source={headerComponentsMap[item].source}></Image>
                    </HeaderButton>
                )
            })}
        </View>
    );
});

const styles = StyleSheet.create({
    imageItem: {
        width: 26,
        height: 26
    }
})

export default HeaderComponentList;
