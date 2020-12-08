import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
//import dog from './dog.png';



export default class LoginScreen extends React.Component {
state={
  email: ""
}
  sendMail = ()=>{
    Alert.alert('You will soon recieve a mail with your new password')
  }

  GoTologin = ()=> {
    Alert.alert('Fjern alert og gå til LoginScreen')
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

<TouchableOpacity style={styles.newPassword} onPress={this.sendMail}>
<Text style={styles.newPasswordText}>Ask for new password</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.GoToLogIn} onPress={this.GoTologin}>
<Text style={styles.GoToLogIn}>Go back to Log In</Text>
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
  backgroundColor:'#539888',
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

newPasswordText:{
color: '#FFFFFF',
fontSize:  10,
},

newPassword: {
backgroundColor: '#3C8979',
width: "80%",
borderRadius: 50,
alignItems:'center',
fontWeight: 'bold',
padding: '2%',
marginTop: '5%'
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
