import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './app/Home';
import AuthPage from './app/Auth';
import Profile from './app/Profile';
import Courses from './app/Courses';
import NotFound from './app/NotFound';
import Layout from './components/theme/Layout';
import AddDefCourse from './components/forms-client/defcourse';
import Join from './components/forms-client/join/form';
import DynamicPage from './app/DynamicPage.jsx'; // مكون الصفحة الديناميكية
import Admin from './app/admin/layoutAdmin.jsx';
import OneCourses from './app/OneCourse.jsx';

function App() {
  return (
    <Router>
      <Layout>
        <Routes children >
          <Route index element={<Home />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<OneCourses />} />
          <Route path="/apply" element={<Join />} />
          <Route path="/add-course" element={<AddDefCourse />} />
          <Route path="/p/:slug" element={<DynamicPage />} /> {/* صفحة ديناميكية بناءً على الـ slug */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
