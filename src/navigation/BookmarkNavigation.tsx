import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BookmarkScreen from '../screen/main/BookmarkScreen';

const BookMark = createNativeStackNavigator();

function BookMarkNavigator() {
  return (
    <BookMark.Navigator
      initialRouteName="Bookmark"
      screenOptions={{
        headerShown: false,
      }}>
      <BookMark.Screen name="Bookmark" component={BookmarkScreen} />
    </BookMark.Navigator>
  );
}

export default BookMarkNavigator;
