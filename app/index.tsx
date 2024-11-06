import { Text, TouchableOpacity, View, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Movie } from "@/components/Movie";

export default function Index() {
  const [title, setTitle] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [search, setSearch] = useState(false);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "center",
      gap: 10,
    },
    button: {
      backgroundColor: "coral",
      padding: 10,
      borderRadius: 5,
      color: "white",
    },
    inputs: {
      backgroundColor: "white",
      padding: 10,
      borderRadius: 5,
      width: 300,
      textAlign: "center",
    },
    title: {
      fontSize: 60,
      fontWeight: "bold",
      color: 'coral',
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
