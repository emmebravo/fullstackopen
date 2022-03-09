import { useState } from 'react';
import Filter from './components/Filter';
import Form from './components/Form';
import Header from './components/Header';
import Persons from './components/Persons';

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
  const [filterResult, setFilterResult] = useState(persons);

  //Add Names
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
    setFilterResult(
      persons.filter(
        (human) =>
          human.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !==
          -1
      )
    );
  };

  const addNameObj = {
    newName,
    newNumber,
    handleAddName,
    handleAddNumber,
  };

  return (
    <div>
      <Header name='Phone book' />
      <Filter value={search} onChange={handleFilter} />
      <h3>add a new</h3>
      <Form addName={addName} data={addNameObj} />
      <Header name='Numbers' />
      {!search.length ? (
        <Persons filter={persons} />
      ) : (
        <Persons filter={filterResult} />
      )}
    </div>
  );
};

export default App;
