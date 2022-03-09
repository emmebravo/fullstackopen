const Form = (props) => {
  return (
    <form onSubmit={addName}>
      <div>
        name: <input value={newName} onChange={handleAddName} />
      </div>
      <div>
        phone book: <input value={newNumber} onChange={handleAddNumber} />
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  );
};

export default Form;
