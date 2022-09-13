import React from 'react'
import { SafeAreaView, Text, View, StyleSheet, ScrollView, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import { SecondaryButton } from '../components/Button';

const DetailedScreen = ({ navigation, route }) => {
    const item = route.params;
    console.log(item)
    return (
        <>
            <SafeAreaView style={{ backgroundColor: COLORS.white }}>
                <View style={styles.header}>
                    <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Details</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 280
                        }}
                    >
                        <Image source={item.image} style={{ width: 220, height: 220 }} />
                    </View>
                    <View style={styles.detail}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <Text style={{
                                fontSize: 25,
                                fontWeight: 'bold',
                                color: COLORS.white
                            }}>
                                {item.name}
                            </Text>
                        </View>
                        <Text style={styles.detailsText}>{item.description}</Text>
                        <View style={{ marginTop: 40, marginBottom: 40 }}>
                            <SecondaryButton title="Add To Cart" />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20
    },
    detail: {
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom: 60,
        backgroundColor: COLORS.primary,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    },
    detailsText: {
        marginTop: 10,
        lineHeight: 22,
        fontSize: 15,
        color: COLORS.white,
        textAlign: 'justify'
    }
})

export default DetailedScreen;