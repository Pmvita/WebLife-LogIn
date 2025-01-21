// TabLayout.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import Screens
import HomeScreen from '../(tabs)/Home/HomeScreen';


const Tab = createBottomTabNavigator();

const TabLayout: React.FC = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
    );
};

export default TabLayout;