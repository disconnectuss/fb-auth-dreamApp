import {StyleSheet, TextInput, View, TextInputProps} from 'react-native';
import React from 'react';
interface Props extends TextInputProps {
  placeholder: string;
  secureTextEntry?: boolean; // Make this optional
}
const MyTextInput: React.FC<Props> = ({
  placeholder,
  secureTextEntry,
  ...rest
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        {...rest} // Spread the rest of the props like value and onChangeText
      />
    </View>
  );
};
export default MyTextInput;
const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  input: {
    width: '100%',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    padding: 10,
  },
});
