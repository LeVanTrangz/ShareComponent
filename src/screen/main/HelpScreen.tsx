import {Image, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import {image_back} from '../../../assets/image/images';

const HelpScreen = (propsx: any) => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={{padding: 24}}
        onPress={() => {
          propsx.onPressBackButton === undefined
            ? propsx.navigation.goBack()
            : propsx.onPressBackButton();
        }}>
        <Image source={image_back} style={styles.backIcon} />
      </TouchableOpacity>
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
export default HelpScreen;
