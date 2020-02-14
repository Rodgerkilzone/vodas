import React, { Component } from 'react';

import { View, Text, TextInput } from 'react-native';
import {
    Ionicons,
    MaterialIcons
} from '@expo/vector-icons';
export default class Search_movie extends Component {

    static navigationOptions =
        {
            title: 'Details Activity',
        };

    render() {

        return (

            <View style={{height:'100%',backgroundColor:'#121212',display:'flex',flexDirection:'column',justifyContent:'center'}}>
               
                    <View style={{ width: '98%', height: 50, borderRadius: 3 , backgroundColor: '#242424', alignItems: 'center',display:'flex',flexDirection:'row',justifyContent:'center',alignSelf:'center'}}>
                    <Ionicons name="md-search" size={24} style={{ lineHeight: 50, fontSize: 24, color: 'gray', paddingHorizontal: 10 }} />
                        <TextInput
                            underlineColorAndroid="transparent"
                            ref="institute"
                            placeholder="Enter Something..."
                            returnKeyType="next"
                     
                            placeholderTextColor="gray"
                            autoCapitalize="none"
                            style={{ fontSize: 16, margin: 5, padding: 5,flex:1, height: 50, color: 'white'}}
                       
                        />
                       <Text style={{lineHeight:50,fontSize:24,color:'gray',paddingHorizontal:10}}>X</Text>
                    </View>
 
                <View style={{ flex: 1, alignItems: 'flex-start', padding: 20, backgroundColor:'#242424',margin:5}}>
                    <Text style={{color:'white',textAlign:'left',fontSize:20}}>Find what to watch next.</Text>
                    <Text style={{  color: 'gray', textAlign: 'left', fontSize: 16 }}>Search porgrams for the commute,</Text>
                    <Text style={{ color: 'gray', textAlign: 'left', fontSize: 16 }}>films to help you unwind or your go-to genre</Text>
                </View>
            </View>

        );
    }
}