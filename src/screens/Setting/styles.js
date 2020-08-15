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
  button: {
    flex:1,
    borderRadius: 8,
    padding: 6,
    height: 50,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});
