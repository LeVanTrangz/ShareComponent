import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screen/auth/LoginScreen';
import MainScreen from '../screen/main/MainScreen';
import WelcomeScreen from '../screen/welcome/WelcomeScreen';
import ForgotScreen from '../screen/auth/ForgotScreen';
import VerifyScreen from '../screen/auth/VerifyScreen';
import SignUp from '../screen/auth/SignupScreen';

const Main = createNativeStackNavigator();

function MainNavigator() {
  return (
    <Main.Navigator
    initialRouteName='Main'
      screenOptions={{
        headerShown: false,
      }}>
      <Main.Screen name="Welcome" component={WelcomeScreen} />
      <Main.Screen name="Login" component={LoginScreen} />
      <Main.Screen name="Signup" component={SignUp} />
      <Main.Screen name="Verify" component={VerifyScreen} />
      <Main.Screen name="Forgot" component={ForgotScreen} />
      <Main.Screen name="Main" component={MainScreen} />
    </Main.Navigator>
  );
}

export default MainNavigator;
