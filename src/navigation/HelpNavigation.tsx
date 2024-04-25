import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HelpScreen from '../screen/main/HelpScreen';

const Help = createNativeStackNavigator();

function HelpNavigator() {
  return (
    <Help.Navigator
      initialRouteName="Help"
      screenOptions={{
        headerShown: false,
      }}>
      <Help.Screen name="Help" component={HelpScreen} />
    </Help.Navigator>
  );
}

export default HelpNavigator;
