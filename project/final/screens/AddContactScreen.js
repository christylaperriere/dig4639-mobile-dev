import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser'; 
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesutre-handler'; 
import { Input, Button } from 'react-native-elements';

export default class AddContact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      submitDisabled: true,
      contactText: "",
      contactPriority: 0
    }
  }

  handleNameInput(text) {
    if(text.length > 0) {
      this.setState( {
        submitDisabled: false, 
        contactName: text
      })
    } else {
      this.setState({ submitDisabled: true})
      console.log(text)
    }
  }
  handleNumberInput(text) {
    if(this.state.contactName.length > 0 && text.length > 0) {
      this.setState({
        submitDisabled: false,
        contactNumber: text
      })
    } else {
      this.setState({submitDisabled: true})
      console.log(text)
    }
  }
  handleCreatedContact() {
    console.log("added")
    console.log(this.state.contactName, this.state.contactNumber)
    fetch('https://plato.mrl.ai:8081/contacts/add', {
      mode: "cors",
      method: "POST", 
      headers: {
        "API": "laperriere", 
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: this.state.contactName,
        number: this.state.contactNumber
      })
    })
    .then(res=>res.json())
    .then(body=> {
      console.log(body)
      if(body.added !=undefined) {
        console.log("Contact Added")
        this.props.navigation.navigate("Contacts", 
          { contact: {name: this.state.contactName, number: this.state.contactNumber}})
      } else {
        console.log("error adding contact")
      }
    })
  }
  render() {
    return (
      <View>
        <ScrollView>
          <Text>Name:</Text>
          <Input
            placeholder="contact name"
            onChangeText={text => this.handleNameInput(text)}/>
          <Text>Number:</Text>
          <Input
            placeholdeer="000-000-0000"
            onChangeText={text => this.handleNumberInput(text)}/>
          <Button title="Add Contact"
            disabled={this.state.submitDisabled}
            onPress={()=> this.handleCreatedContact()}>
          </Button>
        </ScrollView>
      </View>
    );
  }
}