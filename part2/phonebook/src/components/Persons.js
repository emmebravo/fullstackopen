const Persons = ({ filter }) => {
  return (
    <>
      {filter.map((human) => (
        <div key={human.id}>
          {human.name}: {human.number}
        </div>
      ))}
    </>
  );
};

export default Persons;
