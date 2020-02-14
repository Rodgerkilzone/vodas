import React, { Component } from 'react';
import {
    Ionicons,
    MaterialIcons
} from '@expo/vector-icons';
import { View, Text, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native';
const { width } = Dimensions.get('window');
export default class Movie_display extends Component {

    static navigationOptions =
        {
            title: 'Details Activity',
        };

    render() {

        return (

            <View style={{ flex: 1, backgroundColor: '#1A1A1A'}}>
          
             <View style={{backgroundColor:'#121212'}}>
                  <Text style={{ fontSize: 24, fontWeight: 'bold', padding: 10, color: 'white' }}>Categories</Text>
              
             </View>
                 <ScrollView>
                <View style={{ marginLeft: 10 }}>
                  
                    <View style={{ display: 'flex',flex:1, width: '100%', flexDirection: 'row', marginTop: 3, paddingLeft: 5, justifyContent: 'space-between',flexWrap:'wrap',backgroundColor:'#1A1A1A' }}>

                            <TouchableOpacity style={{ width: width * 0.45, height: width*0.45 , backgroundColor: 'black', borderRadius: 3, marginRight: 10, overflow: 'hidden',marginBottom:10 }}>
                            <Image source={require('../assets/c_1.png')} style={{ width: '100%', height: '100%' }} />
                        </TouchableOpacity>
                            <TouchableOpacity style={{ width: width*0.45, height: width * 0.45,  backgroundColor: 'black', borderRadius: 3, marginRight: 10, overflow: 'hidden',marginBottom:10  }}>
                            <Image source={require('../assets/c_2.png')} style={{ width: '100%', height: '100%' }} />
                        </TouchableOpacity>
                            <TouchableOpacity style={{ width: width*0.45, height: width * 0.45, backgroundColor: 'black', borderRadius: 3, marginRight: 10, overflow: 'hidden',marginBottom:10  }}>
                                <Image source={require('../assets/c_3.png')} style={{ width: '100%', height: '100%' }} />
                            </TouchableOpacity>
                               <TouchableOpacity style={{ width: width*0.45, height: width * 0.45, backgroundColor: 'black', borderRadius: 3, marginRight: 10, overflow: 'hidden',marginBottom:10  }}>
                                <Image source={require('../assets/c_4.png')} style={{ width: '100%', height: '100%' }} />
                            </TouchableOpacity>
                               <TouchableOpacity style={{ width: width*0.45, height: width * 0.45, backgroundColor: 'black', borderRadius: 3, marginRight: 10, overflow: 'hidden',marginBottom:10  }}>
                                <Image source={require('../assets/c_5.png')} style={{ width: '100%', height: '100%' }} />
                            </TouchableOpacity>
                    </View>
                </View>

                </ScrollView>
            </View>

        );
    }
}