import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {image_arrowSignin, image_back, image_bookmark, image_calender, image_faq, image_mail, image_message, image_setting, image_userIcon} from '../../../assets/image/images';
import {DrawerContent, DrawerContentScrollView, createDrawerNavigator} from '@react-navigation/drawer';
import ProfileScreen from './ProfileScreen';
import MessageScreen from './MessageScreen';
import HelpScreen from './HelpScreen';
import SettingScreen from './SettingScreen';
import ContactScreen from './ContactScreen';
import BookmarkScreen from './BookmarkScreen';
import CalenderScreen from './CalenderScreen';
import DrawCustom from '../../component/DrawCustom';
const Drawer = createDrawerNavigator();

const MainScreen = (propsx: any) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerTitle: '',
         
      }}>
      <Drawer.Screen
        name="profile"
        options={{
          drawerLabel: 'My Profile',
          drawerIcon: () => (
            <Image
              source={image_userIcon}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
              }}
            />
          ),
        }}
        component={ProfileScreen}
      />
      <Drawer.Screen
        name="message"
        options={{
          drawerLabel: 'Message',
          drawerIcon: () => (
            <Image
              source={image_message}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
              }}
            />
          ),
        }}
        component={MessageScreen}
      />
      <Drawer.Screen
        name="calender"
        options={{
          drawerLabel: 'Calender',
          drawerIcon: () => (
            <Image
              source={image_calender}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
              }}
            />
          ),
        }}
        component={CalenderScreen}
      />
      <Drawer.Screen
        name="bookmark"
        options={{
          drawerLabel: 'Bookmark',
          drawerIcon: () => (
            <Image
              source={image_bookmark}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
              }}
            />
          ),
        }}
        component={BookmarkScreen}
      />
      <Drawer.Screen
        name="contact"
        options={{
          drawerLabel: 'Contact Us',
          drawerIcon: () => (
            <Image
              source={image_mail}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
              }}
            />
          ),
        }}
        component={ContactScreen}
      />
      <Drawer.Screen
        name="setting"
        options={{
          drawerLabel: 'Settings',
          drawerIcon: () => (
            <Image
              source={image_setting}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
              }}
            />
          ),
        }}
        component={SettingScreen}
      />
      <Drawer.Screen
        name="faq"
        options={{
          drawerLabel: 'Helps & FAQs',
          drawerIcon: () => (
            <Image
              source={image_faq}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
              }}
            />
          ),
        }}
        component={HelpScreen}
      />
    </Drawer.Navigator>
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
export default MainScreen;
