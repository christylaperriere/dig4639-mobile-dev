import * as React from "react";
import {Stylesheet, Text, View} from "react-native"; 
import {Button} from "react-native-elements"; 

export default class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: "",
      userNumber: ""
    }
  }

  componentDidMount() {
    fetch("https://plato.mrl/ai:8081/profile", {
      headers: {
        "API": "laperriere",
      }
    })
      .then(res => res.json())
      .then(body => {
        this.setState({userName : body.name, userNumber : body.count})
      })
  }
  render() {
    return (
      <View>
        <Text>Welcome {this.state.userName}</Text>
        <Text>You have {this.state.userNumber} contacts</Text>
        <Button
          title="See Contacts"
          onPress={() => this.props.navigation.navigate("Contacts")}>
        </Button>
        <Button
          title="Add Contact"
          onPress={() => this.props.navigation.navigate("Add")}>
        </Button>
      </View>
    );
  }
}