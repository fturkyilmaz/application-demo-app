import { StyleSheet } from "react-native";
import distances from "../../constants/Distances";
import Colors from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: distances.widerDistance,
  },
  button: {
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: Colors.global.button,
    padding: distances.defaultDistance,
  },
  text: { color: Colors.global.buttonText, fontWeight: "bold" },
});
