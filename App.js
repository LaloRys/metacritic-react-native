import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
  Pressable,
} from "react-native";
import icon from "./assets/icon.png";
import { useState } from "react";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Componente especial de expo para mostrar el estado del dispositivo */}
      <StatusBar style="light" />

      {/* <Image
        blurRadius={4}
        source={icon}
        style={{ width: 100, height: 100, resizeMode: 'center' }}
      />
      <Image
        fadeDuration={600}
        source={icon}
        style={{ width: 200, height: 100, resizeMode: 'contain' }}
      />
      */}
      <Image
        source={icon}
        style={{ width: 200, height: 100, resizeMode: "stretch" }}
      />

      <Image
        // blurRadius={4}
        source={{
          uri: "https://www.metacritic.com/a/img/catalog/provider/6/12/6-1-767900-52.jpg",
        }}
        style={{ width: 200, height: 200, resizeMode: "contain" }}
      />
      <Text style={{ color: "white" }}>
        Open up App.js to start working on your app!
      </Text>
      {/* Boton nativo no se puede estilar */}
      <Button color="" title="Press me" onPress={() => alert("Hello")} />

      <TouchableHighlight
        // Color que tendra detras
        underlayColor={"#29f"}
        style={{
          backgroundColor: "#fff",
          padding: 10,
          borderRadius: 10,
          marginTop: 10,
          width: 100,
          height: 100,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => alert("Hello")}
      >
        <Text>Boton personalizado</Text>
      </TouchableHighlight>

      <Pressable
        onPress={() => alert("Hola desde pressable")}
        style={{
          backgroundColor: "#fff",
          padding: 10,
          marginTop: 10,
          width: 100,
          height: 100,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 100,
        }}
      >
        <Text style={{ color: "black" }}>Pressable</Text>
      </Pressable>

      <Pressable
        onPress={() => {}}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
          },
          styles.wrapperCustom,
        ]}
      >
        {({ pressed }) => (
          <Text
            style={{
              fontSize: pressed ? 32 : 16,
              color: pressed ? "red" : "black",
            }}
          >
            {pressed ? "Pressed!" : "Press Me"}
          </Text>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
