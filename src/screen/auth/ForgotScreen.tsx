import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  image_arrowSignin,
  image_back,
  image_mail,
} from '../../../assets/image/images';
import {useState} from 'react';
import ButtonComponent from '../../component/ButtonComponent';

const ForgotScreen = (propsx: any) => {
  const [email, setEmail] = useState('');

  const {navigation} = propsx;

  function sendRequest() {
    navigation.navigate('Verify', {email: email});
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
        Reset Password
      </Text>
      <View style={{padding: 24}}>
        <Text
          style={{
            color: '#120D26',
            fontSize: 16,
            fontWeight: '400',
            lineHeight: 22,
          }}>
          Please enter your email address to
        </Text>
        <Text
          style={{
            color: '#120D26',
            fontSize: 16,
            fontWeight: '400',
            lineHeight: 22,
          }}>
          request a password reset
        </Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image source={image_mail} style={styles.iconMail} />
        <TextInput
          onChangeText={setEmail}
          value={email}
          keyboardType="default"
          placeholder="abc@gmail.com"
          style={styles.textInput}
        />
      </View>
      <TouchableOpacity
        onPress={sendRequest}
        style={{
          marginTop: 48,
          marginHorizontal: 60,
          flexDirection: 'row',
          backgroundColor: '#5669FF',
          borderRadius: 8,
          height: 56,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 18, fontWeight: '600', color: '#FFF'}}>
          SEND
        </Text>
        <TouchableOpacity
          onPress={sendRequest}
          style={{position: 'absolute', right: 50}}>
          <Image source={image_arrowSignin} style={styles.iconEye} />
        </TouchableOpacity>
      </TouchableOpacity>
      {/* <ButtonComponent
        text="Send"
        textColor="green"
        type="primary"
        styles={styles.textInput}
      /> */}
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
    paddingLeft: 60,
  },
  underForm: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
export default ForgotScreen;
