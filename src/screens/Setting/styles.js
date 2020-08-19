import { StyleSheet } from "react-native";
import distances from "../../constants/Distances";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: distances.defaultDistance,
  },
});
