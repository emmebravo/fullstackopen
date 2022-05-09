const FindCountries = ({ search, onChange }) => {
  return (
    <>
      find countries <input value={search} onChange={onChange} />
    </>
  );
};

export default FindCountries;
