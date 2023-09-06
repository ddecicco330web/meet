const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const handleInputChanged = (event) => {
    let errorText;
    if (isNaN(event.target.value) || event.target.value <= 0) {
      errorText = 'Enter a valid number';
    } else {
      errorText = '';
      setCurrentNOE(event.target.value);
    }

    setErrorAlert(errorText);
  };

  return (
    <input
      type="text"
      id="number-of-events"
      placeholder={32}
      onChange={handleInputChanged}
    ></input>
  );
};

export default NumberOfEvents;
