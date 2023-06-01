import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
} from 'react-native';
import {Card} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Snackbar from 'react-native-snackbar';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const Login = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [secureText, setSecureText] = useState(true);
  const [signup, setSignup] = useState(false);
  const Hide_Soft_Keyboard = () => {
    Keyboard.dismiss();
  };

  const createUser = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('SignUp Successfully!');
        navigation.navigate('RootScreen');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Snackbar.show({
            text: 'That email address is already in use!',
            backgroundColor: '#FFF',
            textColor: 'red',
          });
        }
        if (error.code === 'auth/user-not-found') {
          Snackbar.show({
            text: 'That email address is not found!',
            backgroundColor: '#FFF',
            textColor: 'red',
          });
        }
        if (error.code === 'auth/invalid-email') {
          Snackbar.show({
            text: 'That email address is invalid!',
            backgroundColor: '#FFF',
            textColor: 'red',
          });
        }
      });
  };

  const loginCheck = () => {
    Hide_Soft_Keyboard();
    if (email == null || password == null) {
      console.log(email, '---', password);
      Snackbar.show({
        text: 'Required All Fields',
        backgroundColor: '#FFF',
        textColor: 'red',
      });
    } else if (email.length === 0 || password.length === 0) {
      console.log(email, '-#####--', password);
      Snackbar.show({
        text: 'Required All Fields',
        backgroundColor: '#FFF',
        textColor: 'red',
      });
    } else if (signup && password !== confirmPassword) {
      Snackbar.show({
        text: 'Please Check your Password!',
        backgroundColor: '#FFF',
        textColor: 'red',
      });
    } else {
      console.log(email, '---====---', password);
      signup === true
        ? createUser()
        : auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
              console.log('SignIN Successfully!');
              navigation.navigate('RootScreen');
            })
            .catch(error => {
              if (error.code === 'auth/email-already-in-use') {
                Snackbar.show({
                  text: 'That email address is already in use!',
                  backgroundColor: '#FFF',
                  textColor: 'red',
                });
              }
              if (error.code === 'auth/user-not-found') {
                Snackbar.show({
                  text: 'That email address is not found!',
                  backgroundColor: '#FFF',
                  textColor: 'red',
                });
              }
              if (error.code === 'auth/invalid-email') {
                Snackbar.show({
                  text: 'That email address is invalid!',
                  backgroundColor: '#FFF',
                  textColor: 'red',
                });
              }
              console.log('error=====>', error);
            });
    }
  };

  const googleSignIn = async () => {
    GoogleSignin.configure({
      scopes: [],
      webClientId:
        '916652487172-laojplkebtijklj3rnr6uhcqs60njjbv.apps.googleusercontent.com',
      offlineAccess: true,
      //forceCodeForRefreshToken: true,
    });
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('------->', userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('===>user cancelled the login flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('===>operation (e.g. sign in) is in progress already');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('===>play services not available or outdated');
      } else {
        console.log('===>some other error happened', error);
      }
    }
  };

  // useEffect(() => {
  //   GoogleSignin.configure({
  //     scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  //     webClientId:
  //       '916652487172-laojplkebtijklj3rnr6uhcqs60njjbv.apps.googleusercontent.com',
  //     offlineAccess: true,
  //     forceCodeForRefreshToken: true,
  //   });
  // }, []);

  return (
    <View style={styles.container}>
      {/* <View>
        <Text
          style={{
            color: '#000',
            fontStyle: 'italic',
            fontSize: 40,
            fontWeight: 'bold',
          }}>
          Zomato
        </Text>
      </View> */}
      <View style={styles.deliveryImg}>
        <Image
          source={require('../assets/fooddelivery.png')}
          style={{width: 200, height: 200}}
        />
      </View>

      <View>
        <Card style={styles.inputTxtCard}>
          <Icon name="email" style={styles.inputTxtIcon} />
          <TextInput
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={text => setEmail(text)}
            style={{textAlign: 'center', color: '#000'}}
            placeholder="Enter Email"
            placeholderTextColor="#000"
          />
        </Card>
      </View>

      <View>
        <Card style={styles.inputTxtCard}>
          <Icon name="lock" style={styles.inputTxtIcon} />
          <TextInput
            secureTextEntry={secureText}
            value={password}
            onChangeText={text => setPassword(text)}
            style={{textAlign: 'center', color: '#000'}}
            placeholder="Enter Password"
            placeholderTextColor="#000"
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              padding: 5,
              left: 250,
            }}
            onPress={() => setSecureText(!secureText)}>
            <Icon
              name={secureText ? 'eye-off' : 'eye'}
              style={{
                fontSize: 25,
                color: '#333300',
              }}
            />
          </TouchableOpacity>
        </Card>
      </View>

      {signup && (
        <View>
          <Card style={styles.inputTxtCard}>
            <Icon name="lock" style={styles.inputTxtIcon} />
            <TextInput
              secureTextEntry={secureText}
              value={confirmPassword}
              onChangeText={text => setConfirmPassword(text)}
              style={{textAlign: 'center', color: '#000'}}
              placeholder="Confirm Password"
              placeholderTextColor="#000"
            />
            <TouchableOpacity
              style={{
                position: 'absolute',
                padding: 5,
                left: 250,
              }}
              onPress={() => setSecureText(!secureText)}>
              <Icon
                name={secureText ? 'eye-off' : 'eye'}
                style={{
                  fontSize: 25,
                  color: '#333300',
                }}
              />
            </TouchableOpacity>
          </Card>
        </View>
      )}

      <View>
        <TouchableOpacity
          style={styles.signinButton}
          onPress={() => loginCheck()}>
          {signup === false ? (
            <Text style={styles.signInTxt}>SignIn</Text>
          ) : (
            <Text style={styles.signInTxt}>SignUp</Text>
          )}
        </TouchableOpacity>
        <View
          style={{
            padding: 10,
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Text style={{fontSize: 20}}>
            ---------------- or ----------------
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          {/* <TouchableOpacity
            style={styles.signInGoogleBttn}
            onPress={() => googleSignIn()}>
            <Card style={styles.googleBtnCard}>
              <Image
                source={require('../assets/googlelogo.png')}
                style={{width: 35, height: 35}}
              />
            </Card>
            <Text style={styles.googleBtnTxt}>Signin with google</Text>
          </TouchableOpacity> */}
          <GoogleSigninButton
            style={{width: 192, height: 48}}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={() => googleSignIn()}
          />
        </View>
        {!signup && (
          <View style={styles.accountContainer}>
            <Text>Don't have an account? </Text>
            <TouchableOpacity onPress={() => setSignup(!signup)}>
              <Text style={styles.signupTxt}>SignUp</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d5d5d5',
  },
  deliveryImg: {
    backgroundColor: '#FFF',
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 150,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 10,
  },
  inputTxtCard: {
    width: 290,
    height: 50,
    marginTop: 20,
    borderRadius: 10,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 8,
  },
  inputTxtIcon: {
    fontSize: 25,
    color: '#333300',
    position: 'absolute',
    padding: 5,
  },
  signinButton: {
    width: 290,
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    justifyContent: 'center',
    backgroundColor: '#E83A59',
  },
  signInTxt: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 21,
    fontWeight: 'bold',
  },
  signInGoogleBttn: {
    width: 290,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#00adff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  googleBtnCard: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    marginLeft: 0,
    borderRadius: 50,
    width: 50,
    height: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  googleBtnTxt: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: -45,
    fontWeight: 'bold',
    color: '#FFF',
  },
  accountContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupTxt: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue',
    borderBottomColor: 'blue',
    borderBottomWidth: 2,
  },
});
