import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import questions from "./question.json"

const TIME_LIMIT = 5
const TITLE_STATE = 0
const QUESTION_STATE = 1
const FINAL_STATE = 2 

class QuizQuestion extends React.Component {
  render() {
    return (
    <View>
    <Text style={styles.instructions}>{this.props.question}</Text>
    {this.props.answers.map((v,i) => 
      <Button 
        title={v.text}
        key={i}
        value={v.text}
        color="#f5b356"
        onPress={() => this.props.nextQuestion(v.correct)}>
      </Button>
      )}
    </View>
    )
  }
}
class TitlePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      titleText: "Welcome to our quiz!",
      counter: 0,
      currentState: TITLE_STATE,
      currentQuestion: 0
    }
    this.timeLimit = TIME_LIMIT;
  }
  nextQuestion(correct) {
    console.log("BUTTON PRESSED")
    if(correct) {
      this.setState({score: this.state.score + 1})
    }
    if(this.state.currentQuestion == questions.length - 1) {
      console.log("DONE")
    } else {
    clearInterval(this.timer)
    console.log(this.state.currentQuestion)
    this.setState({
      titleText: "You answered X",
      currentState: QUESTION_STATE,
      currentQuestion: this.state.currentQuestion + 1
    })
  }
}
  countdown() {
    console.log("Handling interval")
    console.log(this.state.counter)
    if(this.state.counter < this.timeLimit) {
      this.setState({
        titleText: 'Starting the Quiz',
        counter: this.state.counter + 1
      })
    } else {
      this.setState({
        titleText: "Beginning Quiz!",
        currentState: QUESTION_STATE,
        counter: 0
      })
      if(this.state.currentState == TITLE_STATE) {
        this.timer = setInterval(() => this.countdown(), 1000)
        clearInterval(this.timer)
      } else {
        this.setState({titleText: "You answered!"})
      }
    }
}
  start() {
    console.log("Starting!")
    this.setState({titleText: "Starting the Quiz!", counter: 0})
    this.timer = setInterval(() => this.countdown(), 1000)
}

  render() {
    return(
    <View style={styles.container}>
      <Text style={styles.instructions}>Developmental Psychology Quiz</Text>
      <Button
         title="Start Quiz"
         color="#52aba0"
         onPress={() => this.start()}>
      </Button>
      <QuizQuestion answers={questions[this.state.currentQuestion].possibleAnswers} question={questions[this.state.currentQuestion].question} nextQuestion={(correct) => this.nextQuestion(correct)}></QuizQuestion>
      <Text style={styles.instructions}>Score: {this.state.score}</Text>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#393f4a'
  },
  instructions: {
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 10,
    marginTop: 10
  }
});

function App() {
  return(
    <TitlePage></TitlePage>
  );
}

export default App; 