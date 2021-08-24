

import React, { useState } from "react";

const Button = ({ func, text }) => {
  return <button onClick={func}>{text}</button>;
};

const WinningAncedote = ({ anecdotes }) => {
  let [highestVote, setHighestVote] = useState(anecdotes)
  function highestAnecdote() {
    let votesArr = []
    for (let index of anecdotes) {
      votesArr.push(index.votes)
    }
    // console.log(votesArr)
    let max = votesArr[0]
    let maxIndex = 0
    for (let i = 0; i < votesArr.length; i++) {
      if (votesArr[i] > max) {
        maxIndex = i;
        max = votesArr[i];
      }
    }
    // console.log(max, maxIndex)
    return {max, maxIndex}
  }

  const { max, maxIndex } = (highestAnecdote())
  // console.log(max, maxIndex)


  return (
    <div>
      <div>
      {anecdotes[maxIndex].text}, votes:{anecdotes[maxIndex].votes}
      </div>
    </div>
  )
}

const initialAnecdotesState = [
  {text:"If it hurts, do it more often", votes: 12},
  { text: "Adding manpower to a late software project makes it later!", votes: 6 },
  {text:'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', votes: 0},
  {text:'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', votes: 12},
  {text:'Premature optimization is the root of all evil.', votes: 1},
  {text:'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', votes: 10},
  {text:'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients', votes: 0}
];


export default function App() {
  const [selected, setSelected] = useState(0);
  const [anecdotes, setAnecdotes] = useState(initialAnecdotesState);
 
  
  function addVote(){
    let copyAnecdotes = [...anecdotes];
    let newAnecdote = {...copyAnecdotes[selected]};
    newAnecdote.votes += 1;
    copyAnecdotes[selected] = newAnecdote;
    setAnecdotes(copyAnecdotes)
  }

  function displayA() {
    let randomNum = Math.floor((Math.random() * anecdotes.length));
    if (randomNum === selected) {
      return displayA()
    }
    setSelected(randomNum)
  }

 
  return (
    <div>
      <Button text="Anecdote" func={displayA} />
      {selected}
      <div>{anecdotes[selected].votes}{anecdotes[selected].text}</div>
      <Button text="vote" func={addVote} />
      <WinningAncedote anecdotes={anecdotes}/>
    </div>
  );
}

