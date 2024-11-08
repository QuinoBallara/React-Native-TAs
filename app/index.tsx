import { Text, View, Image, StyleSheet, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";

export default function Index() {
  const [image, setImage] = useState<string>();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }

  const takeImage = async () => {
    await ImagePicker.requestCameraPermissionsAsync()
    ImagePicker.getCameraPermissionsAsync().then((res) => {
      if (res.granted) {
        ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        }).then((result) => {
          if (!result.canceled) {
            setImage(result.assets[0].uri);
          }
        });
      } else {
        Alert.alert("Permission required", "You need to allow camera permissions to take a photo");
      }
    })
  }

  const styles = StyleSheet.create({
    button: {
      backgroundColor: "blue",
      padding: 15,
      borderRadius: 5,
    },
    buttonText: {
      color: "white",
      fontSize: 20,
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
    },
    container: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "center",
      gap: 10
    }
  })

  return (
    <GestureHandlerRootView
      style={styles.container}
    >
      <Text style={styles.title}>Choose your favorite photo:</Text>
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Choose photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={takeImage}>
        <Text style={styles.buttonText}>Take photo</Text>
      </TouchableOpacity>
      {image && (
        <View>
          <Image source={{ uri: image }} style={{ width: 500, height: 500 }} />
        </View>
      )}
    </GestureHandlerRootView>
  );
}
