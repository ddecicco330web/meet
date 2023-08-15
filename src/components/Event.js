import { useState } from 'react';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <li>
      <h1>{event.summary}</h1>
      <h2>{event.created}</h2>
      <h2>{event.location}</h2>
      {showDetails ? (
        <div>
          <h2 className="description">{event.description}</h2>
          <button
            className="hideDetails"
            onClick={() => {
              setShowDetails(false);
            }}
          >
            hide details
          </button>
        </div>
      ) : (
        <button
          className="showDetails"
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
