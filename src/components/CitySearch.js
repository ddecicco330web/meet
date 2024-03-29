import { useState, useEffect } from 'react';

const CitySearch = ({ allLocations, setCurrentCity, setInfoAlert }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    setSuggestions(allLocations);
  }, [`${allLocations}`]);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    const filteredLocations = allLocations
      ? allLocations.filter((location) => {
          return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        })
      : [];

    setQuery(value);
    setSuggestions(filteredLocations);

    let infoText;
    if (filteredLocations.length === 0) {
      infoText =
        'We can not find the city you are looking for. Please try another city';
    } else {
      infoText = '';
    }
    setInfoAlert(infoText);
  };

  const handleItemClicked = (event) => {
    const value = event.target.textContent;
    setQuery(value);
    setShowSuggestions(false); // to hide the list
    setCurrentCity(value);
    setInfoAlert('');
  };

  // document.body.addEventListener('click', (event) => {
  //   const searchElement = document.querySelector('#city-search');
  //   if (!searchElement.contains(event.target) && showSuggestions) {
  //     setShowSuggestions(false);
  //   }
  // });
  return (
    <div id="city-search">
      <div className="search-container">
        <img
          className="icon"
          src={process.env.PUBLIC_URL + '/search.png'}
          alt="search"
        />
        <input
          type="text"
          className="city"
          placeholder="Search for a city"
          value={query}
          onFocus={() => setShowSuggestions(true)}
          onChange={handleInputChanged}
        />
      </div>

      {showSuggestions ? (
        <ul className="suggestions">
          {suggestions.map((suggestion) => {
            return (
              <li
                onClick={handleItemClicked}
                key={suggestion}
                className="suggestion"
              >
                {suggestion}
              </li>
            );
          })}
          <li
            onClick={handleItemClicked}
            key="See all cities"
            className="suggestion"
          >
            <b>See all cities</b>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default CitySearch;
