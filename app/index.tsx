import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

export default function Index() {
  const [valor, setValor] = useState(0);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightcoral',

    },
    text: {
      fontSize: 30,
      margin: 10,
      fontWeight: "400",
      textAlign: 'center',
    },
    button: {
      margin: 10,
      padding: 20,
      fontSize: 298275897,
      backgroundColor: 'white',
      width: 200,
    }
  })
  return (
    <View style={styles.container}>

      <Text style={styles.text}>Contador:</Text>
      <Text style={styles.text}>{valor}</Text>
      <TouchableOpacity style={styles.button} onPress={() => { setValor(valor + 1) }} activeOpacity={0.7} >
        <Text style={styles.text}>Aumentar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => { setValor(valor - 1) }} >
        <Text style={styles.text}>Disminuir</Text>
      </TouchableOpacity>

    </View>
  );


}
