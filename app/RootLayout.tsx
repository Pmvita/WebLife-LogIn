// RootLayout.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import Screens
import Onboarding from '../app/Auth/Onboarding';
import SignIn from '../app/Auth/SignIn';
import SignUp from '../app/Auth/SignUp';
import TabLayout from '../app/Layout/TabLayout';

const Stack = createNativeStackNavigator();

const RootLayout: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Authentication Screens */}
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />

        {/* Main Tab Screens */}
        <Stack.Screen name="Main" component={TabLayout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootLayout;