import React from 'react';
import { Button, Text, View } from 'react-native';

class QuizQuestion extends React.Component {
  render() {
    return(
      <View>
        <Text>{this.props.question}</Text>
        {this.props.answers.map((v) => {
          <Button
            title="Submit Button"
            onPress={() => this.props.nextQuestion} 
          >
          </Button>
        })}
      </View>
    )
  }
}
export default QuizQuestion 