/* eslint-disable react/prop-types */
import { tw } from "twind";  // Importa a função tw

const EventRow = ({ event }) => (
    <tr className={tw`border-b hover:bg-gray-100`}>
        <td className={tw`px-4 py-2`}>{event.title}</td>
        <td className={tw`px-4 py-2`}>{event.date}</td>
        <td className={tw`px-4 py-2`}>{event.description}</td>
        <td className={tw`px-4 py-2`}>{event.organizerName}</td>
        <td className={tw`px-4 py-2`}>{event.maxParticipants}</td>
        <td className={tw`px-4 py-2`}>{event.registeredParticipants}</td>
    </tr>
);

const EventTable = ({ events }) => {
    return (
        <div className={tw`container mx-auto p-4`}>
            <h3 className={tw`text-xl font-semibold mb-4`}>
                Mostrando {events.length} evento(s)
            </h3>
            <table className={tw`min-w-full bg-white border border-gray-300 rounded-lg shadow-md`}>
                <thead className={tw`bg-gray-200 text-left`}>
                    <tr>
                        <th className={tw`px-6 py-3 font-medium text-gray-700`}>Título</th>
                        <th className={tw`px-6 py-3 font-medium text-gray-700`}>Data</th>
                        <th className={tw`px-6 py-3 font-medium text-gray-700`}>Descrição</th>
                        <th className={tw`px-6 py-3 font-medium text-gray-700`}>Organizador</th>
                        <th className={tw`px-6 py-3 font-medium text-gray-700`}>Max Participantes</th>
                        <th className={tw`px-6 py-3 font-medium text-gray-700`}>Participantes Registrados</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map((event) => (
                        <EventRow key={event.id} event={event} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EventTable;
