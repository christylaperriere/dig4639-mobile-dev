import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import {Card} from 'react-native-elements'; 
import {ScrollView} from 'react-native-gesture-handler';

const HEADERS = {
  "method": "GET",
  "headers": {
    "api": "laperriere",
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
}

export default class HomeScreen extends React.Component {

  state= {
    contactsList: [],
    error: null,
    isLoaded: false,
    userName: "",
    userCount: ""
  }
  // Function to call the api
  callApi() {
    console.log("Api has been called")
    fetch('https://plato.mrl.ai:8081', HEADERS)
    .then(res => res.json())
    .then(body => console.log(body))
    this.componentDidMount(); 
  }

  // Component to get Contacts
  componentDidMount() {
    console.log("Running contacts component")
    window.fetch("https://plato.mrl.ai:8081/contacts", HEADERS, {mode: 'cors'})
    .then((res) => res.json())
    .then((result) => {
      this.setState({
        isLoaded: true,
        contacts: result.contacts}); 
    }, 
    (error) => {
      this.setState({
        isLoaded: true,
        error
      });
    })
    console.log("Contacts component has run")
  }

  getProfile() {
    fetch("https://plato.mrl/ai:8081/profile", {
      headers: {
        "API": "laperriere",
      }
    })
      .then(res => res.json())
      .then(body => {
        this.setState({userName : body.name, userCount : body.count})
  })
}


  removeContact(position) {
		fetch('https://plato.mrl.ai:8081/contacts/remove', {
			method: "POST",
			headers: {
				"API": "laperriere",
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
			body: JSON.stringify({position:position})
		})
		.then(res => res.json())
		.then(body => {
			console.log(body)
			if(body.removed != undefined) {
				const currentList = this.state.contactsList.filter((v,i) =>
					(i !== position))
				this.setState({contactsList: currentList})
			}
		})
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
    })
  }

  render() {
    console.log("values returned");
    const { error, isLoaded, contacts } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    else if (!isLoaded) {
      return <div>Loading...</div>;
    }
    else {
      return (
        <View style={styles.container}>
        <Button 
        title="Get Profile"
        color="#4f7363"
        accessibilityLabel="Gets profile information"
        onPress={()=> this.getProfile()}/>
        <br></br>
        <Text>    Welcome {this.state.userName}</Text>
        <Text>    You have {this.state.userCount} contacts</Text>
        <TextInput style={styles.input}
          placeholder="  John Doe"
          placeholderTextColor = "#4f7363"
          onChangeText={text => this.handleNameInput(text)}/>
        <TextInput style={styles.input}
          placeholder="  000-000-0000"
          placeholderTextColor = "#4f7363"
          onChangeText={text => this.handleNumberInput(text)}/>
        <Button
          title="Add Contact"
          accessibilityLabel="Button to add contact"
          color="#4f7363"
          disabled={this.state.submitDisabled}
          onPress={()=> this.handleCreatedContact()}/>
         {
          this.state.contacts.map((contact, i) => 
          <Card key={i} title={contact.name}>
            <Text>{contact.number}</Text>
            <br></br>
            <View style={{position: 'absolute', right:0}}>
            <Button style={styles.submitButton}
              title="Delete Card"
              accessibilityLabel="Button to delete card"
              color="#c75858"
              onPress={() => this.removeContact(i)}/>
            </View>
          </Card>)
         }
         <br></br><br></br>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
     paddingTop: 23, 
     backgroundColor: "#dae0dc"
  },
  input: {
     margin: 15,
     height: 40,
     borderColor: '#4f7363',
     borderWidth: 1,
     backgroundColor: "#ffffff"
  },
  submitButton: {
     backgroundColor: "#c75858",
     margin: 15,
     height: 40,
     width: 30
  },
  submitButtonText:{
     color: 'white'
  }
})