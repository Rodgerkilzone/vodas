import * as React from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image, Button, Dimensions, Switch } from 'react-native';
import {
  Ionicons,
  MaterialIcons
} from '@expo/vector-icons';
import Modal from "react-native-modal";
const { height } = Dimensions.get('window');
export default class More extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      settingsModal: false, accountModal: false, planModal: false, pushNotif: true, emailNotif: true, paymentModal: false
    };
  }
  togglePayment = () => {
    this.setState({ paymentModal: !this.state.paymentModal });

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
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#f8f8f8' }}>
        <View style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ width: 100, height: 120, margin: 10 }}>
            <Image source={require('../assets/user.png')} style={{ width: 100, height: 100 }} />
            <Text style={{ color: 'black', fontSize: 16, position: 'absolute', bottom: 0, left: 0 }}>John Muchiri</Text>
          </View>
          {/* <View style={{width:100,height:120,margin:10}}>
           <Image source={require('../assets/add_user.png')} style={{ width:100, height:100}} />
<Text style={{color:'white',fontSize:16,position:'absolute',bottom:0,left:0}}>+ Add Profile</Text>
        </View> */}
        </View>
        {/* <View style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
       <View style={{width:100}}><Text style={{color:'white',fontSize:16}}>John Much..</Text></View>
      <View style={{width:100}}><Text style={{color:'white',fontSize:16,marginLeft:10}}>Add Profile</Text></View>
      </View> */}

        <View style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
          <TouchableOpacity style={{ display: 'flex', flexDirection: 'row' }}><Ionicons name="md-create" color='black' size={28} /><Text style={{ color: 'black', fontSize: 20, marginLeft: 10 }}>Manage Profiles</Text></TouchableOpacity>
        </View>
        <Text style={{ color: 'black', fontSize: 22, margin: 10 }}>Settings</Text>
        <View style={{ backgroundColor: '#e5e5e5' }}>
          <TouchableOpacity onPress={this.toggleSettingsModal}>

            <Text style={{ color: 'black', fontSize: 20, margin: 10 }}>App settings</Text>
          </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: '#e5e5e5' }}>
          <TouchableOpacity onPress={this.toggleAccountModal}>
            <Text style={{ color: 'black', fontSize: 20, margin: 10 }}>Account</Text>
          </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: '#e5e5e5', marginTop: 20 }}>
          <TouchableOpacity >
            <Text style={{ color: 'black', fontSize: 20, margin: 10 }}>Log Out</Text>
          </TouchableOpacity>
        </View>

        <Modal onBackButtonPress={this.toggleSettingsModal} isVisible={this.state.settingsModal} style={{ flex: 1, margin: 0, padding: 0 }}>
          <View style={{ flex: 1, margin: 0, padding: 0, backgroundColor: '#f8f8f8' }}>
            <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#e5e5e5', elevation: 5 }}>
              <TouchableOpacity onPress={this.toggleSettingsModal} style={{ width: 60, height: 60, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}><Ionicons name="md-arrow-back" color='black' size={28} /></TouchableOpacity><View style={{ height: 60, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}><Text style={{ color: 'black', fontSize: 22, margin: 10, }}>Settings</Text></View>
            </View>
            <View>
              <Text style={{ color: 'white', fontSize: 22, margin: 10, color: 'black' }}>Notifications</Text>
              <View style={{ backgroundColor: '#e5e5e5' }}>
                <TouchableOpacity onPress={this.togglePushNotif} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }} >
                  <Ionicons name="md-notifications" color='#888888' size={28} />
                  <Text style={{ color: 'black', fontSize: 20, margin: 10 }}>Push Notifications</Text>

                  <Switch value={this.state.pushNotif} onChange={this.togglePushNotif} style={{ alignSelf: 'flex-end', height: '100%', position: 'absolute', right: 10, top: 0 }} />
                </TouchableOpacity>
              </View>
              <View style={{ backgroundColor: '#e5e5e5' }}>
                <TouchableOpacity onPress={this.toggleEmailNotif} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }} >
                  <Ionicons name="md-notifications" color='#888888' size={28} />
                  <Text style={{ color: 'black', fontSize: 20, margin: 10 }}>Email Notifications</Text>
                  <Switch value={this.state.emailNotif} onChange={this.toggleEmailNotif} style={{ alignSelf: 'flex-end', height: '100%', position: 'absolute', right: 10, top: 0 }} />
                </TouchableOpacity>
              </View>

            </View>

            <View>
              <Text style={{ color: 'white', fontSize: 22, margin: 10, color: 'black' }}>About</Text>
              <View style={{ backgroundColor: '#e5e5e5' }}>
                <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingLeft: 10, minHeight: 150 }} >
                  <Ionicons name="md-phone-portrait" color='#888888' size={28} />
                  <View style={{ height: '100%', paddingLeft: 10 }}>
                    <Text style={{ color: 'black', fontSize: 18 }}>Device</Text>
                    <Text style={{ color: 'black', fontSize: 16 }}>Model:SM-960U01</Text>
                    <Text style={{ color: 'black', fontSize: 16 }}>Name:crownqlt</Text>
                    <Text style={{ color: 'black', fontSize: 16 }}>Series:unknown</Text>
                  </View>

                </TouchableOpacity>
              </View>


            </View>
          </View>
        </Modal>


        <Modal onBackButtonPress={this.toggleAccountModal} isVisible={this.state.accountModal} style={{ flex: 1, margin: 0, padding: 0 }}>
          <View style={{ flex: 1, margin: 0, padding: 0, backgroundColor: '#f8f8f8' }}>
            <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#e5e5e5', width: '100%', elevation: 5 }}>
              <TouchableOpacity onPress={this.toggleAccountModal} style={{ width: 60, height: 60, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}><Ionicons name="md-arrow-back" color='black' size={28} /></TouchableOpacity><View style={{ height: 60, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flex: 1, marginRight: 60 }}><Text style={{ color: 'black', fontSize: 22, margin: 10, alignSelf: 'center' }}>Account</Text></View>
            </View>

            <View style={{ backgroundColor: '#e5e5e5', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ margin: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../assets/user.png')} style={{ width: 100, height: 100, borderRadius: 50 }} />
                <Text style={{ color: 'black', fontSize: 16 }}>John Muchiri</Text>
                <Text style={{ color: 'black', fontSize: 16 }}>John@gmail.com.</Text>
              </View>
              <TouchableOpacity style={{ position: 'absolute', right: 20, top: 20, borderBottomColor: 'gray', borderBottomWidth: 4 }}>
                <Ionicons name="md-create" color='gray' size={30} />
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 15 }}>

              <View style={{ backgroundColor: '#e5e5e5' }}>
                <TouchableOpacity onPress={this.togglePlanModal} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }} >
                  <Text style={{ color: 'black', fontSize: 20, margin: 10 }}>View Plans</Text>
                </TouchableOpacity>
              </View>
              <View style={{ backgroundColor: '#e5e5e5' }}>
                <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }} >
                  <Text style={{ color: 'black', fontSize: 20, margin: 10 }}>My Plan</Text>
                </TouchableOpacity>
              </View>
              <View style={{ backgroundColor: '#e5e5e5' }}>
                <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }} >
                  <Text style={{ color: 'black', fontSize: 20, margin: 10 }}>App Language</Text>
                </TouchableOpacity>
              </View>
              <View style={{ backgroundColor: '#e5e5e5' }}>
                <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }} >

                  <Text style={{ color: 'black', fontSize: 20, margin: 10 }}>Wish List</Text>
                </TouchableOpacity>
              </View>
            </View>


            <View style={{ marginTop: 50 }}>

              <View style={{ backgroundColor: '#e5e5e5' }}>
                <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }} >
                  <Text style={{ color: 'black', fontSize: 20, margin: 10 }}>History</Text>
                </TouchableOpacity>
              </View>
              <View style={{ backgroundColor: '#e5e5e5' }}>
                <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }} >
                  <Text style={{ color: 'black', fontSize: 20, margin: 10 }}>Delete Account</Text>
                </TouchableOpacity>
              </View>

            </View>




          </View>

        </Modal>
        <Modal onBackButtonPress={this.togglePlanModal} isVisible={this.state.planModal} style={{ flex: 1, margin: 0, padding: 0 }}>
          <View style={{ flex: 1, margin: 0, padding: 0, backgroundColor: '#f8f8f8' }}>
            <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#e5e5e5', elevation: 5 }}>
              <TouchableOpacity onPress={this.togglePlanModal} style={{ width: 60, height: 60, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}><Ionicons name="md-arrow-back" color='black' size={28} /></TouchableOpacity><View style={{ height: 60, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}><Text style={{ color: 'black', fontSize: 22, margin: 10, }}>View Plan</Text></View>
            </View>
            <View style={{ marginBottom: 60 }}>
              <ScrollView>
                <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#e5e5e5', padding: 10, marginBottom: 20 }}>
                  <View style={{ backgroundColor: 'rgba(0,0,0,0.2)', width: '70%' }}>
                    <Text style={{ fontSize: 18, color: 'black', textAlign: 'center', margin: 20 }}>Daily Plan</Text>
                  </View>
                  <View style={{ width: '70%' }}>
                    <Text style={{ fontSize: 20, color: 'black', textAlign: 'center', margin: 10 }}>$ 0.0</Text>
                    <Text style={{ fontSize: 20, color: 'black', textAlign: 'center', margin: 10 }}>/1</Text>
                  </View>
                  <Button onPress={this.togglePayment} title='Pay' color='black' />
                </View>

                <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#e5e5e5', padding: 10, marginBottom: 20 }}>
                  <View style={{ backgroundColor: 'rgba(0,0,0,0.2)', width: '70%' }}>
                    <Text style={{ fontSize: 18, color: 'black', textAlign: 'center', margin: 20 }}>Weekly Plan</Text>
                  </View>
                  <View style={{ width: '70%' }}>
                    <Text style={{ fontSize: 20, color: 'black', textAlign: 'center', margin: 10 }}>$ 7.99</Text>
                    <Text style={{ fontSize: 20, color: 'black', textAlign: 'center', margin: 10 }}>/1</Text>
                  </View>
                  <Button onPress={this.togglePayment} title='Pay' color='black' />
                </View>

                <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#e5e5e5', padding: 10, marginBottom: 20 }}>
                  <View style={{ backgroundColor: 'rgba(0,0,0,0.2)', width: '70%' }}>
                    <Text style={{ fontSize: 18, color: 'black', textAlign: 'center', margin: 20 }}>Monthly Plan</Text>
                  </View>
                  <View style={{ width: '70%' }}>
                    <Text style={{ fontSize: 20, color: 'black', textAlign: 'center', margin: 10 }}>$ 99.0</Text>
                    <Text style={{ fontSize: 20, color: 'black', textAlign: 'center', margin: 10 }}>/1</Text>
                  </View>
                  <Button onPress={this.togglePayment} title='Pay' color='black' />
                </View>
              </ScrollView>

            </View>


          </View>
        </Modal>
        <Modal onBackButtonPress={this.togglePayment} isVisible={this.state.paymentModal} style={{ flex: 1, margin: 0, padding: 0 }}>
          <View style={{ flex: 1, margin: 0, padding: 0, backgroundColor: '#f8f8f8' }}>
            <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#e5e5e5' }}>
              <TouchableOpacity onPress={this.togglePayment} style={{ width: 60, height: 60, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}><Ionicons name="md-arrow-back" color='black' size={28} /></TouchableOpacity><View style={{ height: 60, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}><Text style={{ color: 'black', fontSize: 22, margin: 10, }}>Payment</Text></View>
            </View>
            <View style={{ marginBottom: 60, padding: 50 }}>
              <TouchableOpacity style={{ width: '100%', elevation: 5, backgroundColor: 'white', height: 100, borderRadius: 5, display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                <Image source={require('../assets/safaricom.png')} style={{ height: '100%', width: '100%' }} />

              </TouchableOpacity>
              <TouchableOpacity style={{ width: '100%', backgroundColor: 'white', elevation: 5, marginTop: 50, height: 100, borderRadius: 5, display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                <Image source={require('../assets/airtel.png')} style={{ height: '100%', width: '100%' }} />

              </TouchableOpacity>
            </View>


          </View>
        </Modal>

      </View>
    );
  }
}