import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  image_arrowSignin,
  image_eye,
  image_facebookIcon,
  image_googleIcon,
  image_logoLogin,
  image_mail,
  image_password,
} from '../../../assets/image/images';
import {TextInput} from 'react-native-gesture-handler';
import {useState} from 'react';

const LoginScreen = (propsx: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const {navigation} = propsx.props;

  function signIn() {
    if (email == '' && password != '') {
      Alert.alert('Login False!', 'You have not entered an Email!!!');
      return;
    }
    if (email != '' && password == '') {
      Alert.alert('Login False!', 'You have not entered an Password!!!');
      return;
    }
    if (email == '' && password == '') {
      Alert.alert('Login False!', 'You have not entered Email and Password!!!');
      return;
    }
    if (email === 'A' && password === 'A') {
      navigation.navigate('Main');
    } else {
      Alert.alert('Login False!', 'Email or Password incorrect!!!');
    }
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingVertical: 24,
        marginTop: 48,
      }}>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Image source={image_logoLogin} style={styles.logo} />
      </View>
      <Text
        style={{
          fontSize: 24,
          color: 'black',
          fontWeight: '500',
          padding: 24,
        }}>
        Sign in
      </Text>
      <View
        style={{
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row', padding: 24, alignItems: 'center'}}>
          <TextInput
            onChangeText={setEmail}
            value={email}
            keyboardType="default"
            placeholder="abc@gmail.com"
            style={styles.textInput}></TextInput>
          <Image source={image_mail} style={styles.iconMail} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            padding: 24,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TextInput
            onChangeText={setPassword}
            value={password}
            keyboardType="default"
            secureTextEntry
            placeholder="Your Password"
            style={styles.textInput}></TextInput>
          <Image source={image_password} style={styles.iconPass} />
          <TouchableOpacity style={{position: 'absolute', right: 50}}>
            <Image source={image_eye} style={styles.iconEye} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.underForm}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Text>Remember Me</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
          <Text>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={signIn}
        style={{
          marginTop: 48,
          flexDirection: 'row',
          backgroundColor: '#5669FF',
          borderRadius: 8,
          height: 56,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 18, fontWeight: '600', color: '#FFF'}}>
          SIGN IN
        </Text>
        <TouchableOpacity
          onPress={signIn}
          style={{position: 'absolute', right: 50}}>
          <Image source={image_arrowSignin} style={styles.iconEye} />
        </TouchableOpacity>
      </TouchableOpacity>

      <Text style={{textAlign: 'center', marginVertical: 36, fontSize: 18}}>
        OR
      </Text>

      <View>
        <TouchableOpacity
          style={{
            backgroundColor: '#FFF',
            height: 50,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
          }}>
          <Image
            source={image_googleIcon}
            style={{
              position: 'absolute',
              left: 40,
              top: 12,
              width: 25,
              height: 25,
              resizeMode: 'contain',
            }}
          />
          <Text style={{fontSize: 18, color: '#000'}}>Login with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#FFF',
            marginTop: 24,
            height: 50,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
          }}>
          <Image
            source={image_facebookIcon}
            style={{
              position: 'absolute',
              top: 12,
              left: 40,
              width: 25,
              height: 25,
              resizeMode: 'contain',
            }}
          />
          <Text style={{fontSize: 18, color: '#000'}}>Login with Facebook</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          height: 40,
          marginTop: 12,
        }}>
        <Text style={{fontSize: 16}}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={{fontSize: 16, color: 'blue'}}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
  },
  iconMail: {
    position: 'absolute',
    left: 40,
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  iconPass: {
    position: 'absolute',
    left: 40,
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  iconEye: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  textInput: {
    flexDirection: 'row',
    width: '90%',
    height: 56,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 8,
    paddingLeft: 50,
  },
  underForm: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default LoginScreen;
