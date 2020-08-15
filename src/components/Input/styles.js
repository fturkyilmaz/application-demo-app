import { StyleSheet } from "react-native";
import colors from "../../constants/Colors";
import fonts from "../../constants/Fonts";
import distances from "../../constants/Distances";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  inputStyle: {
    color: "black",
    borderWidth: 1,
    borderRadius: 10,
    padding: distances.halfDistance,
    height: 45,
    backgroundColor: colors.white,
  },
  labelStyle: {
    fontSize: fonts.big,
    paddingBottom: distances.quarterDistance,
  },
});
