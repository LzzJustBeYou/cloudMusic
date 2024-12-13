import { View, Image, ImageSourcePropType } from "react-native";


const TabBarIcon = ({ focused, color, size, source }: {
    focused: boolean;
    color: string;
    size: number;
    source: ImageSourcePropType
}) => {
    return (
        <View
            style={{
                backgroundColor: focused ? color : undefined,
                borderRadius: 50,
                padding: 3,
            }}
        >
            <Image
                source={source}
                tintColor={focused ? '#ffffff' : undefined}
                style={{
                    width: size / 1.3,
                    height: size / 1.3,
                }}
            />
        </View>
    )
}

export default TabBarIcon;