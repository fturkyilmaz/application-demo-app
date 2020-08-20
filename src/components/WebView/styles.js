import {StyleSheet} from 'react-native';
import distances from '../../constants/Distances';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: distances.defaultDistance,
  },
  webView: {
    width: 400,
    height: 800,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
