import React, { Component } from 'react';
import BottomTabs from './BottomTabs';
import Register_Activity from './Register_Activity';
// import 'react-native-gesture-handler';
import { Text, ScrollView, Alert, Dimensions, ActivityIndicator, KeyboardAvoidingView, AsyncStorage, StatusBar, View, Image, Button, TextInput, TouchableOpacity, TouchableHighlight, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { enableScreens } from 'react-native-screens';
// const Stack = createStackNavigator();
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
import {
  createAppContainer,

  createSwitchNavigator,
} from 'react-navigation'
 class Login_Activity extends Component {


  constructor(props,navigation) {
    super(props,navigation);
    this.state = {
      email: '',
    
      password: '',
    
    }
    this.state = {
      isLoading: false,
    }
  }
  getMobileSession() {
    var email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (typeof this.state.email == "undefined" || typeof this.state.password=="undefined" ){

      alert('Please enter the email and password')
    }else{
      if (this.state.email.match(email)) {
        //BACKEND CONNECTION LOGIC
     this.props.navigation.navigate('BottomTabs')
      }else{
        alert("Please enter a valid Email Address");
      }
   
    }
  }


  componentDidMount() {
  
   

  }

  render() {
    return (
      <View style={styles.MainContainer}><StatusBar hidden={true} />
     <StatusBar   
       barStyle = "dark-content" 
       hidden={false} />  
        <KeyboardAvoidingView style={{ }}
          behavior="padding" enabled >
          <View style={{ width: '100%', alignItems: 'center' }}>
            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>VODAS</Text>
            <Text style={{ color: 'white', fontSize: 18 }}>SIGN IN</Text>
            <TextInput style={styles.input}
            
              placeholder="Email"
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={(event) => { this.refs.password.focus(); }}
              placeholderTextColor="white"
              autoCapitalize="none"
              style={{ backgroundColor: 'rgba(255,255,255,0.5)', color: 'white', margin: 5, fontSize: 16, padding: 5, width: width * 90 / 100, height: 50, borderRadius: 5 }}
              selectionColor='white'
              onChangeText={(text) => this.setState({ email: text })}
              value={this.state.email}

            />


            <TextInput style={styles.input}
            selectionColor='white'
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
          <TouchableHighlight
            style={{
              padding: 3, width: width * 90 / 100,marginTop:20, height: 50, borderRadius: 5, borderColor: 'white', borderWidth: 2
            }}><Button

              onPress={()=>{this.props.navigation.navigate('Register_Activity')}}

              title="Register"
              color="rgba(0,0,0,0.0)"
            /></TouchableHighlight>
        </KeyboardAvoidingView>
        <View style={{marginTop:20}}>
        
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


const MainApp = createSwitchNavigator(
  {

    Login_Activity: Login_Activity,
    BottomTabs: BottomTabs,
    Register_Activity:Register_Activity
  
  },
  {
    initialRouteName: 'Login_Activity',
  }
)
export default createAppContainer(MainApp);
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