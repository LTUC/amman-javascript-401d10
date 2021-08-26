import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import * as Contacts from 'expo-contacts';
import ContactList from './ContactList'
export default function App() {
  const [contacts, setContacts] = useState([]);
  const [permissions, setPermissions] = useState(false)

  const getPermissions = async ()=>{
    const {status} = await Contacts.requestPermissionsAsync();
    console.debug('Status',status);
    setPermissions(status === "granted"?true:false);
  }

  const showContacts = async ()=>{
    const contactList = await Contacts.getContactsAsync();
    console.warn('CONTACTLIST',contactList);
    setContacts(contactList.data)
  }

  useEffect(() => {
   getPermissions()
  }, [])
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Hello world!</Text>
      <Button onPress={showContacts} title="Show Contacts"/>
      <ContactList contacts={contacts}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:100
  },
  test:{
    color:"blue"
  }
});
