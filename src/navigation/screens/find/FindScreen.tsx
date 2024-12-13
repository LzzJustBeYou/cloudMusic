import { memo } from "react";
import { View, Text } from "react-native";


const FindScreen = memo(() => {
    console.log('find render');
    
    return (
        <View>
            <Text>Find</Text>
        </View>
    )
});

export { FindScreen };