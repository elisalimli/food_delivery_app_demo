import { StatusBar } from "expo-status-bar";
import { Platform, Text, StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { create } from "twrnc";

import useCachedResources from "./hooks/useCachedResources";

// creating tailwind css instance
export const tw = create({
  theme: require(`./tailwind.config.js`).theme,
  plugins:require('./tailwind.config.public.js').plugins
});

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider style={styles.AndroidSafeArea}>
        <StatusBar backgroundColor="red" />
        <View>
          <Text style={tw`h1`}>
            Lorem ipsum bla bla ola bila fila noy si me
          </Text>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? 50 : 0,
  },
});
