import React, { Component } from 'react';
import axios from 'axios';
import originalQuestions from '../questions/questions';
import { Button, Input, Card, RadioGroup, FormControl, FormControlLabel, Radio } from '@material-ui/core';

class Quiz extends Component {
  state = {
    currentQuestion: undefined,
    correct: '',
    name: 'Player1',
    started: false,
    finished: false,
    result: [0, 0]
  }


  async setQuestions (arr) {
    const questions = [...arr]
    this.setState({ questions });
  }

  async getQuestion () {
    let { questions } = this.state;
    if (questions.length) {
      let num = Math.floor(Math.random() * questions.length);
      let currentQuestion = questions.splice(num, 1);
      currentQuestion = currentQuestion.pop();
      this.setState({ questions, currentQuestion })
    }
    else {
      this.setState({ finished: true })
    }
  }

  queryMaker = (param, code) => {
    return code ? `query{country(code:"${code}"){${param}}}` :
      `query{countries{${param}}}`
  }

  makeOptions (arr, param) {
    let newArr = [];
    while (newArr.length < 4) {
      let num = Math.floor(Math.random() * arr.length);
      newArr.push(arr[num][param])
    }
    return newArr;
  }

  fetchCorrectAnswer = async (param, code) => {
    let queryCorrect = this.queryMaker(param, code)
    axios.post('https://countries.trevorblades.com/graphql', { query: queryCorrect, variables: {} })
      .then(result => this.setState({ correct: result.data.data.country[param] }))
      .catch(err => console.log(err))
  }

  fetchAlternatives = async (param) => {
    let queryCorrect = this.queryMaker(param)
    let response = await axios.post('https://countries.trevorblades.com/graphql', { query: queryCorrect, variables: {} })
      .then(result => { return result.data.data.countries })
    let newArr = await this.makeOptions(response, param);
    let num = Math.floor(Math.random() * newArr.length);
    newArr[num] = this.state.correct;
    this.setState({ options: newArr })
  }

  updateTheLeaderBoard () {
    const result = {
      name: this.state.name,
      score: this.state.result
    }
    this.props.update(result);
    this.setState({
      questions: undefined,
      currentQuestion: undefined,
      options: undefined,
      correct: '',
      name: 'Player1',
      started: false,
      finished: false,
      result: [0, 0]
    })
  }



  componentDidUpdate (prevProps, prevState) {
    (!prevState.questions && this.state.questions) && this.getQuestion();

    if (this.state.currentQuestion) {

    (this.state.currentQuestion !== prevState.currentQuestion) && (this.fetchCorrectAnswer(this.state.currentQuestion.query.param, this.state.currentQuestion.query.code));

    (prevState.correct !== this.state.correct) && this.fetchAlternatives(this.state.currentQuestion.query.param);
    }
    ((prevState.finished !== this.state.finished) && this.state.finished) && this.updateTheLeaderBoard();
  }

  handleNameChange = e => {
    this.setState({ name: e.target.value })
  }

  startGame = () => {
    this.setQuestions(originalQuestions)
    this.setState({ started: true })
  }

  handleChoice = e => {
    this.setState({ answer: e.target.value })
  }

  submitAnswer = e => {
    let { result } = this.state;
    if (!this.state.answer) alert('Please enter an answer!');
    else {
      this.state.answer === this.state.correct ? result[0]++ : result[1]++;
      this.setState({ result });
      this.getQuestion()
    }
  }

  render () {
    const options = this.state.options && this.state.options.map((el,i) => {
      return (
        <FormControlLabel value={el} control={<Radio />} label={el} key={i} />
      )
    });
    if (!this.state.started) {
      return (
        <Card style={{ display: 'flex', flexDirection: 'column' }}>
          <Input value={this.state.name} onChange={this.handleNameChange} />
          <Button onClick={this.startGame}>START</Button>
        </Card>
      )
    }
    return this.state.options ?
      <Card style={{ display: 'flex', flexDirection: 'column', width: '80%', height: '60%', justifyContent: 'space-between', paddingTop:'20%' }}>
        <span>{this.state.currentQuestion.question}</span>
        <FormControl>
          <RadioGroup
            aria-label="answers"
            name="answer"
            value={this.state.answer}
            onChange={this.handleChoice}
          >
            {options}
          </RadioGroup>
          <Button onClick={this.submitAnswer} style={{ color: 'light-green' }}>ANSWER</Button>
        </FormControl>
      </Card>
      : <span>LOADING</span>
  }

}

export default Quiz;