const Form = ({ addName, data }) => {
  return (
    <form onSubmit={addName}>
      <div>
        name: <input value={data.newName} onChange={data.handleAddName} />
      </div>
      <div>
        phone book:{' '}
        <input value={data.newNumber} onChange={data.handleAddNumber} />
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  );
};

export default Form;
