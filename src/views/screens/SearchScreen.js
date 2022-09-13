import React from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';

const SearchScreen = () => {
    return (
        // <Text>SearchScreen</Text>
        <View
            style={{
                marginTop: 40,
                flexDirection: 'row',
                paddingHorizontal: 20
            }}>
            <View style={styles.inputContainer}>
                <Icon name="search" size={28} />
                <TextInput style={{ flex: 1, fontSize: 18 }} placeholder="Search Food" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        height: 50,
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: COLORS.light,
        alignItems: 'center',
        paddingHorizontal: 20
    }
})

export default SearchScreen