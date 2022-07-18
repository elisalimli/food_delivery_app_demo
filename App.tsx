import { StatusBar } from 'expo-status-bar';
import { Platform, Text,StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { create } from 'twrnc';

import useCachedResources from './hooks/useCachedResources';

// creating tailwind css instance
export const tw = create(require(`./tailwind.config.js`));

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider style={styles.AndroidSafeArea}>
        <StatusBar backgroundColor='red'/>
        <View><Text style={tw`text-primary`}>example</Text></View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === 'android' ? 50 : 0
  }
});