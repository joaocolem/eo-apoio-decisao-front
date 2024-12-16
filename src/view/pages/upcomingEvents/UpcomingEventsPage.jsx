import { useState, useEffect } from 'react';
import eventService from '../../../api/services/eventService';  
import EventTable from './eventTable/Table';  

const UpcomingEventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {

    eventService.getUpcomingEvents()
      .then((data) => {
        setEvents(data);  
      })
      .catch((error) => {
        console.error('Erro ao buscar eventos:', error);
      });
  }, []); 

  return (
    <div>
      <h1>Próximos Eventos</h1>
      <EventTable events={events} />
    </div>
  );
};

export default UpcomingEventsPage;
