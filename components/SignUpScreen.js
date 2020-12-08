import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Alert } from 'react-native';


export default class SignUpScreen extends React.Component {
state={
  email: "",
  password:""
}
  signupPressed = ()=>{
    Alert.alert("Fjern alert og gå til første side i selve appen")
  }

  GoToLogIn = ()=> {
    Alert.alert("Fjern alert og gå til side med login")
  }
render() {
return (
<View style={styles.container}>
<Text style={styles.headline}>PUP</Text>



<View style= {styles.textInputView}>
<TextInput style={styles.textInput}
placeholder= 'Email'
placeholderTextColor= '#FFFFFF'
onChangeText={text => this.setState({email:text})}/>
</View>
<View style= {styles.textInputView}>
<TextInput 
style={styles.textInput}
secureTextEntry
placeholder= 'Password'
placeholderTextColor= '#FFFFFF'
onChangeText={text => this.setState({password:text})}/>
</View>

<View style= {styles.textInputView}>
<TextInput 
style={styles.textInput}
secureTextEntry
placeholder= 'Repeat password'
placeholderTextColor= '#FFFFFF'
onChangeText={text => this.setState({password:text})}/>
</View>

<TouchableOpacity style={styles.signup} onPress={this.signupPressed}>
  <Text style={styles.signupText}>Sign Up</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.GoToLogIn} onPress={this.GoToLogIn}>
<Text style={styles.signupText}>Go back to Log In</Text>
</TouchableOpacity>

</View>
);
};
};

const styles = StyleSheet.create({
image:{

},
headline: {
  color: '#539888',
  fontSize: 80,
  marginBottom:10
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

textInput: {
  height:50,
  color:'white'
},

help:{
  color:'#000000',
  fontSize:11
},
container: {
flex: 1,
backgroundColor: '#BBE6DD',
alignItems: 'center',
justifyContent: 'center',
},
loginText:{
color: '#3C8979',
fontSize:  26,
},

signupText:{
color: '#FFFFFF',
fontSize:  26,
},

signup: {
backgroundColor: '#3C8979',
width: "80%",
borderRadius: 50,
alignItems:'center',
fontWeight: 'bold',
padding: '2%',
marginTop: '35%'
},

GoToLogIn: {
  backgroundColor: '#BBE6DD',
  width: '80%',
  borderRadius: 50,
  alignItems:'center',
  fontWeight: 'bold',
  padding: '2%',
  marginTop: '5%'
  },
});
