const Display = ({ anecdote, text }) => {
  return (
    <div>
      <p>{anecdote}</p>
      <p>has {text} votes</p>
    </div>
  );
};

export default Display;
