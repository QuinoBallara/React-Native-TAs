import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { GestureHandlerRootView, NativeViewGestureHandler, TouchableOpacity } from "react-native-gesture-handler";

export default function Index() {
  const [image, setImage] = useState(true)

  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={{ uri: "https://picsum.photos/200/300" }} style={{ width: 400, height: 400 }} />
      <TouchableOpacity onPress={() => setImage(!image)} style={{
        backgroundColor: "blue",
        padding: 10,
        marginTop: 10,
      }} >
        <Text style={{
          color: "white",
          fontSize: 20,
        }}>Change image</Text>
      </TouchableOpacity>
    </GestureHandlerRootView>
  );
}
