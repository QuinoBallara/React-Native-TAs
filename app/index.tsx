import { Text, TouchableOpacity, View, TextInput, StyleSheet, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { Movie } from "@/components/Movie";
import { useWindowDimensions } from "react-native";
import { Platform } from "react-native";
import * as Location from 'expo-location';

export default function Index() {
  const [title, setTitle] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [search, setSearch] = useState(false);

  const [displayCurrentAddress, setDisplayCurrentAddress] = useState('Location Loading.....');
  const [locationServicesEnabled, setLocationServicesEnabled] = useState(false)

  useEffect(() => {
    checkIfLocationEnabled();
    getCurrentLocation();
  }, [])

  const checkIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {                     //if not enable 
      Alert.alert('Location not enabled', 'Please enable your Location', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    } else {
      setLocationServicesEnabled(enabled)
    }
  }
  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    console.log(status);
    if (status !== 'granted') {
      Alert.alert('Permission denied', 'Allow the app to use the location services', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    }

    const { coords } = await Location.getCurrentPositionAsync();
    console.log(coords)

    if (coords) {
      const { latitude, longitude } = coords;
      console.log(latitude, longitude);

      let responce = await Location.reverseGeocodeAsync({
        latitude,
        longitude
      });
      console.log(responce);
      for (let item of responce) {
        let address = `${item.name} ${item.city} ${item.postalCode}`
        setDisplayCurrentAddress(address)
      }
    }
  }

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


  if (Platform.OS === 'web' || Platform.OS === 'ios') { //los usuarios de android no merecen ver la app
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
  } else if (Platform.OS === 'android') {
    return (
      <View
        style={styles.container}
      >
        <Text style={styles.title}>Moogle</Text>
        <Text style={{ color: 'coral' }}>Android users are not welcome here</Text>
        <Text>Get doxxed dummy</Text>
        <Text>Location: {displayCurrentAddress}</Text>
      </View>
    )
  }
}
