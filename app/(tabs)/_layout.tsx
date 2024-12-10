import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
type HomePageProps = {};

export default function HomePage({}: HomePageProps) {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="options/index"
          options={{
            title: "Options",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="options" color={color} size={size} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
