import { StyleSheet, Pressable, View, Text } from "react-native";
import { globalStyles } from "../styles/gobalStyles";
import { Link, router, Slot, Tabs } from "expo-router";
import { COLORS } from "../styles/constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { UserProvider } from "../context/UserContext";
// import { useUser } from "../context/UserContext";

export default function RootLayout() {
  // const { user } = useUser();

  return (
    <UserProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: COLORS.primary,
          tabBarStyle: {
            backgroundColor: COLORS.background,
          },
        }}
      >
        <Tabs.Screen
          name="(home)"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => {
              return <Entypo name="home" size={24} color={color} />;
            },
          }}
        />
        {/* {user ? ( */}
        <Tabs.Screen
          name="(myProfile)"
          options={{
            title: "My Profile",
            tabBarIcon: ({ color }) => {
              return <Entypo name="user" size={24} color={color} />;
            },
          }}
        />
        {/* ) : null} */}
        <Tabs.Screen
          name="(contact)"
          options={{
            title: "Contact",
            tabBarIcon: ({ color }) => {
              return <Entypo name="old-phone" size={24} color={color} />;
            },
          }}
        />
      </Tabs>
    </UserProvider>
  );
}
