import {
  FlatList,
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {
  image_avatar,
  image_bookmark,
  image_calender,
  image_mail,
  image_message,
  image_setting,
  image_signout,
  image_userIcon,
} from '../../assets/image/images';
import {ReactNode} from 'react';
interface Props {
  icon?: ReactNode;
  text: string;
  type?: 'primary' | 'text' | 'link';
  color?: string;
  styles?: StyleProp<ViewStyle>;
  textColor?: string;
  textStyles?: StyleProp<TextStyle>;
  fontStyle?: string;
  onPress?: () => void;
  iconFlex?: 'right' | 'left';
  disable?: boolean;
}
const DrawCustom = (props: any) => {
  const listItem = [
    {
      key: 'Profile',
      label: 'My Profile',
      icon: image_userIcon,
    },
    {
      key: 'Message',
      label: 'Message',
      icon: image_message,
    },
    {
      key: 'Calender',
      label: 'Calender',
      icon: image_calender,
    },
    {
      key: 'Bookmark',
      label: 'Bookmark',
      icon: image_bookmark,
    },
    {
      key: 'Contact',
      label: 'Contact Us',
      icon: image_mail,
    },
    {
      key: 'Setting',
      label: 'Settings',
      icon: image_setting,
    },
    {
      key: 'Help',
      label: 'Helps & FAQs',
      icon: image_userIcon,
    },
    {
      key: 'Signout',
      label: 'Sign Out',
      icon: image_signout,
    },
  ];

  const renderItem = ({item}: any) => {
    return (
      <View key={item.key}>
        
        <TouchableOpacity
        onPress={() => item.key == 'Signout' ? props.navigation.navigate('Welcome'): props.navigation.navigate(`${item.key}`)}
          style={{
            flexDirection: 'row',
            marginVertical: 24,
            paddingHorizontal: 12,
            alignItems: 'center',
          }}>
          <Image source={item.icon} style={styles.backIcon} />
          <Text style={{marginLeft: 24}}>{item.label}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <Image
          source={image_avatar}
          style={{
            width: 50,
            height: 50,
            resizeMode: 'contain',
            paddingLeft: 36,
            margin:36
          }}
        />
      <FlatList renderItem={renderItem} data={listItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  backIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    paddingLeft: 36,
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

export default DrawCustom;
