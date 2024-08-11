import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import AuthPage from './pages/Auth';
import Profile from './pages/Profile';
import Courses from './pages/Courses';
import NotFound from './pages/NotFound';
import Layout from './components/theme/Layout';
import AddDefCourse from './components/forms-client/defcourse';
import Join from './components/forms-client/join/form';

function App() {
  return (
    <Router>
      <Layout>
        <Routes children >
          <Route index element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/apply" element={<Join />} />
          <Route path="/add-course" element={<AddDefCourse />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
