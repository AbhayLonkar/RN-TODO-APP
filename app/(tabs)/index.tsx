import useTheme from "@/hooks/useTheme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode } = useTheme();
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.content}>Hello Om.</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>toggle dark mode</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    fontSize: 20,
  }
})