import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {image_back} from '../../../assets/image/images';
import {createDrawerNavigator} from '@react-navigation/drawer';

const ProfileScreen = (propsx: any) => {
  return (
    <SafeAreaView style={{backgroundColor:'#FFF'}}>
      <View >
        <TouchableOpacity
          style={{padding: 24}}>
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
  underForm: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
export default ProfileScreen;
