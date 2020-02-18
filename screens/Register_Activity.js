import React, { Component } from 'react';
import Login_Activity from './Login_Activity';
import { Text, ScrollView, Alert, Dimensions, ActivityIndicator, KeyboardAvoidingView, AsyncStorage, StatusBar, View, Image, Button, TextInput, TouchableOpacity, TouchableHighlight, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

class Register_Activity extends Component {


  constructor(props, navigation) {
    super(props, navigation);
    this.state = {
      email: '',

      password: '',
      phone:'',
      password_c:''

    }
    this.state = {
      isLoading: false,
    }
  }
  getMobileSession() {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (typeof this.state.email == "undefined" || typeof this.state.phone == "undefined" || typeof this.state.password == "undefined" || typeof this.state.password_c == "undefined"){
      alert('Please fill in all the blank spaces')
    }else{
      if (this.state.password !== this.state.password_c){
        alert('Wrong password confirmation')
      }else{
        if (this.state.password.length<6){
          alert('The minimum password length is 6 characters')
        }else{
    if (this.state.email.match(email)) {
        if (this.state.phone.match(phoneno))
        {
     //Backend communication logic will be done here
          alert('Registration Successfull')
    }
    else {
     alert('Please enter a valid phone number')
      
    }
     
    }
    else {
      alert("Please enter a valid Email Address");

    }
      }
  }


  }
  }


  componentDidMount() {



  }

  render() {
    return (
      <View style={styles.MainContainer}><StatusBar hidden={true} />
        <StatusBar
          barStyle="dark-content"
          hidden={false} />
        <KeyboardAvoidingView style={{}}
          behavior="padding" enabled >
          <View style={{ width: '100%', alignItems: 'center' }}>

            <Text style={{ color: 'white', fontSize: 24,fontWeight:'bold' }}>VODAS</Text>
            <Text style={{ color: 'white', fontSize: 18 }}>SIGN UP</Text>
            <TextInput style={styles.input}
           
              placeholder="Email"
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={(event) => { this.refs.phone.focus(); }}
              placeholderTextColor="white"
              autoCapitalize="none"
              style={{ backgroundColor: 'rgba(255,255,255,0.5)', color: 'white', margin: 5, fontSize: 16, padding: 5, width: width * 90 / 100, height: 50, borderRadius: 5 }}
              selectionColor='white'
              onChangeText={(text) => this.setState({ email: text })}
              value={this.state.email}

            />

            <TextInput style={styles.input}
              //  underlineColorAndroid = "transparent"
              placeholder="Phone Number"
              keyboardType="numeric"
              returnKeyType="next"
              onSubmitEditing={(event) => { this.refs.password.focus(); }}
              placeholderTextColor="white"
              autoCapitalize="none"
              ref='phone'
              maxLength={10}
              style={{ backgroundColor: 'rgba(255,255,255,0.5)', color: 'white', margin: 5, fontSize: 16, padding: 5, width: width * 90 / 100, height: 50, borderRadius: 5 }}
              selectionColor='white'
              onChangeText={(text) => this.setState({ phone: text })}
              value={this.state.phone}

            />
            <TextInput style={styles.input}
              selectionColor='white'
              placeholder="Password"
              ref="password"
              secureTextEntry={true}
              placeholderTextColor="white"
              onSubmitEditing={(event) => { this.refs.password_c.focus(); }}
              autoCapitalize="none"
              style={{ backgroundColor: 'rgba(255,255,255,0.5)', color: 'white', fontSize: 16, margin: 5, padding: 5, width: width * 90 / 100, height: 50, borderRadius: 5 }}
              onChangeText={(text) => this.setState({ password: text })}
              value={this.state.password}
            />
            <TextInput style={styles.input}
              selectionColor='white'
              placeholder="Confirm Password"
              ref="password_c"
              secureTextEntry={true}
              placeholderTextColor="white"
              autoCapitalize="none"
              style={{ backgroundColor: 'rgba(255,255,255,0.5)', color: 'white', fontSize: 16, margin: 5, padding: 5, width: width * 90 / 100, height: 50, borderRadius: 5 }}
              onChangeText={(text) => this.setState({ password_c: text })}
              value={this.state.password_c}
            />
            <Text style={{ color: 'white', fontWeight: 'bold' }}>{this.state.msg}</Text>
          </View></KeyboardAvoidingView>
          <TouchableHighlight
            style={{
              padding: 3, width: width * 90 / 100, height: 50, borderRadius: 5, borderColor: 'white', borderWidth: 2
            }}><Button

              onPress={() => this.getMobileSession()}

              title="Sign Up"
              color="rgba(0,0,0,0.0)"
            /></TouchableHighlight>
          <TouchableHighlight
            style={{
              padding: 3, width: width * 90 / 100, marginTop: 20, height: 50, borderRadius: 5, borderColor: 'white', borderWidth: 2
            }}><Button

              onPress={() => { this.props.navigation.navigate('Login_Activity') }}

              title="Login"
              color="rgba(0,0,0,0.0)"
            /></TouchableHighlight>
       
        <View style={{ marginTop: 20 }}>

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


export default Register_Activity


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