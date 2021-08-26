import React from 'react'
import {FlatList, View,Text, Button,Linking } from 'react-native'

export default function ContactList({contacts}){
const call = (contact)=>{
console.debug(contact.phoneNumbers[0].number)
let link = `tel:${contact.phoneNumbers[0].number}`
Linking.canOpenURL(link).then( (supported)=> Linking.openURL(link)).catch((e)=>console.error(e.message))
}
  return(
    <View>
      <Text>Contact List</Text>

      <FlatList 
      data={contacts}
      keyExtractor={(item)=>item.id}
      renderItem={
        ({item})=>(
         <Button onPress={()=>call(item)} title={`${item.name}`}/>
        )
      }
      />
    </View>
  )
}