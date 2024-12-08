import { useState, useEffect } from 'react';
import eventService from '../../../api/services/eventService';  // Importe o serviço que você criou
import EventTable from './eventTable/Table';  // Importe o componente da tabela

const UpcomingEventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Faz a requisição para a API usando o serviço
    eventService.getUpcomingEvents()
      .then((data) => {
        setEvents(data);  // Atualiza o estado com os eventos
      })
      .catch((error) => {
        console.error('Erro ao buscar eventos:', error);
      });
  }, []); // Executa uma vez quando o componente for montado

  return (
    <div>
      <h1>Próximos Eventos</h1>
      <EventTable events={events} />
    </div>
  );
};

export default UpcomingEventsPage;
