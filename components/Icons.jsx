import { FontAwesome6 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export const CircleInfoIcon = (props) => (
  <FontAwesome6 name="circle-info" size={24} color="white" {...props} />
);

export const HomeIcon = (props) => {
  return <Entypo name="home" size={32} color="white" {...props} />;
};

export const InfoIcon = (props) => (
  <FontAwesome6 name="info" size={32} color="white" {...props} />
);
