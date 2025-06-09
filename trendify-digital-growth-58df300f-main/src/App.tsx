import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import CursorEffect from './components/CursorEffect';
import Index from './pages/Index';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" forcedTheme="dark">
      <Router>
        <div className="min-h-screen bg-[#030303] dark">
          <CursorEffect />
          <Navbar />
          <main className="relative">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/contact" element={<Contact />} />
              {/* Add other routes here */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
