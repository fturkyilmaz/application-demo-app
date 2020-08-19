import React, {useState} from 'react';
import {TextInput} from 'react-native';
import {View} from '../Themed';
import {Text} from '../../components/Themed';
import styles from './styles';

export default function Input({
  caption = 'Mail',
  disabled = true,
  autoCapitalize = 'none',
  onChangeText,
  maxLength,
  placeholder = 'Mail giriniz.',
  value = '',
  keyboardType = 'email-address',
  props,
}) {
  return (
    <View {...props}>
      {caption && <Text style={styles.labelStyle}>{caption}</Text>}

      <TextInput
        placeholder={placeholder}
        editable={disabled}
        autoCorrect={false}
        style={styles.inputStyle}
        selectTextOnFocus={disabled}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        maxLength={maxLength}
      />
    </View>
  );
}
