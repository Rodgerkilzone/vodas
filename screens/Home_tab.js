import React, { Component } from 'react';
import ViewPager from '@react-native-community/viewpager';
import { View, Text, Dimensions, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
const { width } = Dimensions.get('window');
import Modal from "react-native-modal";
import Movie_display from './Movie_display'
import {
    Ionicons,
    MaterialIcons
} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


 class Home_tab extends Component {
constructor (props) {
    super(props)
    this.state = {
        isModalVisible: false,imgValue:0
    };
    this.viewPager = React.createRef();
}

    static navigationOptions =
        {
            title: 'Details Activity',
        };
 toggleModal = () => {
            this.setState({ isModalVisible: !this.state.isModalVisible });
        };

   
  componentDidMount() {
//        var c=0;
//   setInterval(() => {
//   this.viewPager.current.setPage(c);
//     c++
//   if(c===8){
//       c=0
//   }

// }, 5000);
  }
 
    render() {
       
        return (

            <View style={{ flex: 1, backgroundColor:'#0F161E' }}>
          
        <ScrollView>
                    <ViewPager style={{height:200,width:width}} 
                    
                    //    style={styles.viewPager}
          initialPage={0}
          scrollEnabled={false}
         
          ref={this.viewPager}
          >
                        <View key={1} style={{ width: width, backgroundColor: 'black', height: width * 0.50 }}>
                            <Image source={require('../assets/img_10.jpg')} style={{ width: '100%', height: '100%' }} />

                        </View>
                     <View key={2} style={{ width: width, backgroundColor: 'black', height: width * 0.50 }}>
                            <Image source={require('../assets/img_5.png')} style={{ width: '100%', height: '100%' }} />

                        </View>
                           <View key={3} style={{ width: width, backgroundColor: 'black', height: width * 0.50 }}>
                            <Image source={require('../assets/img_11.jpg')} style={{ width: '100%', height: '100%' }} />

                        </View>
                         <View key={4} style={{ width: width, backgroundColor: 'black', height: width * 0.50 }}>
                            <Image source={require('../assets/img_4.png')} style={{ width: '100%', height: '100%' }} />


                        </View>
                         <View key={5} style={{ width: width, backgroundColor: 'black', height: width * 0.50 }}>
                            <Image source={require('../assets/img_10.jpg')} style={{ width: '100%', height: '100%' }} />

                        </View>
                     <View key={6} style={{ width: width, backgroundColor: 'black', height: width * 0.50 }}>
                            <Image source={require('../assets/img_5.png')} style={{ width: '100%', height: '100%' }} />

                        </View>
                           <View key={7} style={{ width: width, backgroundColor: 'black', height: width * 0.50 }}>
                            <Image source={require('../assets/img_11.jpg')} style={{ width: '100%', height: '100%' }} />

                        </View>
                         <View key={8} style={{ width: width, backgroundColor: 'black', height: width * 0.50 }}>
                            <Image source={require('../assets/img_4.png')} style={{ width: '100%', height: '100%' }} />

                        </View>
                    </ViewPager>
         
                <View style={{marginLeft:15}}>
            <View style={{width:'100%',backgroundColor:'black',marginTop:30,paddingLeft:5}}>
                <Text style={{color:'white',fontSize:18}}>K24 RECOMMENDATION ></Text>
            </View>
                    <View style={{ display: 'flex', width: '100%', flexDirection: 'row', marginTop: 3, paddingLeft: 5,justifyContent:'space-between'}}>
                    
                            <TouchableOpacity onPress={this.toggleModal} style={{ width: '48%', height: width * 0.26,backgroundColor:'black',borderRadius:3,marginRight:10,overflow:'hidden'}}>
                            <Image source={require('../assets/img_1.png')} style={{ width: '100%', height: '100%' }} />
                        </TouchableOpacity>
                            <TouchableOpacity onPress={this.toggleModal} style={{ width: '48%', height: width * 0.26, backgroundColor: 'black', borderRadius: 3, marginRight: 10, overflow: 'hidden' }}>
                            <Image source={require('../assets/img_2.png')} style={{ width: '100%', height: '100%' }} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ marginLeft: 15 }}>
                    <View style={{ width: '100%', marginTop: 30, paddingLeft: 5 }}>
                        <Text style={{ color: 'white', fontSize: 18,fontWeight:'bold' }}>Top movies ></Text>
                    </View>
                    <View style={{ display: 'flex', width: '100%', flexDirection: 'row', marginTop: 3, paddingLeft: 5, justifyContent: 'space-between' }}>
                            <TouchableOpacity onPress={this.toggleModal} style={{ width: '48%', height: width * 0.26, backgroundColor: 'black', borderRadius: 3, marginRight: 10, overflow: 'hidden' }}>
                            <Image source={require('../assets/img_3.png')} style={{ width: '100%', height: '100%' }} />
                        </TouchableOpacity>
                            <TouchableOpacity onPress={this.toggleModal} style={{ width: '48%', height: width * 0.26, backgroundColor: 'black', borderRadius: 3, marginRight: 10, overflow: 'hidden' }}>
                            <Image source={require('../assets/img_4.png')} style={{ width: '100%', height: '100%' }} />
                        </TouchableOpacity>
                    </View>
                </View>
                </ScrollView>
                <Modal onBackButtonPress={this.toggleModal}  isVisible={this.state.isModalVisible} style={{ flex: 1, margin: 0, padding: 0 }}>
                    <View style={{ flex: 1,margin:0,padding:0 }}>
                        <TouchableOpacity onPress={this.toggleModal}  style={{position:'absolute',top:0,left:0,padding:20,width:60,height:60,zIndex:1000}}><Ionicons name="md-arrow-back" color='white' size={28} /></TouchableOpacity>
                       <Movie_display/>
                    </View>
                </Modal>
            </View>

        );
    }
}

function Tv_shows() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tv_shows!</Text>
    </View>
  );
}
function Movies() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Movies!</Text>
    </View>
  );
}
const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <View style={{flex:1}}>
      <View style={{ backgroundColor: '#0F161E',margin:0,padding:0, height: 60, width: '100%', display: 'flex', flexDirection: 'row',alignItems:'center',justifyContent:'center'}}>
        <View>
            <Text style={{ color: 'red', backgroundColor: 'black',textAlign:'center',fontSize:24,paddingHorizontal:30,paddingVertical:5}}>VODAS</Text>
        </View>
          

        </View>
      <Tab.Navigator 
       tabBarOptions={{
    labelStyle: { fontSize: 14,fontWeight:'bold' },
    activeTintColor:'white',
    indicatorStyle:{backgroundColor:'white'},
    style: { backgroundColor: '#0F161E' },
  }}
      >
        <Tab.Screen name="Home" component={Home_tab} />
        <Tab.Screen name="TV Shows" component={Tv_shows} />
          <Tab.Screen name="Movies" component={Movies} />
      </Tab.Navigator>
    </View>
  );
}
