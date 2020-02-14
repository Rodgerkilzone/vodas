import React, { Component } from 'react';
import {
    Ionicons,
    MaterialIcons
} from '@expo/vector-icons';
import { View, Text, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native';
const { height,width} = Dimensions.get('window');
export default class Offline extends Component {

    static navigationOptions =
        {
            title: 'Details Activity',
        };

    render() {

        return (

            <View style={{ flex: 1, backgroundColor: '#1A1A1A' }}>
         
             <View style={{backgroundColor:'#121212'}}>
                  <Text style={{ fontSize: 22, padding: 10, color: 'white' }}>Offline Videos</Text>
              
             </View>
                  <ScrollView>
              
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',minHeight:height-100 }}>

                            <View style={{ width: width * 0.45, height: width*0.45 , backgroundColor: 'black', borderRadius: 3, marginRight: 10, overflow: 'hidden',marginBottom:10 }}>
                            <Image source={require('../assets/offline.png')} style={{ width: '100%', height: '100%' }} />
                        </View>
                           
                    </View>
                {/* </View> */}

                </ScrollView>
            </View>

        );
    }
}