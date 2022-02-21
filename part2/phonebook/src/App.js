import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '904-012-3456', id: 1 },
    { name: 'Ada Lovelace', number: '394-532-3523', id: 2 },
    { name: 'Dan Abramov', number: '124-323-4345', id: 3 },
    { name: 'Mary Poppendieck', number: '392-364-3122', id: 4 },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  //Filtering
  const [search, setSearch] = useState('');
  const [filterResult, setFilterResult] = useState([]);

  const addName = (event) => {
    event.preventDefault();
    const personDuplicate = persons
      .map((human) => human.name)
      .includes(newName);
    if (personDuplicate) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      const nameObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      };

      setPersons(persons.concat(nameObject));
      setNewName('');
      setNewNumber('');
    }
  };

  const handleAddName = (event) => {
    setNewName(event.target.value);
  };

  const handleAddNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilter = (event) => {
    setSearch(event.target.value);
    setFilterResult(persons.filter((human) => human.name.toLowerCase()));
  };

  return (
    <div>
      <div>debug: {newName}</div>
      <div>debug: {newNumber}</div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={search} onChange={handleFilter} />
      </div>
      <h3>add a new</h3>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleAddName} />
        </div>
        <div>
          phonebook: <input value={newNumber} onChange={handleAddNumber} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((human) => (
        <div key={human.id}>
          {human.name}: {human.number}
        </div>
      ))}
    </div>
  );
};

export default App;
