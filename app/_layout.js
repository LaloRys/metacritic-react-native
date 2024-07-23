import { Link, Stack } from "expo-router";
import React from "react";
import { Pressable, View } from "react-native";
import { Logo } from "../components/Logo";
import { CircleInfoIcon } from "../components/Icons";
import { styled } from "nativewind";
import { StatusBar } from "expo-status-bar";

//styled podemos usar el active <StyledPressable className={`active:opacity-30`}>
const StyledPressable = styled(Pressable);

export default function Layout() {
  return (
    <View className="flex-1">
      <StatusBar style="light" />
      {/*  Stack es una pila de navegacion || Estan ensimadas las paginas un decir*/}
      <Stack
        screenOptions={{
          // headerShown: false,
          headerStyle: {
            backgroundColor: "black",
          },
          headerTitle: "",
          headerLeft: () => <Logo />,
          headerRight: () => (
            <Link asChild href="/about" className="text-blue-400 text-xl">
              <StyledPressable className={`active:opacity-30`}>
                <CircleInfoIcon />
              </StyledPressable>
            </Link>
          ),
        }}
      />

      {/* Slot toma el index.js */}
      {/* <Slot /> */}
    </View>
  );
}
