import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => {
        let iconName: keyof typeof Ionicons.glyphMap;

        if (route.name === 'index') iconName = 'home';
        else if (route.name === 'gallery') iconName = 'images';
        else iconName = 'person';

        return {
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={iconName} size={size} color={color} />
          ),
          tabBarLabel:
            route.name === 'index'
              ? 'Головна'
              : route.name === 'gallery' ? 'Фотогалерея' : 'Профіль',
          headerTitle:
            route.name === 'index'
              ? 'Новини'
              : route.name === 'gallery' ? 'Фотогалерея' : 'Профіль',
          headerTitleAlign: 'center',
        };
      }}
    />
  );
}