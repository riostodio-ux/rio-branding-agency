import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { useLenis } from './hooks/useLenis';
import { Home, About, Services, Work, Process, Contact, Estimate, ProjectDetail, Privacy, Terms, KnowledgeHub, ArticleDetail } from './pages';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Smooth Scroll Wrapper
const SmoothScroll = () => {
  useLenis();
  return null;
}

function App() {
  return (
    <Router>
      <SmoothScroll />
      <ScrollToTop />
      <CustomCursor />
      <div className="flex flex-col min-h-screen" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', cursor: 'none' /* Hide default cursor */ }}>
        <Navbar />

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
            <Route path="/process" element={<Process />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/estimate" element={<Estimate />} />
            <Route path="/work/:projectId" element={<ProjectDetail />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/knowledge" element={<KnowledgeHub />} />
            <Route path="/knowledge/:slug" element={<ArticleDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
