import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import COLORS from '../../consts/colors';
import { PrimaryButton } from '../components/Button';

const OnBoardScreen = ({ navigation }) => {
    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
                <View style={{ height: 400 }}>
                    <Image
                        style={{
                            width: '100%',
                            resizeMode: 'contain',
                            top: -150,
                        }}
                        source={require('../../assets/onboardImage.png')}
                    />
                </View>
                <View style={styles.textContainer}>
                    <View>
                        <Text style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center' }}>
                            Delicious Food
                        </Text>
                        <Text style={{ marginTop: 20, fontSize: 18, textAlign: 'center', color: COLORS.grey }}>
                            We hope that our food is delicious for you & you will always remember our taste.
                        </Text>
                    </View>
                    <PrimaryButton
                        onPress={() => navigation.navigate('Home')}
                        title="Let's Find Your Food"
                    />
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        flex: 1,
        paddingHorizontal: 30,
        justifyContent: 'space-between',
        paddingBottom: 40,
    }
})

export default OnBoardScreen;