import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import * as Notifications from "expo-notifications";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["new NativeEventEmitter"]);

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false, //dépend du téléphone et de sa configuration
    shouldSetBadge: false,
  }),
});

Notifications.cancelAllScheduledNotificationsAsync();
Notifications.scheduleNotificationAsync({
  content: {
    title: "Votre récompense est disponible",
    body: "N'oubliez pas de venir collecter votre récompense !",
  },
  trigger: {
    seconds: 10,
    //seconds: 60, //1 minute
    // seconds: 60 * 60, //1 hour
    // seconds: 60 * 60 * 24, //1 day
    //repeats: true,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Vous devriez voir une notification</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
