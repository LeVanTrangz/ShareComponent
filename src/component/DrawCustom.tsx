import {
  FlatList,
  Image,
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {StyleGlobal} from '../../assets/color/styleGlobal';
import {
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
const DrawCustom = (props: Props) => {
  // const {
  //   onPress,
  //   icon,
  //   text,
  //   type,
  //   color,
  //   styles,
  //   textColor,
  //   textStyles,
  //   fontStyle,
  // } = props;

  const Category = ([] = [
    {
      key:'Profile',
      label: 'My Profile',
      icon: image_userIcon,
    },
    {
      key:'Message',
      label: 'Message',
      icon: image_message,
    },
    {
      key:'Calender',
      label: 'Calender',
      icon: image_calender,
    },
    {
      key:'Bookmark',
      label: 'Bookmark',
      icon: image_bookmark,
    },
    {
      key:'Contact',
      label: 'Contact Us',
      icon: image_mail,
    },
    {
      key:'Setting',
      label: 'Settings',
      icon: image_setting,
    },
    {
      key:'Help',
      label: 'Helps & FAQs',
      icon: image_userIcon,
    },
    { 
      key:'Signout',
      label: 'Sign Out',
      icon: image_signout,
    },
  ]);

  const renderItem = ({item}: any) => {
    return (
      <View key={item.key}>
        <Image source={item.icon} />
        <Text>{item.label}</Text>
      </View>
    );
  };

  return (
    <View style={{backgroundColor: StyleGlobal.colorWaring, width: '50%'}}>
      <Text>This Draw</Text>
      <View style={{flex: 1}}>
        <Image source={image_userIcon} />
      </View>

      <View style={{flex: 5}}>
        <FlatList renderItem={renderItem} data={Category} />
      </View>
      <View style={{flex: 1}}></View>
    </View>
  );
};

export default DrawCustom;
