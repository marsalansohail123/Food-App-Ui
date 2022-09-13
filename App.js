import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import COLORS from './src/consts/colors';
import DetailedScreen from './src/views/screens/DetailedScreen';
import BottomNavigation from './src/views/navigation/BottomNavigation';
import OnBoardScreen from './src/views/screens/OnBoardScreen';
import HomeScreen from './src/views/screens/HomeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BoardScreen" component={OnBoardScreen} />
        <Stack.Screen name="Home" component={BottomNavigation} />
        <Stack.Screen name="DetailScreen" component={DetailedScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;