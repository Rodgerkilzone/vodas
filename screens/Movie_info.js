import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown'
import { View, Text, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
const { width } = Dimensions.get('window');
import {
    Ionicons,
    MaterialIcons
} from '@expo/vector-icons';
const season  = [
    {
        label: 'Season 1',
        value: '1',
    },
    {
        label: 'Season 2',
        value: '2',
    }
]; 
export default class Movie_info extends Component {

    static navigationOptions =
        {
            title: 'Details Activity',
        };
constructor (props) {
    super(props)
    this.state = { season:''}
}

    render() {

        return (

            <View style={{ flex: 1, backgroundColor: '#0F161E' }}>
            <ScrollView>
                <View style={{ width: '100%', backgroundColor: 'black', height: width * 0.40 }}>
                    <Image source={require('../assets/img_51.png')} style={{ width: '100%', height: '100%' }} />
                </View>
                 <View style={{ width: '100%', marginTop: 20, paddingLeft: 5 }}>
                        <Text style={{ color: 'white', fontSize: 30,fontWeight:'bold' }}>Tom Clancy's Jack Ryan</Text>
                    </View>

                    <Dropdown
                        // label='Gender'
                        data={season}

                        // style={styles.input}
                        //  underlineColorAndroid = "transparent"
                        ref="season"
                        placeholder="Season 1"
                        //  onSubmitEditing={(event) => { this.refs.password.focus(); }}
                        placeholderTextColor="white"
                        returnKeyType="next"
                        
                        style={{color:'white'}}
                        autoCapitalize="none"
                        containerStyle={{ padding: 5, height: 50, borderRadius: 5, marginLeft: 5,width:120 }}
                        overlayStyle={{ margin: 0, padding: 0 }}
                        onChangeText={(text) => this.setState({ season: text })}
                        value={this.state.season}
                    />
          
            <View style={{ display: 'flex', width: '100%', flexDirection: 'row', marginTop: 10 }}>
                    <TouchableOpacity style={{ borderBottomColor: 'white', borderBottomWidth: 2,flex:1,alignItems:'center' }}><Text style={{ fontSize: 16, fontWeight: 'bold', padding: 10, color: 'white', paddingRight: 10 }}>Episode (2)</Text></TouchableOpacity>

                    <TouchableOpacity style={{ borderBottomColor: 'gray', borderBottomWidth: 2, flex: 1, alignItems: 'center',opacity:0.5  }}><Text style={{ fontSize: 16, fontWeight: 'bold', padding: 10, color: 'white' }}>More Details</Text></TouchableOpacity>

            </View>
                <View style={{ display: 'flex', width: '100%', flexDirection: 'column', marginTop: 10 }}>
                    <View style={{ width: '100%', backgroundColor:'#1B252F',paddingTop:10,paddingBottom:10,paddingLeft:15,marginBottom:2}}>
                    <Text style={{fontWeight:'bold',color:'white',fontSize:16}}>Episode 1</Text>
                    <View style={{width:'100%',displa:'flex',flexDirection:'row',justifyContent:'space-between',paddingRight:10}}> 
                     <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 14,opacity:0.5 }}>Episode title</Text>
                            <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 14, opacity: 0.5 }}>Subscribe</Text>
                     </View>
                      
                    </View>

                        <View style={{ width: '100%', backgroundColor: '#1B252F', paddingTop: 10, paddingBottom: 10, paddingLeft: 15, marginBottom: 2}}>
                        <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 16 }}>Episode 2</Text>
                        <View style={{ width: '100%', displa: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10 }}>
                            <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 14, opacity: 0.5 }}>Episode title</Text>
                            <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 14, opacity: 0.5 }}>Subscribe</Text>
                        </View>

                    </View>

                        <View style={{ width: '100%', backgroundColor: '#1B252F', paddingTop: 10, paddingBottom: 10, paddingLeft: 15, marginBottom: 2}}>
                        <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 16 }}>Episode 3</Text>
                        <View style={{ width: '100%', displa: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10 }}>
                            <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 14, opacity: 0.5 }}>Episode title</Text>
                            <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 14, opacity: 0.5 }}>Subscribe</Text>
                        </View>

                    </View>

                </View>
                <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 18,margin:10 }}>Customers also watched</Text>
                <View style={{ marginLeft: 15 }}>
                   
                    <View style={{ display: 'flex', width: '100%', flexDirection: 'row', marginTop: 3, paddingLeft: 5, justifyContent: 'space-between' }}>

                        <TouchableOpacity style={{ width: '48%', height: width * 0.26, backgroundColor: 'black', borderRadius: 3, marginRight: 10, overflow: 'hidden' }}>
                            <Image source={require('../assets/img_1.png')} style={{ width: '100%', height: '100%' }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: '48%', height: width * 0.26, backgroundColor: 'black', borderRadius: 3, marginRight: 10, overflow: 'hidden' }}>
                            <Image source={require('../assets/img_2.png')} style={{ width: '100%', height: '100%' }} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* <View style={{ marginLeft: 15 }}>
                    <View style={{ width: '100%', marginTop: 30, paddingLeft: 5 }}>
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Top movies ></Text>
                    </View>
                    <View style={{ display: 'flex', width: '100%', flexDirection: 'row', marginTop: 3, paddingLeft: 5, justifyContent: 'space-between' }}>
                        <TouchableOpacity style={{ width: '48%', height: width * 0.26, backgroundColor: 'black', borderRadius: 3, marginRight: 10, overflow: 'hidden' }}>
                            <Image source={require('../assets/img_3.png')} style={{ width: '100%', height: '100%' }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: '48%', height: width * 0.26, backgroundColor: 'black', borderRadius: 3, marginRight: 10, overflow: 'hidden' }}>
                            <Image source={require('../assets/img_4.png')} style={{ width: '100%', height: '100%' }} />
                        </TouchableOpacity>
                    </View>
                </View> */}
                </ScrollView>
            </View>

        );
    }
}