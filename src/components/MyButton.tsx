import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
interface Props {
  title: string;
  onPress: () => void;
}
const MyButton: FC<Props> = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};
export default MyButton;
const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0036',
    borderRadius: 30,
    marginTop: 40,
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Helvetica-bold', // Adressed-Regular
  },
});
