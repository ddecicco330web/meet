import { useState } from 'react';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  const dateTime = event.start.dateTime.split('T');
  const startTime = dateTime[1].substr(0, 5);

  return (
    <li className="event">
      <h1>{event.summary}</h1>
      <h4>{dateTime[0] + ' at ' + startTime}</h4>
      <h4>{event.location}</h4>
      {showDetails ? (
        <div>
          <h4 className="description">{event.description}</h4>
          <button
            className="details-btn"
            onClick={() => {
              setShowDetails(false);
            }}
          >
            hide details
          </button>
        </div>
      ) : (
        <button
          className="details-btn"
          onClick={() => {
            setShowDetails(true);
          }}
        >
          show details
        </button>
      )}
    </li>
  );
};

export default Event;
