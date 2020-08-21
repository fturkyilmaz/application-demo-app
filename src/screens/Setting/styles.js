import {StyleSheet} from 'react-native';
import distances from '../../constants/Distances';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  inputContainer: {flex: 1, paddingVertical: distances.quarterDistance},
  innerContainer: {
    flex: 1,
    padding: distances.defaultDistance,
    marginHorizontal: 20,
  },
});
