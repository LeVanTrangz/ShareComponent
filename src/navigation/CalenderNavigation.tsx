import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CalenderScreen from '../screen/main/CalenderScreen';

const Calender = createNativeStackNavigator();

function CalenderNavigator() {
  return (
    <Calender.Navigator
      initialRouteName="Calender"
      screenOptions={{
        headerShown: false,
      }}>
      <Calender.Screen name="Calender" component={CalenderScreen} />
    </Calender.Navigator>
  );
}

export default CalenderNavigator;
