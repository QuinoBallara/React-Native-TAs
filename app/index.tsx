import { Text, TouchableOpacity, View, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Movie } from "@/components/Movie";
import { useWindowDimensions } from "react-native";

export default function Index() {
  const [title, setTitle] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [search, setSearch] = useState(false);

  const windowHeight = useWindowDimensions().height;
  const windowWidth = useWindowDimensions().width;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "center",
      gap: windowHeight / 60,
    },
    button: {
      backgroundColor: "coral",
      padding: windowWidth / 50,
      borderRadius: 5,
      color: "white",
    },
    inputs: {
      backgroundColor: "white",
      padding: windowWidth / 30,
      borderRadius: 5,
      width: windowWidth / 1.5,
      textAlign: "center",
    },
    title: {
      fontSize: windowWidth / 8,
      fontWeight: "bold",
      color: 'coral',
      marginBottom: windowHeight / 100
    }
  })

  const searchMovie = () => {
    if (title.length > 0) {
      setSearch(!search)
    }
  }
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.title}>Moogle</Text>
      <TextInput style={styles.inputs} placeholder="Title" value={title} onChangeText={setTitle} />
      <TextInput style={styles.inputs}
        placeholder="Release Year (optional)"
        value={releaseYear}
        onChangeText={setReleaseYear} />
      <TouchableOpacity style={styles.button} onPress={() => { searchMovie() }}>
        <Text style={styles.button} >Search</Text>
      </TouchableOpacity>
      <Movie title={title} releaseYear={releaseYear} search={search} />
    </View>
  );
}
