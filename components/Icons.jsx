import { FontAwesome6 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export const CircleInfoIcon = (props) => (
  <FontAwesome6 name="circle-info" size={24} color="white" {...props} />
);

export const HomeIcon = (props) => {
  return <Entypo name="home" size={24} color="white" {...props} />;
};
