import React from 'react'
import { View,Text, Button } from 'react-native'

const Demo = () => {
  return (
    <View style={{backgroundColor:'blue',flex:1,justifyContent:'center',alignItems:'center',gap:10}}>
        <Text style={{color:'#FFFFFF'}}>Hello! we are testing codepush</Text>
        <Text style={{color:'#FFFFFF'}}>Below button has been added on recent updates.</Text>
        <Button title='Click me' style={{backgroundColor:'blue',height:30,width:60}}></Button>
    </View>
  )
}

export default Demo
