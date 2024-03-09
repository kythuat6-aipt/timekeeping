import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "./src/screens/home"
import LoginScreen from "./src/screens/login"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AIPT_TOKEN } from "./src/utils/constants/config"
import { useEffect, useState } from "react"

const Stack = createNativeStackNavigator()

const App = () => {
  const handleInitialRouteName = async () => {
    const token = await AsyncStorage.getItem(AIPT_TOKEN)
      .then((data) => data)
      .catch(() => null)

    if (token) {
      // navigation.navigate('home')
    } else {
      // navigation.navigate('home')
    }
  }

  useEffect(() => {
    handleInitialRouteName()
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
