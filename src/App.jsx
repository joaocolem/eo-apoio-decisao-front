import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UpcomingEventsPage from './view/pages/upcomingEvents/UpcomingEventsPage';
import OrganizerPage from './view/pages/organizer/OrganizerPage';
import FeedbackAverageChart from './view/pages/FeedbackChart/FeedbackAverageChart';

const App = () => {
  return (
    <Router>
      <div style={{ backgroundColor: '#f7fafc', minHeight: '100vh' }}>
        {/* Header Section */}
        <header style={{ backgroundColor: '#3182ce', color: 'white', padding: '20px 0', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: '700' }}>Relatórios Organizador de Eventos</h1>
          </div>
        </header>

        {/* Navigation Section */}
        <nav style={{ backgroundColor: 'white', padding: '15px 0', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', gap: '20px' }}>
            <a href="/upcoming-events" style={navLinkStyle}>Próximos Eventos</a>
            <a href="/organizer-ratings" style={navLinkStyle}>Avaliações de Organizadores</a>
            <a href="/feedback-ratings" style={navLinkStyle}>Média de Feedback</a>
          </div>
        </nav>

        {/* Main Content Section */}
        <main style={{ padding: '20px' }}>
          <Routes>
            <Route path="/upcoming-events" element={<UpcomingEventsPage />} />
            <Route path="/organizer-ratings" element={<OrganizerPage />} />
            <Route path="/feedback-ratings" element={<FeedbackAverageChart />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

const navLinkStyle = {
  color: '#3182ce',
  textDecoration: 'none',
  fontSize: '1rem',
  fontWeight: '500',
  transition: 'color 0.3s',
};

export default App;
