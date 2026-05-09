import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import InstructorListPage from './pages/InstructorListPage';
import InstructorDetailPage from './pages/InstructorDetailPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* MainLayout wraps all these routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="instructors" element={<InstructorListPage />} />
          <Route path="instructors/:id" element={<InstructorDetailPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="login" element={<LoginPage />} />
          {/* 404 still inside layout (optional) */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;