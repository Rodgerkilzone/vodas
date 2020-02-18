import * as React from 'react';
import { Text, View,TouchableOpacity,ScrollView,Image,Button,Dimensions,Switch } from 'react-native';
import {
    Ionicons,
    MaterialIcons
} from '@expo/vector-icons';
import Modal from "react-native-modal";
const { height } = Dimensions.get('window');
export default class More extends React.Component  {
  constructor (props) {
    super(props)
    this.state = {
        settingsModal: false, accountModal: false, planModal: false,pushNotif:true,emailNotif:true
    };
}

togglePushNotif = () => {
   this.setState({ pushNotif: !this.state.pushNotif });
  
}
toggleEmailNotif = () => {
   this.setState({ emailNotif: !this.state.emailNotif });
  
}
 toggleSettingsModal = () => {
            this.setState({ settingsModal: !this.state.settingsModal });
        };
         toggleAccountModal = () => {
            this.setState({ accountModal: !this.state.accountModal });
            
        };
          togglePlanModal = () => {
            this.setState({ planModal: !this.state.planModal });
      
        };
  render(){
  return (
    <View style={{ flex: 1, backgroundColor:'#121212'}}>
    <View style={{width:'100%',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
    <View style={{width:100,height:120,margin:10}}>
 <Image source={require('../assets/user.png')} style={{ width:100, height:100}} />
<Text style={{color:'white',fontSize:16,position:'absolute',bottom:0,left:0}}>John Much..</Text>
    </View>
        <View style={{width:100,height:120,margin:10}}>
           <Image source={require('../assets/add_user.png')} style={{ width:100, height:100}} />
<Text style={{color:'white',fontSize:16,position:'absolute',bottom:0,left:0}}>+ Add Profile</Text>
        </View>
    </View>
     {/* <View style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
       <View style={{width:100}}><Text style={{color:'white',fontSize:16}}>John Much..</Text></View>
      <View style={{width:100}}><Text style={{color:'white',fontSize:16,marginLeft:10}}>Add Profile</Text></View>
      </View> */}

      <View style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',marginTop:20 }}>
      <TouchableOpacity style={{display: 'flex', flexDirection: 'row'}}><Ionicons name="md-create" color='white' size={28} /><Text style={{color:'white',fontSize:20,marginLeft:10}}>Manage Profiles</Text></TouchableOpacity>
      </View>
     <Text style={{color:'white',fontSize:22,margin:10}}>Settings</Text>
     <View style={{backgroundColor:'#2D2D2D'}}>
     <TouchableOpacity onPress={this.toggleSettingsModal}>
       <Text style={{color:'white',fontSize:20,margin:10}}>App settings</Text>
     </TouchableOpacity>
     </View>
       <View style={{backgroundColor:'#2D2D2D'}}>
       <TouchableOpacity onPress={this.toggleAccountModal}>
<Text style={{color:'white',fontSize:20,margin:10}}>Account</Text>
 </TouchableOpacity>
     </View>
       <View style={{backgroundColor:'#2D2D2D',marginTop:20,flex:1}}>
       <TouchableOpacity >
<Text style={{color:'white',fontSize:20,margin:10}}>Log Out</Text>
 </TouchableOpacity>
     </View>

        <Modal onBackButtonPress={this.toggleSettingsModal}  isVisible={this.state.settingsModal} style={{ flex: 1, margin: 0, padding: 0 }}>
                    <View style={{ flex: 1,margin:0,padding:0,backgroundColor:'#1A1A1A' }}>
                    <View style={{display:'flex',flexDirection:'row',backgroundColor:'#121212'}}>
          <TouchableOpacity onPress={this.toggleSettingsModal} style={{  width: 60, height: 60,display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}><Ionicons name="md-arrow-back" color='white' size={28} /></TouchableOpacity><View style={{height:60,display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}><Text style={{ color: 'white', fontSize: 22, margin: 10, }}>Settings</Text></View>
                  </View>  
<View>
 <Text style={{color:'white',fontSize:22,margin:10,color:'#DADADA'}}>Notifications</Text>
     <View style={{backgroundColor:'#2D2D2D'}}>
     <TouchableOpacity onPress={this.togglePushNotif} style={{display: 'flex', flexDirection: 'row', alignItems: 'center',paddingLeft:10}} >
     <Ionicons name="md-notifications" color='#888888' size={28} />
       <Text style={{color:'white',fontSize:20,margin:10}}>Push Notifications</Text>
    
       <Switch value={this.state.pushNotif} onChange={this.togglePushNotif} style={{alignSelf:'flex-end',height:'100%',position:'absolute',right:10,top:0}}/>
     </TouchableOpacity>
     </View>
       <View style={{backgroundColor:'#2D2D2D'}}>
       <TouchableOpacity  onPress={this.toggleEmailNotif} style={{display: 'flex', flexDirection: 'row', alignItems: 'center',paddingLeft:10}} >
       <Ionicons name="md-notifications" color='#888888' size={28} />
<Text style={{color:'white',fontSize:20,margin:10}}>Email Notifications</Text>
      <Switch  value={this.state.emailNotif} onChange={this.toggleEmailNotif} style={{alignSelf:'flex-end',height:'100%',position:'absolute',right:10,top:0}}/>
 </TouchableOpacity>
     </View>

</View>
                  
                  <View>
 <Text style={{color:'white',fontSize:22,margin:10,color:'#DADADA'}}>About</Text>
     <View style={{backgroundColor:'#2D2D2D'}}>
     <TouchableOpacity style={{display: 'flex', flexDirection: 'row', alignItems: 'center',paddingLeft:10,minHeight:150}} >
     <Ionicons name="md-phone-portrait" color='#888888' size={28} />
     <View style={{height:'100%',paddingLeft:10}}>
  <Text style={{color:'white',fontSize:18}}>Device</Text>
    <Text style={{color:'white',fontSize:16}}>Model:SM-960U01</Text>
     <Text style={{color:'white',fontSize:16}}>Name:crownqlt</Text>
     <Text style={{color:'white',fontSize:16}}>Series:unknown</Text>
     </View>
     
     </TouchableOpacity>
     </View>
    

</View>
                    </View>
                </Modal>


<Modal onBackButtonPress={this.toggleAccountModal}  isVisible={this.state.accountModal} style={{ flex: 1, margin: 0, padding: 0 }}>
                    <View style={{ flex: 1,margin:0,padding:0,backgroundColor:'#1A1A1A' }}>
                    <View style={{display:'flex',flexDirection:'row',backgroundColor:'#121212',width:'100%'}}>
          <TouchableOpacity onPress={this.toggleAccountModal} style={{  width: 60, height: 60,display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}><Ionicons name="md-arrow-back" color='white' size={28} /></TouchableOpacity><View style={{height:60,display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',flex:1,marginRight:60}}><Text style={{ color: 'white', fontSize: 22, margin: 10,alignSelf:'center' }}>Account</Text></View>
                  </View>  

                  <View style={{backgroundColor:'#2D2D2D',display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
 <View style={{margin:10,display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
 <Image source={require('../assets/user.png')} style={{ width:100, height:100,borderRadius:50}} />
<Text style={{color:'white',fontSize:16}}>John Muchiri</Text>
<Text style={{color:'white',fontSize:16}}>John@gmail.com.</Text>
    </View>
    <TouchableOpacity style={{position:'absolute',right:20,top:20,borderBottomColor:'gray',borderBottomWidth:4}}>
      <Ionicons name="md-create" color='white' size={30} />
    </TouchableOpacity>
                  </View>
<View style={{marginTop:15}}>

     <View style={{backgroundColor:'#2D2D2D'}}>
     <TouchableOpacity onPress={this.togglePlanModal} style={{display: 'flex', flexDirection: 'row', alignItems: 'center',paddingLeft:10}} >
       <Text style={{color:'white',fontSize:20,margin:10}}>View Plans</Text>
     </TouchableOpacity>
     </View>
       <View style={{backgroundColor:'#2D2D2D'}}>
       <TouchableOpacity  style={{display: 'flex', flexDirection: 'row', alignItems: 'center',paddingLeft:10}} >
<Text style={{color:'white',fontSize:20,margin:10}}>My Plan</Text>
 </TouchableOpacity>
     </View>
 <View style={{backgroundColor:'#2D2D2D'}}>
       <TouchableOpacity  style={{display: 'flex', flexDirection: 'row', alignItems: 'center',paddingLeft:10}} >
<Text style={{color:'white',fontSize:20,margin:10}}>App Language</Text>
 </TouchableOpacity>
     </View>
 <View style={{backgroundColor:'#2D2D2D'}}>
       <TouchableOpacity  style={{display: 'flex', flexDirection: 'row', alignItems: 'center',paddingLeft:10}} >
    
<Text style={{color:'white',fontSize:20,margin:10}}>Wish List</Text>
 </TouchableOpacity>
     </View>
</View>
                  

<View style={{marginTop:50}}>

     <View style={{backgroundColor:'#2D2D2D'}}>
     <TouchableOpacity style={{display: 'flex', flexDirection: 'row', alignItems: 'center',paddingLeft:10}} >
       <Text style={{color:'white',fontSize:20,margin:10}}>History</Text>
     </TouchableOpacity>
     </View>
       <View style={{backgroundColor:'#2D2D2D'}}>
       <TouchableOpacity  style={{display: 'flex', flexDirection: 'row', alignItems: 'center',paddingLeft:10}} >
<Text style={{color:'white',fontSize:20,margin:10}}>Delete Account</Text>
 </TouchableOpacity>
     </View>
 
</View>



                  
                    </View>
                    
                </Modal>
 <Modal onBackButtonPress={this.togglePlanModal}  isVisible={this.state.planModal} style={{ flex: 1, margin: 0, padding: 0 }}>
                    <View style={{ flex: 1,margin:0,padding:0,backgroundColor:'#1A1A1A' }}>
                    <View style={{display:'flex',flexDirection:'row',backgroundColor:'#121212'}}>
          <TouchableOpacity onPress={this.togglePlanModal} style={{  width: 60, height: 60,display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}><Ionicons name="md-arrow-back" color='white' size={28} /></TouchableOpacity><View style={{height:60,display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}><Text style={{ color: 'white', fontSize: 22, margin: 10, }}>View Plan</Text></View>
                  </View>  
<View style={{marginBottom:60}}>
<ScrollView>
<View style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',backgroundColor:'#444444',padding:10,marginBottom:20}}>
<View style={{backgroundColor:'#555555',width:'70%'}}>
<Text style={{fontSize:18,color:'white',textAlign:'center',margin:20}}>Daily Plan</Text>
</View>
<View style={{width:'70%'}}>
<Text style={{fontSize:20,color:'white',textAlign:'center',margin:10}}>$ 0.0</Text>
<Text style={{fontSize:20,color:'white',textAlign:'center',margin:10}}>/1</Text>
</View>
<Button title='Pay' color='black' />
</View>

<View style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',backgroundColor:'#444444',padding:10,marginBottom:20}}>
<View style={{backgroundColor:'#555555',width:'70%'}}>
<Text style={{fontSize:18,color:'white',textAlign:'center',margin:20}}>Weekly Plan</Text>
</View>
<View style={{width:'70%'}}>
<Text style={{fontSize:20,color:'white',textAlign:'center',margin:10}}>$ 7.99</Text>
<Text style={{fontSize:20,color:'white',textAlign:'center',margin:10}}>/1</Text>
</View>
<Button title='Pay' color='black' />
</View>

<View style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',backgroundColor:'#444444',padding:10,marginBottom:20}}>
<View style={{backgroundColor:'#555555',width:'70%'}}>
<Text style={{fontSize:18,color:'white',textAlign:'center',margin:20}}>Monthly Plan</Text>
</View>
<View style={{width:'70%'}}>
<Text style={{fontSize:20,color:'white',textAlign:'center',margin:10}}>$ 99.0</Text>
<Text style={{fontSize:20,color:'white',textAlign:'center',margin:10}}>/1</Text>
</View>
<Button title='Pay' color='black' />
</View>
</ScrollView>

</View>
                  
                 
                    </View>
                </Modal>


    </View>
  );}
}