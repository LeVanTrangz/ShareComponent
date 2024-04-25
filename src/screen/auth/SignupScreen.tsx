import {
  Image,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  image_arrowSignin,
  image_back,
  image_eye,
  image_facebookIcon,
  image_googleIcon,
  image_mail,
  image_password,
  image_userIcon,
} from '../../../assets/image/images';
import {useState} from 'react';

const SignUp = (propsx: any) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const {navigation} = propsx;
  console.log(navigation, 'navigation');

  function signUp() {}

  function backSignin() {
    navigation.navigate('Login');
  }
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity
          style={{padding: 24}}
          onPress={() => {
            propsx.onPressBackButton === undefined
              ? propsx.navigation.goBack()
              : propsx.onPressBackButton();
          }}>
          <Image source={image_back} style={styles.backIcon} />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontSize: 24,
          color: 'black',
          fontWeight: '500',
          padding: 24,
        }}>
        SignUp
      </Text>
      <View
        style={{
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row', padding: 24, alignItems: 'center'}}>
          <TextInput
            onChangeText={setUserName}
            value={userName}
            keyboardType="default"
            placeholder="Full name"
            style={styles.textInput}></TextInput>
          <Image source={image_userIcon} style={styles.iconMail} />
        </View>
        <View style={{flexDirection: 'row', padding: 24, alignItems: 'center'}}>
          <TextInput
            onChangeText={setEmail}
            value={email}
            keyboardType="default"
            placeholder="abc@gmail.com"
            style={styles.textInput}></TextInput>
          <Image source={image_mail} style={styles.iconMail} />
        </View>
        <View style={{flexDirection: 'row', padding: 24, alignItems: 'center'}}>
          <TextInput
            onChangeText={setPassword}
            value={password}
            keyboardType="default"
            placeholder="Your Password"
            style={styles.textInput}></TextInput>
          <Image source={image_password} style={styles.iconPass} />
          <TouchableOpacity style={{position: 'absolute', right: 50}}>
            <Image source={image_eye} style={styles.iconEye} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            padding: 24,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TextInput
            onChangeText={setRePassword}
            value={rePassword}
            keyboardType="default"
            secureTextEntry
            placeholder="Confirm Password"
            style={styles.textInput}></TextInput>
          <Image source={image_password} style={styles.iconPass} />
          <TouchableOpacity style={{position: 'absolute', right: 50}}>
            <Image source={image_eye} style={styles.iconEye} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={signUp}
        style={{
          flexDirection: 'row',
          backgroundColor: '#5669FF',
          borderRadius: 8,
          height: 56,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 72,
        }}>
        <Text style={{fontSize: 18, fontWeight: '600', color: '#FFF'}}>
          SIGN UP
        </Text>
        <TouchableOpacity
          onPress={signUp}
          style={{position: 'absolute', right: 50}}>
          <Image source={image_arrowSignin} style={styles.iconEye} />
        </TouchableOpacity>
      </TouchableOpacity>

      <Text style={{textAlign: 'center', marginVertical: 24, fontSize: 18}}>
        OR
      </Text>

      <View>
        <TouchableOpacity
          style={{
            marginHorizontal: 60,
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
            marginHorizontal: 60,
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
        <Text style={{fontSize: 16}}>Already have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            propsx.onPressBackButton === undefined
              ? propsx.navigation.goBack()
              : propsx.onPressBackButton();
          }}>
          <Text style={{fontSize: 16, color: 'blue'}}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backIcon: {
    width: 30,
    height: 30,
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
});
export default SignUp;
