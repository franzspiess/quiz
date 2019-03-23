import React, { Component } from 'react';
import LeaderBoard from './Leaderboard';
import Quiz from './Quiz';

class Dashboard extends Component {
  state = {
    leaderBoard: undefined
  }

  getLeaderBoard () {
    let leaderBoard = localStorage.getItem('leaderBoard');
    leaderBoard && (leaderBoard = JSON.parse(leaderBoard));
    leaderBoard && this.setState({ leaderBoard });
  }
  updateLeaderBoard = obj => {
    console.log(obj)
    let {leaderBoard} = this.state;
    if (leaderBoard) leaderBoard.push(obj);
    else {
      leaderBoard = [];
      leaderBoard.push(obj);
    }
    this.setState({leaderBoard});
    localStorage.setItem('leaderBoard', JSON.stringify(leaderBoard))
  }

  componentDidMount () {
    this.getLeaderBoard();
  }

  render () {

    let { leaderBoard } = this.state;
    console.log(leaderBoard, this.state)
    return (
      <div style={{width:'100%', height:'100%', display:'flex', flexDirection:'column',flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        <LeaderBoard className="test" leaderBoard={leaderBoard}  />
        <Quiz style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} update={this.updateLeaderBoard} />
      </div>
    )
  }


}

export default Dashboard;