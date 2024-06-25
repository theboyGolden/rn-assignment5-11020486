import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Settings() {
  return (
    <View style={{flex:1, alignItems: "center", justifyContent: "center",  paddingBottom:300, paddingLeft:20, paddingRight:20, backgroundColor:'#fff',}}>
      <Text style={{fontSize: 30, fontWeight: '600', marginBottom: 50}}>Settings</Text>

      <View style={{borderWidth:2, borderTopColor:'white', borderRightColor:'white', borderLeftColor:'white', borderBottomColor:'#f5f5f5', width:'100%', marginBottom: 20, flexDirection:'row'}}><Text style={{fontSize: 20, fontWeight: '600', marginBottom: 10}}>Language</Text><Image source={require('../assets/right.png')} style={{width:20, height:20, marginTop:7, marginLeft: 230}}/></View>
      <View style={{borderWidth:2, borderTopColor:'white', borderRightColor:'white', borderLeftColor:'white', borderBottomColor:'#f5f5f5', width:'100%', marginBottom: 20, flexDirection:'row'}}><Text style={{fontSize: 20, fontWeight: '600', marginBottom: 10}}>My Profile</Text><Image source={require('../assets/right.png')} style={{width:20, height:20, marginTop:7, marginLeft: 230}}/></View>
      <View style={{borderWidth:2, borderTopColor:'white', borderRightColor:'white', borderLeftColor:'white', borderBottomColor:'#f5f5f5', width:'100%', marginBottom: 20, flexDirection:'row'}}><Text style={{fontSize: 20, fontWeight: '600', marginBottom: 10}}>Contact Us </Text><Image source={require('../assets/right.png')} style={{width:20, height:20, marginTop:7, marginLeft: 220}}/></View>
      <View style={{borderWidth:2, borderTopColor:'white', borderRightColor:'white', borderLeftColor:'white', borderBottomColor:'#f5f5f5', width:'100%', marginBottom: 20, flexDirection:'row'}}><Text style={{fontSize: 20, fontWeight: '600', marginBottom: 10}}>Change Password </Text><Image source={require('../assets/right.png')} style={{width:20, height:20, marginTop:7, marginLeft: 160}}/></View>
      <View style={{borderWidth:2, borderTopColor:'white', borderRightColor:'white', borderLeftColor:'white', borderBottomColor:'#f5f5f5', width:'100%', marginBottom: 30, flexDirection:'row'}}><Text style={{fontSize: 20, fontWeight: '600', marginBottom: 10}}>Privacy Policy </Text><Image source={require('../assets/right.png')} style={{width:20, height:20, marginTop:7, marginLeft: 200}}/></View>

      <View style={{flexDirection:'row', width:'100%', marginTop: 30,}}>
        <View style={{justifyContent:'flex-start', paddingTop: 20, marginRight: 180 }}><Text style={{fontSize: 30, fontWeight: '600'}}>Theme</Text></View>
        <View style={{justifyContent:'flex-end'}}><Image source={require('../assets/off-button.png')} style={{width:80, height:80, }}/></View>
      </View>
    </View>
  )
}