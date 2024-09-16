import { Tabs } from 'expo-router';
import React from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Today",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "chevron-down" : "chevron-down-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="yesterday"
        options={{
          title: "Yesterday",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "chevron-back" : "chevron-back-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
