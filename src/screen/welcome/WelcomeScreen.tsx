import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import LoginScreen from '../auth/LoginScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { image_logo } from '../../../assets/image/images';

const WelcomeScreen = (props:any) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <GestureHandlerRootView>
      <SafeAreaView style={styles.container}>
      {isLoading == true ? (
        <View style={styles.loadingContainer}>
          <Image style={styles.logo} source={image_logo} />
          <ActivityIndicator style={styles.activityIndicator} size="small" color="#0000ff" />
        </View>
      ) : (
        <LoginScreen props={props} />
      )}
    </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DADADA',
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50,
  },
  logo: {
    width: 200,
    height: 60,
    resizeMode: 'contain',
  },
  activityIndicator: {
    height: 50,
  },
  iconMail: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  textInput: {
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    width: '80%',
    height: 56,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 8,
    paddingLeft: 24,
  },
});

export default WelcomeScreen;
