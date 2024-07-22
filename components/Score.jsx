import { Text, View } from "react-native";

export function Score({ score, maxScore }) {
  return (
    <View className="w-8 h-8 rounded-full justify-center items-center">
      <Text>{score}</Text>
    </View>
  );
}
