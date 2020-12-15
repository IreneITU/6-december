import { Text, View, Button, TouchableOpacity } from 'react-native';
import React from "react";
export default function ProfilePageScreen({ navigation }) {

  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around'
    }}>
      <Button
        title='indsæt billede her'
        onPress={() => navigation.navigate('Camera')}
      />
    </View>
  );
}


