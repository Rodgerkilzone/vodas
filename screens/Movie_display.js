import React, { Component } from 'react';
import {
    Ionicons,
    MaterialIcons
} from '@expo/vector-icons';
import { View, Text, Dimensions, StatusBar, Image, ScrollView, TouchableOpacity, TouchableHighlight } from 'react-native';
const { width } = Dimensions.get('window');
import { Video } from 'expo-av';
import { ScreenOrientation } from 'expo';
export default class Movie_display extends Component {

 
constructor (props) {
    super(props)
    this.state={play:false}
     this.videoRef  = React.createRef();
}
    playVideo = () => {
        this.setState({ play: !this.state.play });
    };
     changeScreenOrientation=async ()=>{
  await ScreenOrientation.allowAsync(ScreenOrientation.Orientation.LANDSCAPE);
}
    render() {

        return (

            <View style={{ flex: 1, backgroundColor: '#0F161E' }}>
              
            <ScrollView>
                {/* <View style={{ width: '100%', backgroundColor: 'black' }}>
                        {!this.state.play &&
                        <TouchableOpacity onPress={this.playVideo}  style={{width:width, height: width*0.6,position:'absolute',zIndex:3,justifyContent:'center',alignItems:'center' }}><Image source={require('../assets/play.png')} style={{ width: width * 0.25, height: width * 0.25}} /></TouchableOpacity>
                        }
                        <TouchableHighlight onPress={this.playVideo}> */}
                <Video

                        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                        rate={1.0}
                        volume={1.0}
                        isMuted={false}
                        resizeMode="cover"
                          ref={(video) => this.videoRef = video}
                            shouldPlay={this.state.play}
                        isLooping
                        useNativeControls={true}
                        style={{ width: width, height: width*0.6 }}
                />
                {/* </TouchableHighlight> */}
                     {/* <View style={{width:'100%',height:40,backgroundColor:'white',display:'flex', flexDirection: 'row',alignItems:'center',justifyContent:'flex-start',paddingHorizontal:10}}>
                            <TouchableOpacity onPress={() => {
  this.videoRef.playAsync()
}} style={{width:'10%'}}>
                              <Ionicons name="md-play"  style={{ fontSize: 28, color: 'black' }} />
                             </TouchableOpacity>
                              <View style={{height:5,width:'75%',backgroundColor:'#e5e5e5'}}></View>
                         
 <TouchableOpacity onPress={() => {
     this.videoRef.presentFullscreenPlayer()
      this.changeScreenOrientation()
}}  style={{width:'10%',marginLeft:10,paddingLeft:5}}>
                              <Ionicons name="md-qr-scanner"  style={{ fontSize: 28, color: 'black' }} />
                             </TouchableOpacity>
                              
                     </View>    */}
                {/* </View> */}

                   
                <View style={{display: 'flex', width: '100%', flexDirection: 'row'}}>
     <Text style={{ fontSize: 16, fontWeight: 'bold', padding: 10, color: '#6BE09B' }}>30 Views</Text>
                <Text style={{ fontSize: 14, fontWeight: 'bold', padding: 10, color: 'gray' }}>2019-09-02 21:35:35 18+ 9 likes</Text>

                </View>
                <Text style={{ fontSize: 16, fontWeight: 'bold', padding: 10, color: 'white' }}>Likes Life</Text>
                <Text style={{ fontSize: 14, fontWeight: 'bold', padding: 10, color: 'gray' }}>Life Likes</Text>
                <View style={{ display: 'flex', width: '100%', flexDirection: 'row',justifyContent:'space-around'}}>
                    <TouchableOpacity style={{ display: 'flex', flexDirection: 'column',justifyContent:'center',alignItems:'center'}}>
                        <Ionicons name="md-add" size={24} style={{ fontSize: 28, color: 'white' }} />
  <Text style={{ fontSize: 14, fontWeight: 'bold', padding: 10, color: 'white' }}>My List</Text>
</TouchableOpacity>
                    <TouchableOpacity style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Ionicons name="md-star" size={24} style={{ fontSize: 28, color: 'white' }} />
  <Text style={{ fontSize: 14, fontWeight: 'bold', padding: 10, color: 'white' }}>Rate</Text>
</TouchableOpacity>
                    <TouchableOpacity style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Ionicons name="md-share" size={24} style={{ fontSize: 28, color: 'white' }} />
                        <Text style={{ fontSize: 14, fontWeight: 'bold', padding: 10, color: 'white' }}>Share</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Ionicons name="md-download" size={24} style={{ fontSize: 28, color: 'white' }} />
  <Text style={{ fontSize: 14, fontWeight: 'bold', padding: 10, color: 'white' }}>Download</Text>
</TouchableOpacity>
               

                </View>
                     <View style={{ display: 'flex', width: '100%', flexDirection: 'row',marginTop:10 }}>
                     <TouchableOpacity style={{borderTopColor:'red',borderTopWidth:5}}><Text style={{ fontSize: 16, fontWeight: 'bold', padding: 10, color: 'white',paddingRight:10 }}>MORE LIKE THIS</Text></TouchableOpacity>
                     
                        <TouchableOpacity style={{ borderTopColor: '#0F161E', borderTopWidth: 5 }}><Text style={{ fontSize: 16, fontWeight: 'bold', padding: 10, color: 'white' }}>TRAILERS AND MORE</Text></TouchableOpacity> 

                    </View>
                <View style={{ marginLeft: 10 }}>
                  
                    <View style={{ display: 'flex', width: '100%', flexDirection: 'row', marginTop: 3, paddingLeft: 5, justifyContent: 'space-between' }}>

                            <TouchableOpacity style={{ width: width * 0.30, height: width*0.48 , backgroundColor: 'black', borderRadius: 3, marginRight: 10, overflow: 'hidden' }}>
                            <Image source={require('../assets/img_7.png')} style={{ width: '100%', height: '100%' }} />
                        </TouchableOpacity>
                            <TouchableOpacity style={{ width: width * 0.30, height: width * 0.48,  backgroundColor: 'black', borderRadius: 3, marginRight: 10, overflow: 'hidden' }}>
                            <Image source={require('../assets/img_8.png')} style={{ width: '100%', height: '100%' }} />
                        </TouchableOpacity>
                            <TouchableOpacity style={{ width: width * 0.30, height: width * 0.48, backgroundColor: 'black', borderRadius: 3, marginRight: 10, overflow: 'hidden' }}>
                                <Image source={require('../assets/img_9.png')} style={{ width: '100%', height: '100%' }} />
                            </TouchableOpacity>
                    </View>
                </View>

                </ScrollView>
            </View>

        );
    }
}