import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import Navbar from './Components/Navigation/Navbar';
import Footer from './Components/FooterPage/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Navigation/Pages/home';
import Arvore from './Components/Navigation/Pages/arvore';
import Fotografias from './Components/Navigation/Pages/fotografias';
import Videos from './Components/Navigation/Pages/videos';
import Audios from './Components/Navigation/Pages/audios';
import AreaPessoal from './Components/Navigation/Pages/areaPessoal';
import Documentos from './Components/Navigation/Pages/documentos';




function App() {

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/arvore" Component={Arvore} />
            <Route path="/fotografias" Component={Fotografias} />
            <Route path="/videos" Component={Videos} />
            <Route path="/audios" Component={Audios} />
            <Route path="/documentos" Component={Documentos} />
            <Route path="/areaPessoal" Component={AreaPessoal} />
          </Routes>
          <Footer />
        </Router>
      </>
    </ThemeProvider>
  );
}
export default App;