import { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';
import BouclesPage from './pages/BouclesPage.jsx';
import TableauxPage from './pages/TableauxPage.jsx';
import MatricesPage from './pages/MatricesPage.jsx';
import FonctionsPage from './pages/FonctionsPage.jsx';
import PiegesPage from './pages/PiegesPage.jsx';

const PAGES = {
  home: HomePage,
  boucles: BouclesPage,
  tableaux: TableauxPage,
  matrices: MatricesPage,
  fonctions: FonctionsPage,
  pieges: PiegesPage,
};

export default function App() {
  const [page, setPage] = useState('home');
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  const navigate = (id) => {
    setPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const PageComponent = PAGES[page] || HomePage;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar
        current={page}
        onNavigate={navigate}
        dark={dark}
        onToggleDark={() => setDark((d) => !d)}
      />
      <main>
        <PageComponent onNavigate={navigate} />
      </main>
    </div>
  );
}
