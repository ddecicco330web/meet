const NumberOfEvents = ({ setCurrentNOE }) => {
  return (
    <input
      type="text"
      id="number-of-events"
      placeholder={32}
      onChange={(event) => {
        setCurrentNOE(event.target.value);
      }}
    ></input>
  );
};

export default NumberOfEvents;
