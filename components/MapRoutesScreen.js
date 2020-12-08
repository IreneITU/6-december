import { Text, View, Button, TouchableOpacity } from 'react-native';
import React from "react";
export default function MapRoutesScreen({ navigation }) {


  return (
    <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
      }}>

    <Button
        title='Get suggested route and go to map'
    />


    </View>
  );
}


