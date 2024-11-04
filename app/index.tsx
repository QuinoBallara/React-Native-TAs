import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { Task } from "@/types/task";
import { GestureHandlerRootView, TextInput } from "react-native-gesture-handler";
import { TaskList } from "@/components/TaskList";
import { styles } from "@/styles/appStyles";

export default function Index() {

  const [task, setTask] = useState<Task>({
    id: "",
    title: "",
    description: ""
  })
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");


  const addTask = () => {
    if (title.length > 0 && description.length > 0) {
      setTask({
        id: "",
        title: title,
        description: description
      })
      setTitle("");
      setDescription("");
    }
  }

  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Text style={styles.title}>Task List</Text>
      <TextInput style={styles.input} placeholder="Title" value={title} onChangeText={setTitle} />
      <TextInput style={styles.input} placeholder="Description" value={description} onChangeText={setDescription} />
      <TouchableOpacity style={styles.button} onPress={addTask}>
        <Text style={styles.button}>
          Add Task
        </Text>
      </TouchableOpacity>
      <TaskList task={task} />
    </GestureHandlerRootView>
  );
}
