import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, Text, View, Image, TextInput, ScrollView, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import COLORS from '../../consts/colors'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Categories from '../../consts/categories';
import food from '../../consts/foodApi';

const { width } = Dimensions.get("screen");
const cardWidth = width / 2 - 20;

const HomeScreen = ({ navigation }) => {

    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

    const ListCategories = () => {
        return (
            <ScrollView
                horizontal
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.categoriesListContainer}
            >
                {Categories.map((category, index) => (
                    <TouchableOpacity key={index} activeOpacity={0.8} onPress={() => setSelectedCategoryIndex(index)}>
                        <View
                            style={{
                                ...styles.categoryBtn,
                                backgroundColor:
                                    selectedCategoryIndex == index ? COLORS.primary : COLORS.secondary,
                            }}>
                            <View style={styles.categoryBtnImage}>
                                <Image
                                    source={category.image}
                                    style={{ height: 40, width: 40, resizeMode: 'cover' }}
                                />
                            </View>
                            <Text
                                style={{
                                    fontSize: 15,
                                    fontWeight: 'bold',
                                    marginLeft: 10,
                                    color: selectedCategoryIndex == index ? COLORS.white : COLORS.primary,
                                }}
                            >
                                {category.name}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        )
    }

    const Card = ({ foods }) => {
        return (
            <View style={{ ...styles.Card }}>
                <TouchableOpacity
                    underlayColor={COLORS.white}
                    activeOpacity={0.9}
                    onPress={() => navigation.navigate('DetailScreen', foods)}>
                    <View style={{ alignItems: 'center', top: 10 }}>
                        <Image source={foods.image} style={{ height: 120, width: 120 }} />
                    </View>
                    <View style={{ marginHorizontal: 20, marginTop: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', }}>{foods.name}</Text>
                        <Text style={{ fontSize: 14, color: COLORS.grey }}>{foods.ingredients}</Text>
                    </View>
                    <View
                        style={{
                            marginTop: 10,
                            marginHorizontal: 20,
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>${foods.price}</Text>
                        <View style={styles.addToCart}>
                            <Icon name='add' size={20} color={COLORS.white} />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={styles.header}>
                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 28, }}>Hello,</Text>
                        <Text style={{ fontSize: 28, fontWeight: 'bold', marginLeft: 10, color: COLORS.primary }}>Arsalan</Text>
                    </View>
                    <Text style={{ marginTop: 5, fontSize: 21, color: COLORS.grey }}>What do you wan't today?</Text>
                </View>
                <Image source={require("../../assets/hero.jpg")} style={{ height: 60, width: 60, borderRadius: 30, marginTop: 5 }} />
            </View>
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
            <View>
                <ListCategories />
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                numColumns={2}
                data={food}
                renderItem={({ item }) => <Card foods={item} />}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    inputContainer: {
        flex: 1,
        height: 50,
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: COLORS.light,
        alignItems: 'center',
        paddingHorizontal: 20
    },
    categoriesListContainer: {
        paddingVertical: 30,
        alignItems: 'center',
        paddingHorizontal: 20
    },
    categoryBtn: {
        height: 45,
        width: 120,
        marginRight: 7,
        borderRadius: 30,
        alignItems: 'center',
        paddingHorizontal: 5,
        flexDirection: 'row'
    },
    categoryBtnImage: {
        height: 35,
        width: 35,
        backgroundColor: COLORS.white,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: "center"
    },
    Card: {
        height: 250,
        width: cardWidth,
        marginHorizontal: 10,
        marginBottom: 30,
        marginTop: 10,
        borderRadius: 15,
        elevation: 50,
        backgroundColor: COLORS.white
    },
    addToCart: {
        height: 30,
        width: 30,
        borderRadius: 20,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default HomeScreen