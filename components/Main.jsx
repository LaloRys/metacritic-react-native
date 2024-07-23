import { useEffect, useState } from "react";
import { getLatestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, ActivityIndicator, FlatList, Pressable } from "react-native";

import { GameCard, AnimatedGameCard } from "./GameCard";

// import Constants from "expo-constants";
import { styled } from "nativewind";
import { Screen } from "./Screen";

//styled podemos usar el active <StyledPressable className={`active:opacity-30`}>

export function Main() {
  const [dataGames, setDataGames] = useState([]);
  const insets = useSafeAreaInsets();

  const getData = async () => {
    const data = await getLatestGames();
    setDataGames(data);
    // console.log("DataGames:", JSON.stringify(data, null, 2));
  };

  useEffect(() => {
    getData();
  }, []);

  // return <CardInfo dataGames={dataGames} />;

  return (
    <Screen
    // style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
    >
      {/* SafeAreaView Solo para IOS */}
      {/* <SafeAreaView style={{ marginVertical: 10 }}> */}

      {dataGames.length === 0 ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <FlatList
          data={dataGames}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
        />

        // <ScrollView>
        //   {dataGames.map((game) => (
        //     <GameCard key={game.slug} game={game} />
        //   ))}
        // </ScrollView>
      )}
      {/* </SafeAreaView> */}
    </Screen>
  );

  // return (
  //   <View style={styles.container}>
  //     {/* Componente especial de expo para mostrar el estado del dispositivo */}
  //     <StatusBar style="light" />

  //     {/* <Image
  //       blurRadius={4}
  //       source={icon}
  //       style={{ width: 100, height: 100, resizeMode: 'center' }}
  //     />
  //     <Image
  //       fadeDuration={600}
  //       source={icon}
  //       style={{ width: 200, height: 100, resizeMode: 'contain' }}
  //     />
  //     */}
  //     <Image
  //       source={icon}
  //       style={{ width: 200, height: 100, resizeMode: "stretch" }}
  //     />

  //     <Image
  //       // blurRadius={4}
  //       source={{
  //         uri: "https://www.metacritic.com/a/img/catalog/provider/6/12/6-1-767900-52.jpg",
  //       }}
  //       style={{ width: 200, height: 200, resizeMode: "contain" }}
  //     />
  //     <Text style={{ color: "white" }}>
  //       Open up App.js to start working on your app!
  //     </Text>
  //     {/* Boton nativo no se puede estilar */}
  //     <Button color="" title="Press me" onPress={() => alert("Hello")} />

  //     <TouchableHighlight
  //       // Color que tendra detras
  //       underlayColor={"#29f"}
  //       style={{
  //         backgroundColor: "#fff",
  //         padding: 10,
  //         borderRadius: 10,
  //         marginTop: 10,
  //         width: 100,
  //         height: 100,
  //         alignItems: "center",
  //         justifyContent: "center",
  //       }}
  //       onPress={() => alert("Hello")}
  //     >
  //       <Text>Boton personalizado</Text>
  //     </TouchableHighlight>

  //     <Pressable
  //       onPress={() => {
  //         try {
  //           getData();
  //           alert("Datos obtenidos");
  //         } catch (error) {
  //           console.error(error);
  //         }
  //       }}
  //       style={{
  //         backgroundColor: "#fff",
  //         padding: 10,
  //         marginTop: 10,
  //         width: 100,
  //         height: 100,
  //         alignItems: "center",
  //         justifyContent: "center",
  //         borderRadius: 100,
  //       }}
  //     >
  //       <Text style={{ color: "black" }}>Obtener datos de jeugos</Text>
  //     </Pressable>

  //     <Pressable
  //       onPress={() => console.log(dataGame)}
  //       style={({ pressed }) => [
  //         {
  //           backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
  //         },
  //         styles.wrapperCustom,
  //       ]}
  //     >
  //       {({ pressed }) => (
  //         <Text
  //           style={{
  //             fontSize: pressed ? 32 : 16,
  //             color: pressed ? "red" : "black",
  //           }}
  //         >
  //           {pressed ? "Pressed!" : "mostrar dataGame"}
  //         </Text>
  //       )}
  //     </Pressable>
  //   </View>
  // );
}
