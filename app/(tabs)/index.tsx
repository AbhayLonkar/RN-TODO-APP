import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode } = useTheme();

  const todos = useQuery(api.todos.getTodos);
  console.log(todos)

  const addTodo = useMutation(api.todos.addTodos);

  const clearAllTodo = useMutation(api.todos.clearAllTodos);

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.content}>Hello Om.</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>toggle dark mode</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => addTodo({ text: "first todo" })}>
        <Text>Add Todo</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => clearAllTodo()}>
        <Text>Clear All Todos</Text>
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


// npx convex dev
// npx expo