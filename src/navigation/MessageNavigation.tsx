import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MessageScreen from '../screen/main/MessageScreen';

const Message = createNativeStackNavigator();

function MessageNavigator() {
  return (
    <Message.Navigator
      initialRouteName="Message"
      screenOptions={{
        headerShown: false,
      }}>
      <Message.Screen name="Message" component={MessageScreen} />
    </Message.Navigator>
  );
}

export default MessageNavigator;
