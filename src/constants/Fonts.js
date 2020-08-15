import { Dimensions } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
  if (scale > 1) {
    return size;
  }
  return size - 3;
}

export default {
  biggest: normalize(33),
  evenBigger: normalize(24),
  bigger: normalize(18),
  big: normalize(16),
  normal: normalize(14),
  small: normalize(12),
  smaller: normalize(10),
  evenSmaller: normalize(8),
};
