import { SafeAreaProvider } from "react-native-safe-area-context";
import { useCachedResources } from "./src/hooks";
import Main from "./src/Screens";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Main />
      </SafeAreaProvider>
    );
  }
}
