import { Platform, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { create } from "twrnc";

// import useCachedResources from "./src/hooks/useCachedResources";
import Main from "./src/Main";

// creating tailwind css instance
export const tw = create({
  theme: require(`./tailwind.config.js`).theme,
  plugins:require('./tailwind.config.public.js').plugins
});

export default function App() {
  // const isLoadingComplete = useCachedResources();

  if (!true) {
    return null;
  } else {
    return (
      <SafeAreaProvider style={styles.AndroidSafeArea}>
          <Main/>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? 50 : 0,
  },
});
