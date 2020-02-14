import React, { Component } from 'react';
import BottomTabs from './BottomTabs';
import 'react-native-gesture-handler';
import { Text, ScrollView, Alert, Dimensions, ActivityIndicator, KeyboardAvoidingView, AsyncStorage, StatusBar, View, Image, Button, TextInput, TouchableOpacity, TouchableHighlight, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

 class Login_Activity extends Component {


  constructor(props) {
    super(props);
    this.state = {
      email: '',
    
      password: '',
    
    }
    this.state = {
      isLoading: false,
    }
  }
  getMobileSession() {
 
    if (typeof this.state.email == "undefined" || typeof this.state.password=="undefined" ){

      alert('Please enter the email and password')
    }else{
     
     
      navigation.navigate('BottomTabs')
    
    
    }
  }


  componentDidMount() {
  
   

  }

  render() {
    return (
      <View style={styles.MainContainer}><StatusBar hidden={true} />
     
        <KeyboardAvoidingView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 110 }}
          behavior="padding" enabled >
          <View style={{ width: '100%', alignItems: 'center' }}>
          
            <TouchableOpacity
              style={{
                padding: 3, width: width * 90 / 100, height: 50, borderRadius: 5, alignItems: 'center',backgroundColor:'white',display:'flex',flexDirection:'row',justifyContent:'space-between'
              }}>
              <View style={{ width:'50%'}}>
                     <Image source={require('../assets/g_logo.png')} style={{ width: 30, height: 30,marginLeft:10 }} />
                </View>
           
              <Text style={{ color: 'gray', fontSize: 16,width:'50%'}}>Sign In</Text>
            </TouchableOpacity>
            <Text style={{ color: 'white', fontSize: 18 }}>OR</Text>
            <TextInput style={styles.input}
              //  underlineColorAndroid = "transparent"
              placeholder="Email"
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={(event) => { this.refs.first_name.focus(); }}
              placeholderTextColor="white"
              autoCapitalize="none"
              style={{ backgroundColor: 'rgba(255,255,255,0.5)', color: 'white', margin: 5, fontSize: 16, padding: 5, width: width * 90 / 100, height: 50, borderRadius: 5 }}

              onChangeText={(text) => this.setState({ email: text })}
              value={this.state.email}

            />


            <TextInput style={styles.input}
          
              placeholder="Password"
              ref="password"
              secureTextEntry={true}
              placeholderTextColor="white"
              autoCapitalize="none"
              style={{ backgroundColor: 'rgba(255,255,255,0.5)', color: 'white', fontSize: 16, margin: 5, padding: 5, width: width * 90 / 100, height: 50, borderRadius: 5 }}
              onChangeText={(text) => this.setState({ password: text })}
              value={this.state.password}
            />
            <Text style={{ color: 'white', fontWeight: 'bold' }}>{this.state.msg}</Text>
          </View>
          <TouchableHighlight
          style={{
              padding: 3, width: width * 90 / 100, height: 50, borderRadius: 5,borderColor:'white',borderWidth:2
          }}><Button

            onPress={() => this.getMobileSession()}
       
            title="Sign In"
            color="rgba(0,0,0,0.0)"
          /></TouchableHighlight>
        </KeyboardAvoidingView>
        <View style={{ position: 'absolute', bottom: 10 }}>
        
          <TouchableOpacity
            style={{
              padding: 3, width: width * 90 / 100, height: 30, borderRadius: 5,alignItems:'center'
            }}>
            <Text style={{ color: 'white', fontSize:14}}>Forgot Password?</Text>
        
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 3, width: width * 90 / 100, height: 40, borderRadius: 5, alignItems: 'center',marginTop:20
            }}>
            <Text style={{ color: 'white', fontSize: 14 }}>New here? Sign Up Now</Text>
       
          </TouchableOpacity>
        </View>
        {this.state.loader &&
          <View style={{ position: 'absolute', top: 0, left: 0, height: height, width: width, backgroundColor: 'rgba(0,0,0,0.3)', zIndex: 20, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: 150, height: 100, backgroundColor: 'white', borderRadius: 5, elevation: 4, justifyContent: 'center', alignItems: 'center' }}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>


          </View>}
      </View>
    );
  }
}

export default Login_Activity

const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    // padding: 11

  },

  button: {
    alignItems: 'center',
    backgroundColor: '#43A047',
    padding: 12,
    width: 280,
    marginTop: 12,
  },

  text: {

    color: '#fff'
  }

});