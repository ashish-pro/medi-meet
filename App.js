import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/Login';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import SignInWithOAuth from './App/Components/SignInWithOAuth';
import Home from './App/Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigations from './App/Navigations/TabNavigations';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'appfont': require('./assets/fonts/Outfit-Regular.ttf'),
    'appfont-bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'appfont-light': require('./assets/fonts/Outfit-Light.ttf'),
    'appfont-semibold': require('./assets/fonts/Outfit-SemiBold.ttf'),
  });
  if(!fontsLoaded){
    return null;
  }
  return (
    <ClerkProvider publishableKey={'pk_test_d2FybS1tb25pdG9yLTc2LmNsZXJrLmFjY291bnRzLmRldiQ'}>
      <SafeAreaView style={styles.container}>
        <StatusBar hidden />
        <SignedIn>
          <NavigationContainer>
            <TabNavigations />
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <Login />
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
});
