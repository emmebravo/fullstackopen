const Total = ({ parts }) => {
  const total = parts.reduce((acc, cv) => acc + cv.exercises, 0);

  return (
    <div>
      <p>total of {total} exercises</p>
    </div>
  );
};

export default Total;
