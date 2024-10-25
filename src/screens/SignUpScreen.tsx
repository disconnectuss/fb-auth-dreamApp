import {
  Alert,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import MyButton from '../components/MyButton';
import MyTextInput from '../components/MyTextInput';
import auth from '@react-native-firebase/auth';

const SignUpScreen: React.FC = () => {
  // State management for user input
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const signUpScreenTest = (): void => {
    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match');
      return;
    }
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('User created');
      })
      .catch((err: unknown) => {
        if (err instanceof Error) {
          console.log(err.message);
          Alert.alert('Error', err.message);
        } else {
          console.log('An unknown error occurred');
        }
      });
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/background.png')}
        style={styles.bgImg}
        resizeMode="cover">
        <Image source={require('../assets/food/food.png')} style={styles.img} />
        <Text style={styles.title}>EatMore</Text>
        <View style={styles.inputContainer}>
          <MyTextInput
            placeholder="example@example.com"
            value={email}
            onChangeText={setEmail}
          />
          <MyTextInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <MyTextInput
            placeholder="Confirm Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <MyButton onPress={signUpScreenTest} title="Sign Up" />
          <Text style={styles.orText}>or</Text>
          <View style={styles.socialIconsContainer}>
            <Image
              source={require('../assets/SocialMediaIcons/facebook.png')}
              style={styles.icon}
            />
            <Image
              source={require('../assets/SocialMediaIcons/google.png')}
              style={styles.icon}
            />
            <Image
              source={require('../assets/SocialMediaIcons/twitter.png')}
              style={styles.icon}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default SignUpScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImg: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  img: {
    height: 50,
    width: 90,
    resizeMode: 'contain',
    position: 'absolute',
    right: 20,
    top: 50,
  },
  title: {
    fontSize: 40,
    color: '#fff',
    marginTop: 110,
    fontFamily: 'Audiowide-Regular',
  },
  inputContainer: {
    height: 400,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  orText: {
    marginVertical: 15,
    fontSize: 16,
    color: '#888',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '60%',
    marginTop: 15,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});
