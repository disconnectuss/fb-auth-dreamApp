import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import MyButton from '../components/MyButton';
import MyTextInput from '../components/MyTextInput';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
type RootStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
};
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
const LoginScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const goToSignUp = () => {
    navigation.navigate('SignUpScreen');
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
          <MyTextInput placeholder="example@example.com" />
          <MyTextInput placeholder="password" secureTextEntry />
          <Text style={styles.text}>Don't have an account yet?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
          <MyButton title="Login" />
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

export default LoginScreen;

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
  text: {
    marginTop: 20,
    color: '#000',
  },
  signUpText: {
    color: '#1E90FF',
    fontSize: 16,
    marginTop: 10,
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
