import React from 'react';

const LeaderBoard = (props) => {

  let {leaderBoard} = props;
  console.log(leaderBoard, 'AAAAAAAAAAA')

  let scores = leaderBoard && leaderBoard.map(el => {
    return (
      <div>
      <span>{el.name}</span>
      <span> {el.score[0]}</span>
      <span> of</span>
      <span> {el.score[1]}</span>
      </div>
    )});

  return (
    <div style={{position:'absolute', top:'0', height:'20%', width:'100%', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
    {leaderBoard ? scores : 'NO SCORES YET'}
    </div>
  )

};

export default LeaderBoard;