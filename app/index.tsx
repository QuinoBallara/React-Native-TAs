import { Text, View } from "react-native";
import { useState } from "react";
import { TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Index() {
  const [text, setInput] = useState("");

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },

    text: {
      fontSize: 20,
      fontWeight: "bold",
    },
    box: {
      width: 100,
      height: 100,
    }
  });

  const handleSetInput = (text: string) => {
    console.log(text);
    setInput(text);
  }


  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <TextInput style={[styles.box, styles.input]} value={text} onChangeText={handleSetInput} editable />
        <Text style={[styles.text, styles.box]}>{text}</Text>
      </View>
    </GestureHandlerRootView>
  );
}
