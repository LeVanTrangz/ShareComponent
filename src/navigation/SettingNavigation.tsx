import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingScreen from '../screen/main/SettingScreen';

const Setting = createNativeStackNavigator();

function SettingNavigator() {
  return (
    <Setting.Navigator
      initialRouteName="Setting"
      screenOptions={{
        headerShown: false,
      }}>
      <Setting.Screen name="Setting" component={SettingScreen} />
    </Setting.Navigator>
  );
}

export default SettingNavigator;
