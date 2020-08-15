import { StyleSheet } from "react-native";
import colors from "../../constants/Colors";
import fonts from "../../constants/Fonts";
import distances from "../../constants/Distances";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: distances.defaultDistance,
  },
  pickerContainer: { height: 250, width: 400 },
  pickerItem: {
    fontSize: 15,
    height: 180,
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
  },
  caption: {
    fontSize: fonts.big,
    paddingBottom: distances.quarterDistance,
  },
});
