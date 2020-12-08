import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Overlay2({navigation, newImage }) {

  if (newImage == null) { newImage = "https://i.imgur.com/KctSLca.jpeg" };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Camera')}
      >
        <Image style={styles.logo}
          source={source = { uri: newImage }}
        />

      </TouchableOpacity>
      <Text style={styles.paragraph}>
        Find a dog bag dispenser nearby
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    alignItems: 'center',
    flexDirection: 'row-reverse',
    padding: 20,
    height: 90,
  },

  paragraph: {
    flex: 1,
    margin: 5,
    marginTop: 0,
    fontWeight: 'bold',
    color: '#539888',
    textAlign: 'center',
  },

  logo: {
    height: 128,
    width: 128,
    borderRadius: 90
  }

});
