import MainScreen from '../screen/main/MainScreen';
import ProfileScreen from '../screen/main/ProfileScreen';
import MessageScreen from '../screen/main/MessageScreen';
import CalenderScreen from '../screen/main/CalenderScreen';
import BookmarkScreen from '../screen/main/BookmarkScreen';
import ContactScreen from '../screen/main/ContactScreen';
import SettingScreen from '../screen/main/SettingScreen';
import HelpScreen from '../screen/main/HelpScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawCustom from '../component/DrawCustom';

const Draw = createDrawerNavigator();

function DrawNavigator() {
  return (
    <Draw.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
      }}>
      <Draw.Screen name="Main" component={DrawCustom} />
      <Draw.Screen name="Profile" component={ProfileScreen} />
      <Draw.Screen name="Message" component={MessageScreen} />
      <Draw.Screen name="Calender" component={CalenderScreen} />
      <Draw.Screen name="Bookmark" component={BookmarkScreen} />
      <Draw.Screen name="Contact" component={ContactScreen} />
      <Draw.Screen name="Setting" component={SettingScreen} />
      <Draw.Screen name="Help" component={HelpScreen} />
    </Draw.Navigator>
  );
}

export default DrawNavigator;
