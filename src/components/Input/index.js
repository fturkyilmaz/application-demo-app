import React, {useState} from 'react';
import {TextInput} from 'react-native';
import {View} from '../Themed';
import {Text} from '../../components/Themed';
import styles from './styles';

export default function Input({
  disabled=true,
  caption,
  autoCapitalize = 'none',
  onChangeText,
  placeholder = 'Mail giriniz.',
  value = '',
  keyboardType = 'email-address',
  error = null,
  props,
}) {
  return (
    <View>
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
        {...props}
      />

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}
