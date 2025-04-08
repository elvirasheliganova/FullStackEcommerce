import { StatusBar } from 'expo-status-bar';
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <GluestackUIProvider mode="light"><View >
        <Text>Hello World!</Text>
        <StatusBar style="auto" />
      </View></GluestackUIProvider>
  );
}

;
