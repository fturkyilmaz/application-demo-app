import React, {useMemo} from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from '../Themed';
import colors from '../../constants/Colors';
import distances from '../../constants/Distances';

export default function Button({
  onPress,
  text = 'Kaydet',
  buttonStyle,
  textStyle,
  ...props
}) {
  const bs = useMemo(() => {
    return {
      alignItems: 'center',
      borderRadius: 10,
      backgroundColor: colors.global.button,
      padding: distances.defaultDistance,
      ...buttonStyle,
    };
  }, [buttonStyle]);

  const ts = useMemo(() => {
    return {color: colors.global.buttonText, ...textStyle};
  }, [textStyle]);

  return (
    <TouchableOpacity style={bs} onPress={() => onPress()} {...props}>
      <Text style={ts}>{text}</Text>
    </TouchableOpacity>
  );
}
