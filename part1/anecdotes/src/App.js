import { useState } from 'react';

function App() {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
  ];

  const [selected, setSelected] = useState(0);
  const votesArr = Array(anecdotes.length).fill(0);
  const [votes, setVotes] = useState([votesArr]);

  const randomize = () => {
    let randomNum = Math.floor(Math.random() * anecdotes.length);
    setSelected((prevSelected) => (prevSelected = randomNum));
  };

  const voting = () => {
    const copyArr = [...votes];
    console.log('selected num: ', selected);
    console.log(typeof (copyArr[selected] += 1));
    //setVotes((prevVotes) => console.log(prevVotes[selected]));
  };

  return (
    <div>
      {anecdotes[selected]}
      <br />
      <button onClick={randomize}>next anecdote</button>
      <br />
      <button onClick={voting}>vote</button>
      {votes[selected]}
    </div>
  );
}

export default App;
