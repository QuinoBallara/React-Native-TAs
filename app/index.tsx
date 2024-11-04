import { Text, View } from "react-native";
import { useState } from "react";
import { TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Index() {
  const [text, setInput] = useState("");

  const styles = StyleSheet.create({
    container: {

    },
    text: {
      fontSize: 50,
      fontWeight: "bold",
      textAlign: "center",
      padding: 10,
      marginTop: 10
    },
    input: {
      height: 50,
      margin: 10,
      padding: 10,
      borderWidth: 1,
      borderColor: "black",
    }
  });

  const handleSetInput = (text: string) => {
    console.log(text);
    setInput(text);
  }


  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <TextInput style={[styles.input]} value={text} onChangeText={handleSetInput} placeholder="Enter text" editable />
        <Text style={[styles.text]}>{text}</Text>
      </View>
    </GestureHandlerRootView>
  );
}
