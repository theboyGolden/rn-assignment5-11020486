import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Home, MyCards, Statistics, Settings } from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator()
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 80,
    width: '100%',
    background: '#fff'
  }
}
export default function App() {
  return (
    <NavigationContainer screenOptions={screenOptions}>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarIcon: ({focused})=>{ 
            return ( 
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('./assets/home.png')} style={{height: 30, width:30, tintColor: focused ? 'blue' : '#27272A'}} /> 
                 <Text style={{fontSize: 12, color: focused ? 'blue' : '#212121', marginBottom: 20,}}>Home</Text> 
              </View>
              )
              }
            }}
            />
        <Tab.Screen 
          name="My Cards" 
          component={MyCards}
          options={{
            tabBarIcon: ({focused})=>{ 
              return ( 
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Image source={require('./assets/wallet.png')} style={{height: 30, width:30, tintColor: focused ? 'blue' : '#27272A'}} /> 
                  <Text style={{fontSize: 12, color: focused ? 'blue' : '#212121', marginBottom: 20,}}>MyCards</Text>
                </View>
                )
                }
              }} 
              />
        <Tab.Screen 
          name="Statistics" 
          component={Statistics}
          options={{
            tabBarIcon: ({focused})=>{ 
              return ( 
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Image source={require('./assets/pie-chart.png')} style={{height: 30, width:30, tintColor: focused ? 'blue' : '#27272A'}} /> 
                  <Text style={{fontSize: 12, color: focused ? 'blue' : '#212121', marginBottom: 20,}}>Statistics</Text>
                </View>
                )
                }
              }}
              />
        <Tab.Screen 
         name="Settings" 
         component={Settings}
         options={{
          tabBarIcon: ({focused})=>{ 
            return ( 
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('./assets/setting.png')} style={{height: 30, width:30, tintColor: focused ? 'blue' : '#27272A'}} /> 
                <Text style={{fontSize: 12, color: focused ? 'blue' : '#212121', marginBottom: 20,}}>Settings</Text>
              </View>
              )
              }
            }} 
            />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
