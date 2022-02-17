const Total = ({ parts }) => {
  const total = parts.reduce((acc, cv) => acc + cv.exercises, 0);

  return (
    <div>
      <h4>total of {total} exercises</h4>
    </div>
  );
};

export default Total;
