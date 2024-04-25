import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../screen/main/ProfileScreen';

const Profile = createNativeStackNavigator();

function ProfileNavigator() {
  return (
    <Profile.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
      }}>
      <Profile.Screen name="Profile" component={ProfileScreen} />
    </Profile.Navigator>
  );
}

export default ProfileNavigator;
