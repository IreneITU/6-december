import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Dimensions, ImageBackground, TouchableOpacity, Button } from 'react-native';
import * as Location from 'expo-location';
import { Card } from 'react-native-paper';
import MapView, { Marker } from 'react-native-maps';
import Overlay2 from './Overlay2';
import Constants from 'expo-constants';
import { markers } from './utils/ListOfMarkers';
import dispenser from '../assets/dogbag.png';

const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;

export default function HomeScreen({ navigation, route }) {

  const [newImage, setNewImage] = useState(null);
  const [location, setLocation] = useState({
    latitude: 55.641267,
    longitude: 12.517784, // default location if non is granted from phone
  });

  // if we routed: setNewImage to the routed myPicture
  useEffect(() => {
    if (route.params) {
      setNewImage(route.params.myPicture)
    }
  });

  useEffect(() => {
    getLocation();
  }, []); // if changes, run the getLocation agian


  const getLocation = async () => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
    }

    let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.BestForNavigation });
    const { latitude, longitude } = location.coords
    setLocation({ latitude, longitude });
  };

  return (
    <View style={styles.screenContainer}>
      <MapView
        style={styles.map}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}>
        <Marker coordinate={{ latitude: location.latitude, longitude: location.longitude, }} title='You are here' description='Strolling...' />

        {markers.map((marker, index) => (
          <MapView.Marker key={index}
            coordinate={marker.coordinates}
            title='Dog bag dispenser'
            image={dispenser}
          />
        ))}
      </MapView>

      <View style={styles.topContainer} pointerEvents="box-none">
        <TouchableOpacity style={styles.menuButton}
          onPress={() => navigation.openDrawer()}>
          <Text style={styles.paragraph2}> Menu </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton}
          onPress={() => navigation.navigate('Weather')} >
          <Text style={styles.paragraph2}> Weather expert</Text>
        </TouchableOpacity>
      </View>

      <Card style={styles.cardContainer}>
        <Overlay2 newImage={newImage} navigation={navigation} />
      </Card>

    </View>

  );
};

const styles = StyleSheet.create({
  screenContainer: {
    justifyContent: 'space-between',
    ...StyleSheet.absoluteFill,
    paddingTop: Constants.statusBarHeight,

  },
  cardContainer: {
    height: screen.height / 8,
    backgroundColor: 'white',
    padding: 10,
    paddingBottom: 5,
    marginBottom: 35,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  topContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
    marginBottom: 400,
    justifyContent: 'space-between',
  },
  members: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 10,
  },
  paragraph2: {
    fontSize: 13,
    flex: 2,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'lightseagreen',
  },
  menuButton: {
    alignItems: "center",
    backgroundColor: "white",
    borderColor: "lightseagreen",
    borderWidth: 5,
    padding: 16,
    height: 80,
    width: 140,
    borderRadius: 15,
    marginVertical: screen.height / 40,
    margin: screen.width / 20,
  },
});
