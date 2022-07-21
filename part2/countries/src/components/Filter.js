const Filter = ({ search, onChange }) => {
  return (
    <>
      Find countries <input value={search} onChange={onChange} />
    </>
  );
};

export default Filter;
