import { StyleSheet } from "react-native";
import fonts from "../../constants/Fonts";
import distances from "../../constants/Distances";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: distances.defaultDistance,
  },
  caption: {
    fontSize: fonts.big,
    paddingBottom: distances.quarterDistance,
  },
});
