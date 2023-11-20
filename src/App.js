import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import Navbar from './Components/Navigation/Navbar';
import Footer from './Components/FooterPage/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Navigation/HomePages/home';
import Arvore from './Components/Navigation/HomePages/arvore';
import Fotografias from './Components/Navigation/HomePages/fotografias';
import Videos from './Components/Navigation/HomePages/videos';
import Audios from './Components/Navigation/HomePages/audios';
import AreaPessoal from './Components/Navigation/HomePages/areaPessoal';
import Documentos from './Components/Navigation/HomePages/documentos';




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