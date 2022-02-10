import { useState } from 'react';
import Header from './components/Header';
import Button from './components/Button';
import Display from './components/Display';

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
  const [votes, setVotes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  });

  const randomize = () => {
    let randomNum = Math.floor(Math.random() * anecdotes.length);
    setSelected((prevSelected) => (prevSelected = randomNum));
  };

  const voting = () => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [selected]: prevVotes[selected] + 1,
    }));
  };

  const values = Object.values(votes);
  const maxVotesIdx = values.indexOf(Math.max(...values));
  const maxVotes = Math.max(...values);

  return (
    <div>
      <Header text='Anecdote of the Day' />
      <Display anecdote={anecdotes[selected]} text={votes[selected]} />
      <Button onClick={voting} text='vote' />
      <Button onClick={randomize} text='next anecdote' />
      <Header text='Anecdote with Most Votes' />
      {maxVotes > 0 && (
        <Display anecdote={anecdotes[maxVotesIdx]} text={maxVotes} />
      )}
    </div>
  );
}

export default App;
