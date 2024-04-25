import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {image_arrowSignin, image_back} from '../../../assets/image/images';
import {useEffect, useState} from 'react';

const VerifyScreen = (propsx: any) => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [number3, setNumber3] = useState('');
  const [number4, setNumber4] = useState('');

  const [seconds, setSeconds] = useState(59);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Kiểm tra nếu seconds bằng 0 thì dừng countdown
    if (seconds === 0) {
      clearInterval(seconds);
    }
  }, [seconds]);

  function sendRequest() {}
  function reSendCode() {
    setSeconds(59)
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
        Verification
      </Text>
      <View style={{padding: 24}}>
        <Text
          style={{
            color: '#120D26',
            fontSize: 16,
            fontWeight: '400',
            lineHeight: 22,
          }}>
          We've send you the verification
        </Text>
        <Text
          style={{
            color: '#120D26',
            fontSize: 16,
            fontWeight: '400',
            lineHeight: 22,
          }}>
          code on '{propsx.route.params.email}'
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TextInput
          onChangeText={setNumber1}
          value={number1}
          keyboardType="numeric"
          placeholder="-----"
          style={styles.textInput}
        />
        <TextInput
          onChangeText={setNumber2}
          value={number2}
          keyboardType="numeric"
          placeholder="-----"
          style={styles.textInput}
        />
        <TextInput
          onChangeText={setNumber3}
          value={number3}
          keyboardType="numeric"
          placeholder="-----"
          style={styles.textInput}
        />
        <TextInput
          onChangeText={setNumber4}
          value={number4}
          keyboardType="numeric"
          placeholder="-----"
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

      <View
        style={{
          flexDirection: 'row',
          marginTop: 24,
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 12,
        }}>
        {seconds > 0 ? <Text>You can re-send code in </Text> : <Text>You want resend code? </Text>}
        {seconds < 0 ? (
          <TouchableOpacity onPress={reSendCode}>
            <Text style={{color: 'blue'}}>Resend code!</Text>
          </TouchableOpacity>
        ) : (
          <Text style={{color: 'blue'}}>
            {' '}
            0:{seconds < 10 ? `0${seconds}` : seconds}
          </Text>
        )}
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
    width: '15%',
    height: 60,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 8,
    paddingLeft: 25,
    marginHorizontal: 12,
  },
  underForm: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
export default VerifyScreen;
