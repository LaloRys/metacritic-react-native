import { Link } from "expo-router";
import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { HomeIcon } from "../components/Icons";
import { Screen } from "../components/Screen";

//Es importante que las rutas exporten por defecto
export default function About() {
  return (
    <Screen>
      <ScrollView>
        {/* asChild para poder pasarle un componente */}
        <Link asChild href="/">
          <Pressable className="self-start">
            {({ pressed }) => (
              <HomeIcon style={{ opacity: pressed ? 0.5 : 1 }} />
            )}
            {/* <Text className="text-blue-400 text-xl mt-24 rounded-xl p-1 bg-slate-800">
              Volver al inicio
            </Text> */}
          </Pressable>
        </Link>
        <Text className="text-white text-2xl">Sobre el proyecto</Text>
        <Text className="text-white mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati,
          beatae! Ex quae expedita earum laborum aspernatur nihil tempore in
          itaque inventore, modi sequi nobis enim vero animi! Velit, repellat
          aspernatur!
        </Text>
        <Text className="text-white mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati,
          beatae! Ex quae expedita earum laborum aspernatur nihil tempore in
          itaque inventore, modi sequi nobis enim vero animi! Velit, repellat
          aspernatur!
        </Text>
        <Text className="text-white mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati,
          beatae! Ex quae expedita earum laborum aspernatur nihil tempore in
          itaque inventore, modi sequi nobis enim vero animi! Velit, repellat
          aspernatur!
        </Text>
      </ScrollView>
    </Screen>
  );
}
