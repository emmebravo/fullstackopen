import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const addName = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
    };

    const personDuplicate = persons.map((human) => human.name === newName);
    if (personDuplicate) {
      window.alert(`${newName} is already added to phonebook`);
    }

    setPersons(persons.concat(nameObject));
    setNewName('');
  };

  const handleAddName = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <div>debug: {newName}</div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleAddName} />
        </div>
        <div>
          phonebook: <input />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
    </div>
  );
};

export default App;
