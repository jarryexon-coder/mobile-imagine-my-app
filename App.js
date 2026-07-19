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
import CaseStudiesScreen from './src/screens/CaseStudiesScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Colors
const COLORS = {
  primary: '#1a2332',      // Navy Blue
  secondary: '#d4a853',    // Gold
  background: '#f8f9fa',   // Light Gray
  textPrimary: '#111827',  // Dark Navy
  textSecondary: '#4b5563', // Slate
  card: '#ffffff',         // White
  accent: '#c9a84c',       // Gold Accent
};

// Portfolio Stack
function PortfolioStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: '#ffffff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="PortfolioList" component={PortfolioScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CaseStudy" component={CaseStudyScreen} options={{ title: 'Case Study' }} />
    </Stack.Navigator>
  );
}

// Case Studies Stack
function CaseStudiesStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: '#ffffff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="CaseStudiesList" component={CaseStudiesScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CaseStudy" component={CaseStudyScreen} options={{ title: 'Case Study' }} />
    </Stack.Navigator>
  );
}

// Consultation Stack
function ConsultationStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: '#ffffff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="ConsultationForm" component={ConsultationScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ThankYou" component={ThankYouScreen} options={{ title: 'Thank You' }} />
    </Stack.Navigator>
  );
}

// Main Tab Navigator
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const icons = {
            Home: focused ? 'home' : 'home-outline',
            Portfolio: focused ? 'folder' : 'folder-outline',
            CaseStudies: focused ? 'book' : 'book-outline',
            Consultation: focused ? 'chatbubble' : 'chatbubble-outline',
          };
          return <Ionicons name={icons[route.name]} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.secondary,
        tabBarInactiveTintColor: '#94a3b8',
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: '#ffffff',
        headerTitleStyle: { fontWeight: 'bold' },
        tabBarStyle: {
          paddingBottom: 5,
          height: 60,
          backgroundColor: COLORS.primary,
          borderTopColor: COLORS.secondary,
          borderTopWidth: 1,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'ImagineMyApps' }} />
      <Tab.Screen name="Portfolio" component={PortfolioStack} options={{ title: 'Portfolio', headerShown: false }} />
      <Tab.Screen name="CaseStudies" component={CaseStudiesStack} options={{ title: 'Case Studies', headerShown: false }} />
      <Tab.Screen name="Consultation" component={ConsultationStack} options={{ title: 'Consultation', headerShown: false }} />
    </Tab.Navigator>
  );
}

// Main App
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: COLORS.primary },
          headerTintColor: '#ffffff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Admin" component={AdminScreen} options={{ title: 'Admin Dashboard' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
