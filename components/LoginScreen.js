import React, {useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';



export default function LoginScreen (navigation) {
const [email, setEmail] =useState('');
const [password, setpassword] =useState ('');

return (
  <View style={styles.container}>
    <Text style={styles.headline}>PUP</Text>
   {/* <Image style={styles.image} source={require('./assets/DogWalkers.png')}/> */}
 
    <StatusBar style="auto" />
    <View style={styles.textInputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Email."
        placeholderTextColor="#003f5c"
        onChangeText={(email) => setEmail(email)}
      />
    </View>

    <View style={styles.textInputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Password."
        placeholderTextColor="#003f5c"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
    </View>
      <TouchableOpacity onPress={() => navigation.navigate('NewPassword')}>
      <Text style={styles.help}>Forgot Password?</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.login}
    onPress={() => navigation.navigate('HomeScreen')}>
      <Text style={styles.loginText}>LOGIN</Text>
    </TouchableOpacity>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BBE6DD',
    alignItems: 'center',
    justifyContent: 'center',
    },
    headline: {
      color: '#539888',
      fontSize: 80,
      marginBottom:10
      },
    

image: {
  marginBottom: 40,
},

textInputView: {
  width:'80%',
  backgroundColor:'#3C8979',
  borderRadius:25,
  height:50,
  marginBottom:5,
  justifyContent:'center',
  padding:20
},


TextInput: {
  height:50,
  color:'white'

},

help: {
  color:'#000000',
  fontSize:11

},

login: {
  backgroundColor: '#3C8979',
  width: "50%",
  borderRadius: 25,
  alignItems:'center',
  fontWeight: 'bold',
  padding: '2%',
  marginTop: '5%'
  },
  
});
