import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  inputStyle: {
    color: "black",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    height: 45,
    backgroundColor: Colors.white,
  },
  labelStyle: {
    color: "#515364",
    fontSize: 15,
  },
});
