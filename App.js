import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './src/screens/HomeScreen';
import PortfolioScreen from './src/screens/PortfolioScreen';
import ConsultationScreen from './src/screens/ConsultationScreen';
import CaseStudyScreen from './src/screens/CaseStudyScreen';
import ThankYouScreen from './src/screens/ThankYouScreen';
import AdminScreen from './src/screens/AdminScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function PortfolioStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#4F46E5' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="PortfolioList" component={PortfolioScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CaseStudy" component={CaseStudyScreen} options={{ title: 'Case Study' }} />
    </Stack.Navigator>
  );
}

function ConsultationStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#4F46E5' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="ConsultationForm" component={ConsultationScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ThankYou" component={ThankYouScreen} options={{ title: 'Thank You' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const icons = {
              Home: focused ? 'home' : 'home-outline',
              Portfolio: focused ? 'folder' : 'folder-outline',
              Consultation: focused ? 'chatbubble' : 'chatbubble-outline',
            };
            return <Ionicons name={icons[route.name]} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#4F46E5',
          tabBarInactiveTintColor: 'gray',
          headerStyle: { backgroundColor: '#4F46E5' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          tabBarStyle: {
            paddingBottom: 5,
            height: 60,
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'ImagineMyApps' }} />
        <Tab.Screen name="Portfolio" component={PortfolioStack} options={{ title: 'Portfolio', headerShown: false }} />
        <Tab.Screen name="Consultation" component={ConsultationStack} options={{ title: 'Consultation', headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
