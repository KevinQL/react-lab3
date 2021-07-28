import React from 'react';

import Titulo from './componentes/Titulo';
import Banner from './componentes/Banner';
import Busqueda from './componentes/Busqueda';
import Productos from './componentes/Productos';
import Footer from './componentes/Footer';

function App() {
  return (
    <div className='container'>
      <Titulo />
      <Banner />
      <Busqueda />
      <Productos />
      <Footer />
    </div>
  );
}

export default App;
