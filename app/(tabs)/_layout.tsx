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
        }}
      />
      <Tabs.Screen
        name="yesterday"
        options={{
          title: "Yesterday",
        }}
      />
      <Tabs.Screen
        name="week"
        options={{
          title: "Week",
        }}
      />
      <Tabs.Screen
        name="month"
        options={{
          title: "Month",
        }}
      />
    </Tabs>
  );
}
