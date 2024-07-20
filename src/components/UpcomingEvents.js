import React from 'react';
import './UpcomingEvents.css';
import eventsData from '../assets/eventsData'; 

const UpcomingEvents = () => {
  return (
    <div className="upcoming-events">
      <h2>Upcoming Events or Live Sessions</h2>
      <div className="events-container">
        {eventsData.map((event, index) => (
          <div className="event-card" key={index}>
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-content">
              <h3>{event.title}</h3>
              <p>{event.date}</p>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;