import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ContactScreen from '../screen/main/ContactScreen';

const Contact = createNativeStackNavigator();

function ContactNavigator() {
  return (
    <Contact.Navigator
      initialRouteName="Contact"
      screenOptions={{
        headerShown: false,
      }}>
      <Contact.Screen name="Contact" component={ContactScreen} />
    </Contact.Navigator>
  );
}

export default ContactNavigator;
